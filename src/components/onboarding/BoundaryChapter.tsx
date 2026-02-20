"use client";

import { PropertyProfile, PropertyBoundary } from "@/lib/types";
import { useLocale } from "@/components/ui/LocaleProvider";
import ChapterShell from "./ChapterShell";
import FieldInput from "./FieldInput";
import dynamic from "next/dynamic";

const PropertyMap = dynamic(() => import("@/components/map/PropertyMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-stone-100 rounded-lg animate-pulse" />
  ),
});

interface BoundaryChapterProps {
  profile: PropertyProfile;
  onUpdate: (profile: PropertyProfile) => void;
}

export default function BoundaryChapter({
  profile,
  onUpdate,
}: BoundaryChapterProps) {
  const { t } = useLocale();

  return (
    <ChapterShell
      title={t("chapterBoundaryTitle")}
      description={t("chapterBoundaryDesc")}
      chapterNumber={1}
      totalChapters={5}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FieldInput
            label={t("basicsName")}
            value={profile.name}
            onChange={(v) => onUpdate({ ...profile, name: v })}
            placeholder={t("basicsNamePlaceholder")}
          />
          <FieldInput
            label={t("basicsOwner")}
            value={profile.ownerName}
            onChange={(v) => onUpdate({ ...profile, ownerName: v })}
            placeholder={t("basicsOwnerPlaceholder")}
          />
        </div>

        <PropertyMap
          boundary={profile.boundary}
          editable
          onBoundaryChange={(boundary: PropertyBoundary, areaHectares: number) => {
            onUpdate({
              ...profile,
              boundary,
              areaHectares,
              location: {
                ...profile.location,
                latitude: boundary.coordinates[0][0][1],
                longitude: boundary.coordinates[0][0][0],
              },
            });
          }}
          height="450px"
        />

        {profile.areaHectares > 0 && (
          <p className="text-sm text-stone-600">
            {t("passportArea")}: <strong>{profile.areaHectares}</strong>{" "}
            {t("passportHectares")}
          </p>
        )}
      </div>
    </ChapterShell>
  );
}
