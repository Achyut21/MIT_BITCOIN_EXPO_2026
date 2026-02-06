import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FloatingSocials } from "@/components/layout/floating-socials";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mitbitcoinexpo.org"),
  title: {
    default: "MIT Bitcoin Expo 2026 | Freedom for All",
    template: "%s | MIT Bitcoin Expo 2026",
  },
  description:
    "MIT Bitcoin Expo 2026 — April 11-12 at MIT Campus, Cambridge, MA. The premier Bitcoin conference and hackathon in Boston featuring talks, workshops, and a 36-hour Bitcoin hackathon with prizes.",
  keywords: [
    "MIT Bitcoin Expo",
    "Bitcoin hackathon",
    "hackathon Boston",
    "Bitcoin conference",
    "blockchain hackathon",
    "crypto hackathon Boston",
    "MIT hackathon 2026",
    "Bitcoin event Boston",
    "cryptocurrency conference",
    "blockchain conference MIT",
    "hackathon",
    "Boston hackathon",
    "Bitcoin",
    "blockchain",
    "cryptocurrency",
  ],
  authors: [{ name: "MIT Bitcoin Club" }],
  creator: "MIT Bitcoin Club",
  openGraph: {
    title: "MIT Bitcoin Expo 2026 | Freedom for All",
    description:
      "The premier Bitcoin conference and hackathon in Boston. April 11-12, 2026 at MIT Campus. Talks, workshops, and a 36-hour hackathon.",
    url: "https://mitbitcoinexpo.org",
    siteName: "MIT Bitcoin Expo 2026",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MIT Bitcoin Expo 2026 — Freedom for All",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIT Bitcoin Expo 2026 | Freedom for All",
    description:
      "The premier Bitcoin conference and hackathon in Boston. April 11-12, 2026 at MIT Campus.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mitbitcoinexpo.org",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
        suppressHydrationWarning
      >
        {children}
        <FloatingSocials />
        <Analytics />
      </body>
    </html>
  );
}
