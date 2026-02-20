import { PropertyProfile, calculateCompletion } from "@/lib/types";

const STORAGE_KEY = "land-passports";

export function getAllPassports(): PropertyProfile[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function getPassport(id: string): PropertyProfile | null {
  const all = getAllPassports();
  return all.find((p) => p.id === id) || null;
}

export function savePassport(profile: PropertyProfile): void {
  profile.updatedAt = new Date().toISOString();
  profile.completionPercentage = calculateCompletion(profile);

  const all = getAllPassports();
  const idx = all.findIndex((p) => p.id === profile.id);
  if (idx >= 0) {
    all[idx] = profile;
  } else {
    all.push(profile);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function deletePassport(id: string): void {
  const all = getAllPassports().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function getPassportCount(): number {
  return getAllPassports().length;
}
