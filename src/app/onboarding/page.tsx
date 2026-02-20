"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { PropertyProfile, createEmptyProfile, CHAPTER_ORDER, OnboardingChapter } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";
import { savePassport, getPassport } from "@/store/passports";
import BoundaryChapter from "@/components/onboarding/BoundaryChapter";
import SoilChapter from "@/components/onboarding/SoilChapter";
import WaterChapter from "@/components/onboarding/WaterChapter";
import PlantsChapter from "@/components/onboarding/PlantsChapter";
import FireChapter from "@/components/onboarding/FireChapter";

function enrichWithBioregionData(profile: PropertyProfile): PropertyProfile {
  const lat = profile.location.latitude;
  const lng = profile.location.longitude;

  if (lat === 0 && lng === 0) return profile;

  let bioregion = "";
  let climate = "";

  // Simple heuristic enrichment based on coordinates
  // Portugal / Southwest Iberia
  if (lat >= 36.5 && lat <= 42.5 && lng >= -10 && lng <= -6) {
    if (lat < 39) {
      bioregion = "Southwest Iberian Mediterranean";
      climate =
        "Mediterranean (Csa) — hot dry summers, mild wet winters. Fire season June–October.";
    } else {
      bioregion = "Northwest Iberian Atlantic-Mediterranean transition";
      climate =
        "Mediterranean with Atlantic influence — warm summers, wet winters.";
    }
  }
  // Generic Mediterranean
  else if (lat >= 30 && lat <= 45 && (lng >= -10 && lng <= 35)) {
    bioregion = "Mediterranean Basin";
    climate = "Mediterranean climate — seasonal drought, fire-adapted ecosystems.";
  }

  return {
    ...profile,
    bioregion: profile.bioregion || bioregion,
    climate: profile.climate || climate,
  };
}

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-2xl mx-auto px-4 py-20 text-center text-stone-500">
          Loading...
        </div>
      }
    >
      <OnboardingContent />
    </Suspense>
  );
}

function OnboardingContent() {
  const { locale, t } = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [profile, setProfile] = useState<PropertyProfile | null>(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (editId) {
      const existing = getPassport(editId);
      if (existing) {
        setProfile(existing);
        setStarted(true);
        return;
      }
    }
    setProfile(createEmptyProfile(uuidv4(), locale));
  }, [editId, locale]);

  const handleUpdate = useCallback((updated: PropertyProfile) => {
    setProfile(updated);
  }, []);

  const handleFinish = useCallback(() => {
    if (!profile) return;
    const enriched = enrichWithBioregionData(profile);
    savePassport(enriched);
    router.push(`/passport/${enriched.id}`);
  }, [profile, router]);

  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center text-stone-500">
        Loading...
      </div>
    );
  }

  const chapter: OnboardingChapter = CHAPTER_ORDER[currentChapter];
  const isFirst = currentChapter === 0;
  const isLast = currentChapter === CHAPTER_ORDER.length - 1;

  // Intro screen
  if (!started) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-stone-800">
          {t("onboardingTitle")}
        </h1>
        <p className="text-stone-600 leading-relaxed max-w-xl mx-auto">
          {t("onboardingIntro")}
        </p>
        <button
          onClick={() => setStarted(true)}
          className="bg-green-800 text-white px-8 py-3 rounded-md hover:bg-green-900 transition-colors font-medium"
        >
          {t("onboardingStart")}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex gap-1">
          {CHAPTER_ORDER.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= currentChapter ? "bg-green-700" : "bg-stone-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Chapter content */}
      {chapter === "boundary" && (
        <BoundaryChapter profile={profile} onUpdate={handleUpdate} />
      )}
      {chapter === "soil" && (
        <SoilChapter profile={profile} onUpdate={handleUpdate} />
      )}
      {chapter === "water" && (
        <WaterChapter profile={profile} onUpdate={handleUpdate} />
      )}
      {chapter === "plants" && (
        <PlantsChapter profile={profile} onUpdate={handleUpdate} />
      )}
      {chapter === "fire" && (
        <FireChapter profile={profile} onUpdate={handleUpdate} />
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4 border-t border-stone-200">
        <button
          onClick={() => setCurrentChapter((c) => c - 1)}
          disabled={isFirst}
          className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
            isFirst
              ? "text-stone-300 cursor-not-allowed"
              : "text-stone-700 border border-stone-300 hover:bg-stone-50"
          }`}
        >
          {t("onboardingPrev")}
        </button>
        {isLast ? (
          <button
            onClick={handleFinish}
            className="px-6 py-2.5 bg-green-800 text-white rounded-md hover:bg-green-900 transition-colors text-sm font-medium"
          >
            {t("onboardingFinish")}
          </button>
        ) : (
          <button
            onClick={() => setCurrentChapter((c) => c + 1)}
            className="px-6 py-2.5 bg-green-800 text-white rounded-md hover:bg-green-900 transition-colors text-sm font-medium"
          >
            {t("onboardingNext")}
          </button>
        )}
      </div>
    </div>
  );
}
