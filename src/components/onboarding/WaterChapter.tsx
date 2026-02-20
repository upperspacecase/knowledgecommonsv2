"use client";

import { PropertyProfile } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";
import ChapterShell from "./ChapterShell";
import FieldInput from "./FieldInput";

interface WaterChapterProps {
  profile: PropertyProfile;
  onUpdate: (profile: PropertyProfile) => void;
}

export default function WaterChapter({ profile, onUpdate }: WaterChapterProps) {
  const { t } = useLocale();

  const updateWater = (field: string, value: string | string[]) => {
    onUpdate({
      ...profile,
      water: { ...profile.water, [field]: value },
    });
  };

  return (
    <ChapterShell
      title={t("chapterWaterTitle")}
      description={t("chapterWaterDesc")}
      chapterNumber={3}
      totalChapters={5}
    >
      <div className="space-y-4">
        <FieldInput
          label={t("waterSources")}
          value={profile.water.sources.join(", ")}
          onChange={(v) =>
            updateWater(
              "sources",
              v
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
            )
          }
          placeholder={t("waterSourcesPlaceholder")}
        />
        <FieldInput
          label={t("waterFlow")}
          value={profile.water.flowDirection}
          onChange={(v) => updateWater("flowDirection", v)}
          placeholder={t("waterFlowPlaceholder")}
        />
        <FieldInput
          label={t("waterSeasonal")}
          value={profile.water.seasonalPatterns}
          onChange={(v) => updateWater("seasonalPatterns", v)}
          placeholder={t("waterSeasonalPlaceholder")}
          multiline
        />
        <FieldInput
          label={t("waterIrrigation")}
          value={profile.water.irrigationMethod}
          onChange={(v) => updateWater("irrigationMethod", v)}
          placeholder={t("waterIrrigationPlaceholder")}
        />
        <FieldInput
          label={t("waterNotes")}
          value={profile.water.notes}
          onChange={(v) => updateWater("notes", v)}
          placeholder={t("waterNotesPlaceholder")}
          multiline
        />
      </div>
    </ChapterShell>
  );
}
