import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Schedule } from "@/components/sections/schedule";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule | MIT Bitcoin Expo 2026",
  description:
    "Full program for MIT Bitcoin Expo 2026 — April 11–12, 2026 at MIT Campus, Cambridge MA.",
};

export default function SchedulePage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-28">
        <Schedule />
      </div>
      <Footer />
    </main>
  );
}
