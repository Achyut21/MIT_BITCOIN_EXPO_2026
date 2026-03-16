# MIT Bitcoin Expo 2026

The official website for the **13th Annual MIT Bitcoin Expo** — a two-day conference and 36-hour hackathon hosted at MIT's Stata Center in Cambridge, MA on April 11–12, 2026.

**Theme: Freedom for All**

🌐 [mitbitcoinexpo.org](https://mitbitcoinexpo.org)

---

## About

MIT Bitcoin Expo is the longest-running university-hosted Bitcoin event in the world. Since 2014, the expo has brought together developers, researchers, and enthusiasts to explore the frontiers of Bitcoin and decentralized technology. The 2026 edition features a conference with industry-leading speakers and a hackathon with a community-first prize model — 70% of the prize pool is shared among all qualifying participants.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI primitives |
| Animation | Motion (Framer Motion v12) |
| 3D | React Three Fiber + Drei + Three.js r181 |
| Blog | Markdown via gray-matter + remark + remark-html |
| Fonts | Geist Sans + Geist Mono (next/font/google) |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Lint
npm run lint

# Build for production
npm run build

# Format code
npm run format
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout (metadata, fonts, global providers)
│   ├── globals.css             # Tailwind v4 CSS variables + global styles
│   ├── hackathon/              # Hackathon details page
│   ├── speakers/               # Speakers listing page
│   │   └── [slug]/             # Dynamic speaker detail pages
│   ├── sponsors/               # Sponsors page
│   ├── team/                   # Team page
│   ├── blog/                   # Blog listing page
│   │   └── [slug]/             # Dynamic blog post pages (Markdown-rendered)
│   ├── robots.ts               # SEO robots config
│   └── sitemap.ts              # Dynamic XML sitemap (includes speaker + blog slugs)
├── components/
│   ├── ui/                     # shadcn/ui primitives (accordion, badge, button, card, separator, tabs)
│   ├── layout/                 # Navbar, Footer, FloatingSocials, TicketNotice
│   ├── sections/               # Page sections (Hero, Countdown, SpeakerStrip, etc.)
│   ├── animations/             # Background, FloatingParticles
│   ├── 3d/                     # StarsBackground (Three.js, lazy-loaded)
│   └── seo/                    # JsonLd structured data component
├── data/
│   └── hackathon.ts            # Hackathon prize/track/FAQ data
├── lib/
│   ├── speakers-constants.ts   # Speaker data + slug generator
│   ├── sponsors-constants.ts   # Sponsor tier data
│   ├── team-constants.ts       # Team member data
│   ├── logo-constants.ts       # Logo/brand assets
│   ├── posts.ts                # Blog post file system reader (gray-matter + remark)
│   └── utils.ts                # cn() utility
└── public/
    ├── _posts/                 # Markdown blog posts with frontmatter
    └── ...                     # Static assets (images, fonts, og-image)
```

---

## Pages

### Homepage (`/`)
- Animated hero section with background video and floating particles
- Live countdown timer to the event
- Scrolling speaker marquee strip
- Sponsor logo grid
- Blog preview cards

### Speakers (`/speakers`)
- Full speaker grid with headshots and bios
- Dynamic detail pages at `/speakers/[slug]` — slugs auto-generated from names via `generateSlug()`
- "More speakers to be announced" placeholder state

### Hackathon (`/hackathon`)
- Event details, tracks, prize structure, and FAQ
- All content driven from `data/hackathon.ts`

### Blog (`/blog`)
- Markdown posts stored in `public/_posts/` with frontmatter (`slug`, `title`, `excerpt`, `date`, `number`, `tweetUrl`)
- Posts parsed server-side with gray-matter; rendered with remark + remark-html
- Tweet embeds per post via `TweetEmbed` component
- Dynamic slugs, sorted by `number` field

### Team (`/team`)
- Team member grid with photos and roles
- Data-driven from `lib/team-constants.ts`

### Sponsors (`/sponsors`)
- Full sponsor listing with tier badges
- Data-driven from `lib/sponsors-constants.ts`

---

## Key Technical Decisions

### SSR / Hydration Safety
- `layout.tsx` is a Server Component. Client-only components (`TicketNotice`, `StarsBackground`) are wrapped in dedicated `"use client"` wrapper files and dynamically imported with `ssr: false` via `next/dynamic` to avoid hydration mismatches.
- `suppressHydrationWarning` applied to `<html>` and `<body>` for dark-mode class safety.

### 3D Background
- `StarsBackground` (Three.js + React Three Fiber) is code-split and lazy-loaded via `LazyStars` to keep initial bundle lean.
- Only rendered on the client; no SSR involvement.

### Floating Ticket Notice
- Dismissible toast-style banner built with Motion `AnimatePresence` for smooth enter/exit.
- Dismissal state persisted in `localStorage`; gracefully falls back if storage is unavailable.
- Migrated from MIT Engage to Eventbrite; notice informs users with pre-existing tickets that their tickets remain valid.

### Blog System
- File-system blog reader in `lib/posts.ts` using Node `fs` — no CMS or database dependency.
- Markdown → HTML via remark pipeline. External links in rendered HTML are automatically given `target="_blank" rel="noopener noreferrer"`.

### SEO
- `metadataBase` set in root layout for correct OG/Twitter image URL resolution.
- Per-page `metadata` exports on all routes.
- JSON-LD structured data injected via `JsonLd` component.
- Dynamic `sitemap.ts` auto-includes all speaker slugs and blog post slugs.
- `robots.ts` configured for full indexing with `googleBot` fine-tuning.

### Image Optimization
- Speaker and team photos bulk-converted to WebP at 80% quality using `cwebp`.
- Oversized images resized with `cwebp -resize 800 0`.
- Dimensions verified with `sips`.
- All images served via `next/image` for automatic format negotiation and lazy loading.

### Video Compression
- Background video assets compressed with FFmpeg (`-crf 32 -preset slow -an -movflags +faststart -r 24 -vf scale=720:-2`) for ~98% file size reduction.

### Component Architecture
- Server Components by default; `"use client"` added only where interactivity or browser APIs are required.
- shadcn/ui primitives in `components/ui/`; page sections in `components/sections/`; layout shells in `components/layout/`.
- `cn()` from `tailwind-merge` + `clsx` used for all conditional class logic.

---

## Brand Colors

| Token | Value | Usage |
|---|---|---|
| Background | `#0C0A09` | Page background |
| Surface | `#1C1917` | Cards, modals |
| Border | `#292524` | Dividers, outlines |
| Muted | `#78716C` | Secondary text |
| Foreground | `#FAFAF9` | Primary text |
| Accent (volt green) | `#C0FF70` | CTAs, highlights |
| Accent Alt (blood) | `#3F0100` | Danger, alt accents |

---

## Developed By

- **Achyut Katiyar** — [GitHub](https://github.com/Achyut21) · [LinkedIn](https://www.linkedin.com/in/achyutkatiyar2103/)
- **Shivam Kumar** (crafted the beautiful Team Page ✨) — [GitHub](https://github.com/P0ffin22) · [LinkedIn](https://www.linkedin.com/in/shivam-kumar-563ab3382/)

---

## License

The source code is licensed under the [MIT License](./LICENSE).

> **Note:** The MIT Bitcoin Expo name, logo, mascot, visual assets, speaker/team photos, and branding are **not** included under this license and remain the property of MIT Bitcoin Expo. This license applies to the website source code only.
