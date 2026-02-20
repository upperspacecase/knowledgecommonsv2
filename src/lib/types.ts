export interface PropertyBoundary {
  type: "Polygon";
  coordinates: [number, number][][];
}

export interface SoilData {
  texture: string;
  ph: string;
  organicMatter: string;
  lastTestDate: string;
  notes: string;
}

export interface WaterData {
  sources: string[];
  flowDirection: string;
  seasonalPatterns: string;
  irrigationMethod: string;
  notes: string;
}

export interface PlantData {
  existingSpecies: string[];
  desiredSpecies: string[];
  canopyDescription: string;
  groundCoverDescription: string;
  notes: string;
}

export interface FireData {
  riskLevel: "low" | "medium" | "high" | "unknown";
  firebreakStatus: string;
  defensibleSpace: string;
  evacuationPlan: string;
  lastFireEvent: string;
  preparednessNotes: string;
}

export interface PropertyProfile {
  id: string;
  name: string;
  ownerName: string;
  location: {
    latitude: number;
    longitude: number;
    region: string;
    country: string;
  };
  boundary: PropertyBoundary | null;
  areaHectares: number;
  soil: SoilData;
  water: WaterData;
  plants: PlantData;
  fire: FireData;
  bioregion: string;
  climate: string;
  createdAt: string;
  updatedAt: string;
  completionPercentage: number;
  locale: "en" | "pt";
}

export type OnboardingChapter =
  | "boundary"
  | "soil"
  | "water"
  | "plants"
  | "fire";

export const CHAPTER_ORDER: OnboardingChapter[] = [
  "boundary",
  "soil",
  "water",
  "plants",
  "fire",
];

export function createEmptyProfile(id: string, locale: "en" | "pt"): PropertyProfile {
  return {
    id,
    name: "",
    ownerName: "",
    location: {
      latitude: 0,
      longitude: 0,
      region: "",
      country: "",
    },
    boundary: null,
    areaHectares: 0,
    soil: {
      texture: "",
      ph: "",
      organicMatter: "",
      lastTestDate: "",
      notes: "",
    },
    water: {
      sources: [],
      flowDirection: "",
      seasonalPatterns: "",
      irrigationMethod: "",
      notes: "",
    },
    plants: {
      existingSpecies: [],
      desiredSpecies: [],
      canopyDescription: "",
      groundCoverDescription: "",
      notes: "",
    },
    fire: {
      riskLevel: "unknown",
      firebreakStatus: "",
      defensibleSpace: "",
      evacuationPlan: "",
      lastFireEvent: "",
      preparednessNotes: "",
    },
    bioregion: "",
    climate: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completionPercentage: 0,
    locale,
  };
}

export function calculateCompletion(profile: PropertyProfile): number {
  let filled = 0;
  let total = 0;

  // Boundary
  total++;
  if (profile.boundary) filled++;

  // Soil fields
  const soilFields = ["texture", "ph", "organicMatter"] as const;
  total += soilFields.length;
  soilFields.forEach((f) => {
    if (profile.soil[f]) filled++;
  });

  // Water fields
  total += 2;
  if (profile.water.sources.length > 0) filled++;
  if (profile.water.seasonalPatterns) filled++;

  // Plants
  total += 2;
  if (profile.plants.existingSpecies.length > 0) filled++;
  if (profile.plants.groundCoverDescription) filled++;

  // Fire
  total += 2;
  if (profile.fire.riskLevel !== "unknown") filled++;
  if (profile.fire.firebreakStatus) filled++;

  return Math.round((filled / total) * 100);
}
