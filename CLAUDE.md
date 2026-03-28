# CLAUDE.md

Official website for the 13th Annual MIT Bitcoin Expo 2026 (April 10–12). Next.js 15 App Router, TypeScript, Tailwind CSS v4, shadcn/ui, Motion.

## Commands

```bash
npm run build        # Production build
npm run lint         # ESLint
npm run format       # Prettier (writes)
npm run format:check # Prettier (check only)
```

No test suite. After every task, run: `npm run lint 2>&1 && npm run build 2>&1` and fix all errors. Do NOT start the dev server.

## Architecture

### Data (`/src/lib/` and `/src/data/`)
All content lives in constants files. This is the primary place for content edits:
- `speakers-constants.ts` — speaker data
- `sponsors-constants.ts` — sponsor tiers/logos
- `team-constants.ts` — team members
- `logo-constants.ts` — logo assets
- `/src/data/hackathon.ts` — hackathon details, FAQs

### Pages (`/src/app/`)
- `page.tsx` — homepage (Hero, Countdown, SpeakerStrip, HomeSponsors)
- `speakers/` — listing + dynamic `[slug]` detail pages
- `hackathon/` — hackathon info
- `sponsors/` — sponsors page
- `team/` — team page

### Components (`/src/components/`)
- `sections/` — page sections (hero, countdown, speaker-strip)
- `layout/` — navbar, footer, floating-socials, ticket-notice
- `3d/` — Three.js star field (lazy-loaded)
- `animations/` — Motion background/particle helpers
- `ui/` — shadcn/ui primitives
- `seo/json-ld.tsx` — JSON-LD structured data

## Brand Colors

Background: #0C0A09 | Surface: #1C1917 | Border: #292524
Muted: #78716C | Foreground: #FAFAF9
Accent: #C0FF70 (volt green) | Secondary: #3F0100 (blood)

## Styling

Tailwind CSS v4 with PostCSS. Use `cn()` from `@/lib/utils` for conditional class merging. This is a design-heavy site — visual polish, spacing, typography hierarchy, and pixel-perfect alignment matter.

## Images

Remote photos need the domain added to `images.remotePatterns` in `next.config.ts`. Local images: speakers in `/public/2026Speakers/`, team in `/public/team/`, sponsors in `/public/2026Sponsors/`. Use `cwebp` for WebP conversion. Use `sips` for dimension checks. For bulk WebP conversion, use separate `for` loops per file extension (not combined globs).

## Coding Rules

- Server Components by default. Only add 'use client' when needed
- No `any` types. Type everything
- Components under 100 lines. Split by responsibility
- Props down, events up. No prop drilling beyond 2 levels
- No premature abstraction. Duplicate until 3rd occurrence
- Use `cn()` for conditional Tailwind classes
- Install shadcn components via `npx shadcn@latest add [component]`

## IMPORTANT: Workflow Rules

- **ALWAYS read existing code and established patterns before implementing anything new.** Do not assume how something works. Examine the actual components first.
- **Make targeted, minimal changes.** No broad modifications, no over-engineering. Prefer precise, scoped edits.
- **Prefer lower-risk solutions** over complex automation when a simpler approach exists.
- When editing files, use exact text matching including whitespace. Read with `offset: -10` when targeting end-of-file.

## Copy & Content Rules

- No dashes in formatted copy (Eventbrite, WhatsApp, promotional text)
- Tone: natural and community-appropriate, not corporate, not forced-casual
- Accuracy over polish. Do not embellish or use misleading language

## Key Config

- `next.config.ts` — React Compiler enabled, remote image domain allowlist
- `components.json` — shadcn/ui config
- `tsconfig.json` — strict mode, `@/*` alias → `./src/*`