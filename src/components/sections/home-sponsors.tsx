"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sponsorYears } from "@/lib/sponsors-constants";
import type { Sponsor } from "@/lib/sponsors-constants";

const sponsors2026 = sponsorYears.find((y) => y.year === 2026)?.sponsors ?? [];

function GoldSponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-hype-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/75" />
      <div className="relative z-10 flex items-center justify-center px-6 py-8 sm:px-10 sm:py-10">
        {imgError ? (
          <span className="text-sm font-semibold text-stone-800">{sponsor.name}</span>
        ) : (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={300}
            height={80}
            className="w-full max-h-14 object-contain sm:max-h-16"
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </a>
  );
}

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-center rounded-xl border",
        "px-4 py-5 sm:px-6 sm:py-6",
        "transition-all duration-300",
        sponsor.darkLogo
          ? "border-border/60 bg-white/90 hover:bg-white hover:border-accent/30"
          : "border-border bg-surface/50 hover:bg-surface hover:border-accent/40",
        "hover:shadow-lg hover:shadow-accent/5"
      )}
    >
      {imgError ? (
        <span className={cn("text-sm font-semibold", sponsor.darkLogo ? "text-stone-800" : "text-muted")}>
          {sponsor.name}
        </span>
      ) : (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={200}
          height={60}
          className="w-full max-h-8 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 sm:max-h-10"
          onError={() => setImgError(true)}
        />
      )}
    </a>
  );
}

export function HomeSponsors() {
  if (sponsors2026.length === 0) return null;

  const gold = sponsors2026.filter((s) => s.tier === "gold");
  const others = sponsors2026.filter((s) => s.tier !== "gold");

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-end justify-between"
        >
          <div>
            <h2 className="text-foreground text-lg font-bold sm:text-xl">2026 Sponsors</h2>
            <div className="bg-accent mt-1.5 h-0.5 w-10 rounded-full" />
          </div>
          <Link
            href="/sponsors"
            className="text-muted hover:text-accent group flex items-center gap-1.5 text-xs font-medium transition-colors sm:text-sm"
          >
            All sponsors
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {gold.map((sponsor) => (
            <GoldSponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}

          {others.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {others.map((sponsor) => (
                <SponsorLogo key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
