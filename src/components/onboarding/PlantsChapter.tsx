"use client";

import { PropertyProfile } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";
import ChapterShell from "./ChapterShell";
import FieldInput from "./FieldInput";

interface PlantsChapterProps {
  profile: PropertyProfile;
  onUpdate: (profile: PropertyProfile) => void;
}

export default function PlantsChapter({
  profile,
  onUpdate,
}: PlantsChapterProps) {
  const { t } = useLocale();

  const updatePlants = (field: string, value: string | string[]) => {
    onUpdate({
      ...profile,
      plants: { ...profile.plants, [field]: value },
    });
  };

  return (
    <ChapterShell
      title={t("chapterPlantsTitle")}
      description={t("chapterPlantsDesc")}
      chapterNumber={4}
      totalChapters={5}
    >
      <div className="space-y-4">
        <FieldInput
          label={t("plantsExisting")}
          value={profile.plants.existingSpecies.join(", ")}
          onChange={(v) =>
            updatePlants(
              "existingSpecies",
              v
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
            )
          }
          placeholder={t("plantsExistingPlaceholder")}
        />
        <FieldInput
          label={t("plantsDesired")}
          value={profile.plants.desiredSpecies.join(", ")}
          onChange={(v) =>
            updatePlants(
              "desiredSpecies",
              v
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean)
            )
          }
          placeholder={t("plantsDesiredPlaceholder")}
        />
        <FieldInput
          label={t("plantsCanopy")}
          value={profile.plants.canopyDescription}
          onChange={(v) => updatePlants("canopyDescription", v)}
          placeholder={t("plantsCanopyPlaceholder")}
          multiline
        />
        <FieldInput
          label={t("plantsGround")}
          value={profile.plants.groundCoverDescription}
          onChange={(v) => updatePlants("groundCoverDescription", v)}
          placeholder={t("plantsGroundPlaceholder")}
          multiline
        />
        <FieldInput
          label={t("plantsNotes")}
          value={profile.plants.notes}
          onChange={(v) => updatePlants("notes", v)}
          placeholder={t("plantsNotesPlaceholder")}
          multiline
        />
      </div>
    </ChapterShell>
  );
}
