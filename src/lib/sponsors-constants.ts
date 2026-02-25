export type Sponsor = {
  name: string;
  logo: string;
  url?: string;
  darkLogo?: boolean;
  tier?: "gold" | "silver" | "bronze";
};

export type SponsorYear = {
  year: number;
  sponsors: Sponsor[];
};

export const sponsorYears: SponsorYear[] = [
  {
    year: 2026,
    sponsors: [
      {
        name: "Human Rights Foundation",
        logo: "/2026Sponsors/HRF-Logo-2048x563.webp",
        url: "https://hrf.org",
        darkLogo: true,
        tier: "gold",
      },
      {
        name: "Alpen Labs",
        logo: "/2026Sponsors/White Alpen Lockup.webp",
        url: "https://alpenlabs.io",
        tier: "bronze",
      },
    ],
  },
  {
    year: 2025,
    sponsors: [
      {
        name: "Coinbase",
        logo: "/2025Sponsors/Coinbase Logo.webp",
        url: "https://coinbase.com",
        darkLogo: true,
      },
      {
        name: "Human Rights Foundation",
        logo: "/2025Sponsors/HRF-Logo-2048x563.webp",
        url: "https://hrf.org",
        darkLogo: true,
      },
      {
        name: "Alpen Labs",
        logo: "/2025Sponsors/White Alpen Lockup.webp",
        url: "https://alpenlabs.io",
      },
      {
        name: "Citrea",
        logo: "/2025Sponsors/logo_white.webp",
        url: "https://citrea.xyz",
      },
      {
        name: "SatLayer",
        logo: "/2025Sponsors/SatLayer logo vertical White.webp",
        url: "https://satlayer.xyz",
      },
      {
        name: "Cake Wallet",
        logo: "/2025Sponsors/cake-wallet-logo-color-light.webp",
        url: "https://cakewallet.com",
      },
    ],
  },
];
