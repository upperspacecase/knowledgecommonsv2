"use client";

import { PropertyProfile } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";
import dynamic from "next/dynamic";
import Link from "next/link";

const PropertyMap = dynamic(() => import("@/components/map/PropertyMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] bg-stone-100 rounded-lg animate-pulse" />
  ),
});

interface PassportViewProps {
  profile: PropertyProfile;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-stone-800 border-b border-stone-200 pb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-1">
      <dt className="text-sm text-stone-500 sm:w-44 shrink-0">{label}</dt>
      <dd className="text-sm text-stone-800">{value}</dd>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-1">
      {items.map((item, i) => (
        <span
          key={i}
          className="bg-green-50 text-green-800 text-xs px-2.5 py-1 rounded-full border border-green-200"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function PassportView({ profile }: PassportViewProps) {
  const { t } = useLocale();

  const riskLabels: Record<string, string> = {
    low: t("fireRiskLow"),
    medium: t("fireRiskMedium"),
    high: t("fireRiskHigh"),
    unknown: t("fireRiskUnknown"),
  };

  const riskColors: Record<string, string> = {
    low: "bg-green-100 text-green-800",
    medium: "bg-amber-100 text-amber-800",
    high: "bg-red-100 text-red-800",
    unknown: "bg-stone-100 text-stone-600",
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-xs uppercase tracking-widest text-green-800 font-medium">
          {t("passportTitle")}
        </p>
        <h1 className="text-3xl font-bold text-stone-800">
          {profile.name || t("passportProperty")}
        </h1>
        <p className="text-stone-500">{t("passportSubtitle")}</p>
      </div>

      {/* Map */}
      {profile.boundary && (
        <PropertyMap
          boundary={profile.boundary}
          height="300px"
          center={[profile.location.latitude, profile.location.longitude]}
          zoom={15}
        />
      )}

      {/* Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-stone-50 rounded-lg p-4 text-center">
          <p className="text-xs text-stone-500 uppercase tracking-wide">
            {t("passportOwner")}
          </p>
          <p className="text-sm font-medium text-stone-800 mt-1">
            {profile.ownerName || "—"}
          </p>
        </div>
        <div className="bg-stone-50 rounded-lg p-4 text-center">
          <p className="text-xs text-stone-500 uppercase tracking-wide">
            {t("passportArea")}
          </p>
          <p className="text-sm font-medium text-stone-800 mt-1">
            {profile.areaHectares > 0
              ? `${profile.areaHectares} ${t("passportHectares")}`
              : "—"}
          </p>
        </div>
        <div className="bg-stone-50 rounded-lg p-4 text-center">
          <p className="text-xs text-stone-500 uppercase tracking-wide">
            {t("passportCompletion")}
          </p>
          <p className="text-sm font-medium text-stone-800 mt-1">
            {profile.completionPercentage}%
          </p>
        </div>
        <div className="bg-stone-50 rounded-lg p-4 text-center">
          <p className="text-xs text-stone-500 uppercase tracking-wide">
            {t("passportCreated")}
          </p>
          <p className="text-sm font-medium text-stone-800 mt-1">
            {new Date(profile.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Completion bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-stone-600">{t("passportCompletion")}</span>
          <span className="font-medium text-stone-800">
            {profile.completionPercentage}%
          </span>
        </div>
        <div className="w-full bg-stone-200 rounded-full h-2">
          <div
            className="bg-green-700 h-2 rounded-full transition-all duration-500"
            style={{ width: `${profile.completionPercentage}%` }}
          />
        </div>
      </div>

      {/* Bioregion info (auto-enriched) */}
      {(profile.bioregion || profile.climate) && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2">
          <p className="text-xs uppercase tracking-widest text-green-700 font-medium">
            Auto-enriched data
          </p>
          {profile.bioregion && (
            <DataRow label={t("passportBioregion")} value={profile.bioregion} />
          )}
          {profile.climate && (
            <DataRow label={t("passportClimate")} value={profile.climate} />
          )}
        </div>
      )}

      {/* Soil */}
      <Section title={t("passportSectionSoil")}>
        <dl className="space-y-1">
          <DataRow label={t("soilTexture")} value={profile.soil.texture} />
          <DataRow label={t("soilPh")} value={profile.soil.ph} />
          <DataRow
            label={t("soilOrganicMatter")}
            value={profile.soil.organicMatter}
          />
          <DataRow
            label={t("soilLastTest")}
            value={profile.soil.lastTestDate}
          />
          {profile.soil.notes && (
            <p className="text-sm text-stone-600 italic mt-2">
              {profile.soil.notes}
            </p>
          )}
        </dl>
      </Section>

      {/* Water */}
      <Section title={t("passportSectionWater")}>
        {profile.water.sources.length > 0 && (
          <div>
            <p className="text-sm text-stone-500 mb-1">{t("waterSources")}</p>
            <TagList items={profile.water.sources} />
          </div>
        )}
        <dl className="space-y-1">
          <DataRow label={t("waterFlow")} value={profile.water.flowDirection} />
          <DataRow
            label={t("waterSeasonal")}
            value={profile.water.seasonalPatterns}
          />
          <DataRow
            label={t("waterIrrigation")}
            value={profile.water.irrigationMethod}
          />
          {profile.water.notes && (
            <p className="text-sm text-stone-600 italic mt-2">
              {profile.water.notes}
            </p>
          )}
        </dl>
      </Section>

      {/* Plants */}
      <Section title={t("passportSectionPlants")}>
        {profile.plants.existingSpecies.length > 0 && (
          <div>
            <p className="text-sm text-stone-500 mb-1">
              {t("plantsExisting")}
            </p>
            <TagList items={profile.plants.existingSpecies} />
          </div>
        )}
        {profile.plants.desiredSpecies.length > 0 && (
          <div>
            <p className="text-sm text-stone-500 mb-1">
              {t("plantsDesired")}
            </p>
            <TagList items={profile.plants.desiredSpecies} />
          </div>
        )}
        <dl className="space-y-1">
          <DataRow
            label={t("plantsCanopy")}
            value={profile.plants.canopyDescription}
          />
          <DataRow
            label={t("plantsGround")}
            value={profile.plants.groundCoverDescription}
          />
          {profile.plants.notes && (
            <p className="text-sm text-stone-600 italic mt-2">
              {profile.plants.notes}
            </p>
          )}
        </dl>
      </Section>

      {/* Fire */}
      <Section title={t("passportSectionFire")}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-stone-500">{t("fireRisk")}:</span>
          <span
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              riskColors[profile.fire.riskLevel]
            }`}
          >
            {riskLabels[profile.fire.riskLevel]}
          </span>
        </div>
        <dl className="space-y-1">
          <DataRow
            label={t("fireBreak")}
            value={profile.fire.firebreakStatus}
          />
          <DataRow
            label={t("fireDefensible")}
            value={profile.fire.defensibleSpace}
          />
          <DataRow
            label={t("fireEvacuation")}
            value={profile.fire.evacuationPlan}
          />
          <DataRow
            label={t("fireLastEvent")}
            value={profile.fire.lastFireEvent}
          />
          {profile.fire.preparednessNotes && (
            <p className="text-sm text-stone-600 italic mt-2">
              {profile.fire.preparednessNotes}
            </p>
          )}
        </dl>
      </Section>

      {/* Actions */}
      <div className="flex gap-3 justify-center pt-4 border-t border-stone-200">
        <Link
          href={`/onboarding?edit=${profile.id}`}
          className="px-6 py-2.5 bg-green-800 text-white rounded-md hover:bg-green-900 transition-colors text-sm font-medium"
        >
          {t("passportEdit")}
        </Link>
        <button
          onClick={() => {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
              navigator.clipboard.writeText(window.location.href);
            }
          }}
          className="px-6 py-2.5 border border-stone-300 text-stone-700 rounded-md hover:bg-stone-50 transition-colors text-sm font-medium"
        >
          {t("passportShare")}
        </button>
      </div>
    </div>
  );
}
