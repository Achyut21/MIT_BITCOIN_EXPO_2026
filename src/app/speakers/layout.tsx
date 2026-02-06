import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
  description:
    "Meet the speakers at MIT Bitcoin Expo 2026. Industry leaders in Bitcoin, blockchain, and cryptocurrency share insights at the premier Bitcoin conference in Boston.",
  alternates: {
    canonical: "https://mitbitcoinexpo.org/speakers",
  },
};

export default function SpeakersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
