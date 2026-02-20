# Project Lovelock — Knowledge Commons v2

## What this is

The Land Passport: a per-property knowledge profile that makes land legible to the person standing on it. A landowner creates one through a guided onboarding flow; the platform enriches it with publicly available environmental data.

The platform lives at lllibrary.org.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Leaflet + react-leaflet for map/property boundary drawing
- Turf.js for geospatial calculations
- Local storage for data persistence (no backend in M1)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

## Architecture

```
src/
  app/           — Next.js App Router pages
  components/    — React components
  i18n/          — Bilingual strings (EN/PT)
  lib/           — Utilities, types, data helpers
  store/         — Local storage persistence layer
```

## Design principles

- The entry should feel like opening a journal, not filling out a government form
- Each onboarding chapter should feel like the platform is genuinely curious about the land
- The Land Passport is the product. Fifteen passports is the milestone.
- No AI chat interface — that's Milestone 2
- No social/community layer
- Bilingual: English and Portuguese at minimum

## Milestone 1 scope

In: Property boundary mapping, chapter-based onboarding (soil, water, plants, fire preparedness), auto-aggregated public data per property, shareable Land Passport page, EN/PT, progress tracking toward 15 contributions.

Not in: AI chat, cross-property collaboration, IoT, tool-sharing, community features.
