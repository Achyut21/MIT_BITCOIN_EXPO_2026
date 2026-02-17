# MIT Bitcoin Expo 2026

The official website for the **13th Annual MIT Bitcoin Expo** — a two-day conference and 36-hour hackathon hosted at the MIT Campus on April 11–12, 2026.

**Theme: Freedom for All**

🌐 [mitbitcoinexpo.org](https://mitbitcoinexpo.org)

## About

MIT Bitcoin Expo is the longest-running university-hosted Bitcoin event in the world. Since 2014, the expo has brought together developers, researchers, and enthusiasts to explore the frontiers of Bitcoin and decentralized technology. The 2026 edition features a conference with industry-leading speakers and a hackathon with a community-first prize model — 70% of the prize pool is shared among all qualifying participants.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + Radix primitives
- **Animation:** Motion (Framer Motion)
- **3D:** React Three Fiber + Drei
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics

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

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── hackathon/        # Hackathon details page
│   ├── speakers/         # Speakers page
│   ├── team/             # Team page
│   ├── layout.tsx        # Root layout
│   ├── robots.ts         # SEO robots config
│   └── sitemap.ts        # SEO sitemap generation
├── components/
│   ├── ui/               # shadcn/ui primitives
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, Countdown, etc.)
│   ├── animations/       # Animation components
│   ├── seo/              # SEO & structured data
│   └── 3d/               # Three.js components
├── data/                 # Static data files
└── lib/                  # Utilities & constants
```

## Developed By

- **Achyut Katiyar** — [GitHub](https://github.com/Achyut21) · [LinkedIn](https://www.linkedin.com/in/achyutkatiyar2103/)
- **Shivam Kumar** (crafted the beautiful Team Page ✨) — [GitHub](https://github.com/P0ffin22) · [LinkedIn](https://www.linkedin.com/in/shivam-kumar-563ab3382/)

## License

The source code is licensed under the [MIT License](./LICENSE).

> **Note:** The MIT Bitcoin Expo name, logo, mascot, visual assets, speaker/team photos, and branding are **not** included under this license and remain the property of MIT Bitcoin Expo. This license applies to the website source code only.
