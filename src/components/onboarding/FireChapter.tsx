"use client";

import { PropertyProfile } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";
import ChapterShell from "./ChapterShell";
import FieldInput from "./FieldInput";

interface FireChapterProps {
  profile: PropertyProfile;
  onUpdate: (profile: PropertyProfile) => void;
}

export default function FireChapter({ profile, onUpdate }: FireChapterProps) {
  const { t } = useLocale();

  const updateFire = (field: string, value: string) => {
    onUpdate({
      ...profile,
      fire: { ...profile.fire, [field]: value },
    });
  };

  const riskLevels = [
    { value: "low", label: t("fireRiskLow") },
    { value: "medium", label: t("fireRiskMedium") },
    { value: "high", label: t("fireRiskHigh") },
    { value: "unknown", label: t("fireRiskUnknown") },
  ] as const;

  return (
    <ChapterShell
      title={t("chapterFireTitle")}
      description={t("chapterFireDesc")}
      chapterNumber={5}
      totalChapters={5}
    >
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-stone-700">
            {t("fireRisk")}
          </label>
          <div className="flex flex-wrap gap-2">
            {riskLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => updateFire("riskLevel", level.value)}
                className={`px-4 py-2 rounded-md text-sm border transition-colors ${
                  profile.fire.riskLevel === level.value
                    ? "bg-green-800 text-white border-green-800"
                    : "bg-white text-stone-700 border-stone-300 hover:border-stone-400"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>

        <FieldInput
          label={t("fireBreak")}
          value={profile.fire.firebreakStatus}
          onChange={(v) => updateFire("firebreakStatus", v)}
          placeholder={t("fireBreakPlaceholder")}
        />
        <FieldInput
          label={t("fireDefensible")}
          value={profile.fire.defensibleSpace}
          onChange={(v) => updateFire("defensibleSpace", v)}
          placeholder={t("fireDefensiblePlaceholder")}
        />
        <FieldInput
          label={t("fireEvacuation")}
          value={profile.fire.evacuationPlan}
          onChange={(v) => updateFire("evacuationPlan", v)}
          placeholder={t("fireEvacuationPlaceholder")}
        />
        <FieldInput
          label={t("fireLastEvent")}
          value={profile.fire.lastFireEvent}
          onChange={(v) => updateFire("lastFireEvent", v)}
          placeholder={t("fireLastEventPlaceholder")}
        />
        <FieldInput
          label={t("fireNotes")}
          value={profile.fire.preparednessNotes}
          onChange={(v) => updateFire("preparednessNotes", v)}
          placeholder={t("fireNotesPlaceholder")}
          multiline
        />
      </div>
    </ChapterShell>
  );
}
