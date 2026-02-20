"use client";

import { PropertyProfile } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";
import ChapterShell from "./ChapterShell";
import FieldInput from "./FieldInput";

interface SoilChapterProps {
  profile: PropertyProfile;
  onUpdate: (profile: PropertyProfile) => void;
}

export default function SoilChapter({ profile, onUpdate }: SoilChapterProps) {
  const { t } = useLocale();

  const updateSoil = (field: string, value: string) => {
    onUpdate({
      ...profile,
      soil: { ...profile.soil, [field]: value },
    });
  };

  return (
    <ChapterShell
      title={t("chapterSoilTitle")}
      description={t("chapterSoilDesc")}
      chapterNumber={2}
      totalChapters={5}
    >
      <div className="space-y-4">
        <FieldInput
          label={t("soilTexture")}
          value={profile.soil.texture}
          onChange={(v) => updateSoil("texture", v)}
          placeholder={t("soilTexturePlaceholder")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldInput
            label={t("soilPh")}
            value={profile.soil.ph}
            onChange={(v) => updateSoil("ph", v)}
            placeholder={t("soilPhPlaceholder")}
          />
          <FieldInput
            label={t("soilOrganicMatter")}
            value={profile.soil.organicMatter}
            onChange={(v) => updateSoil("organicMatter", v)}
            placeholder={t("soilOrganicMatterPlaceholder")}
          />
        </div>
        <FieldInput
          label={t("soilLastTest")}
          value={profile.soil.lastTestDate}
          onChange={(v) => updateSoil("lastTestDate", v)}
          type="date"
        />
        <FieldInput
          label={t("soilNotes")}
          value={profile.soil.notes}
          onChange={(v) => updateSoil("notes", v)}
          placeholder={t("soilNotesPlaceholder")}
          multiline
        />
      </div>
    </ChapterShell>
  );
}
