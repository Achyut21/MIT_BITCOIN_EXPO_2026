"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { Separator } from "@/components/ui/separator";
import type { Speaker } from "@/lib/speakers-constants";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function SpeakerDetail({ speaker }: { speaker: Speaker }) {
  const [imgErr, setImgErr] = useState(false);
  const hasImg = speaker.image?.length > 0;

  return (
    <main className="relative">
      <Navbar />

      {/* Stars background — only covers top portion */}
      <div className="relative">
        <div className="absolute inset-0 h-[70vh]">
          <Background />
          <div className="from-background absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t to-transparent" />
        </div>

        {/* All content in one flow */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24 sm:pt-40">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/speakers"
              className="text-muted hover:text-accent inline-flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Speakers
            </Link>
          </motion.div>

          {/* Two-column: photo left, everything else right */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            {/* Photo — fixed width on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full shrink-0 md:w-64 lg:w-72"
            >
              <div
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-2xl",
                  "border-border/50 bg-surface border",
                  "shadow-lg shadow-black/20"
                )}
              >
                {imgErr || !hasImg ? (
                  <div className="flex h-full w-full items-center justify-center bg-emerald-900/20">
                    <span className="text-foreground/60 text-6xl font-bold">
                      {getInitials(speaker.name)}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImgErr(true)}
                  />
                )}
              </div>
            </motion.div>

            {/* Right column: name, title, socials, bio, topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex-1"
            >
              <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {speaker.name}
              </h1>
              <p className="text-accent mt-1.5 text-base font-medium sm:text-lg">
                {speaker.title}
              </p>

              {/* Social icons */}
              {speaker.socials && (
                <div className="mt-4 flex gap-2.5">
                  {speaker.socials.x && (
                    <a
                      href={speaker.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border bg-surface hover:border-accent/50 hover:text-accent flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-all"
                      aria-label={`${speaker.name} on X`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {speaker.socials.linkedin && (
                    <a
                      href={speaker.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border bg-surface hover:border-accent/50 hover:text-accent flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-all"
                      aria-label={`${speaker.name} on LinkedIn`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>
              )}

              {/* Bio */}
              {speaker.bio && (
                <>
                  <Separator className="bg-accent/20 my-6" />
                  <p className="text-muted text-sm leading-relaxed sm:text-base">
                    {speaker.bio}
                  </p>
                </>
              )}

              {/* Topics */}
              {speaker.topics && speaker.topics.length > 0 && (
                <>
                  <Separator className="bg-accent/20 my-6" />
                  <h2 className="text-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
                    Speaking Topics
                  </h2>
                  <ul className="space-y-2.5">
                    {speaker.topics.map((topic) => (
                      <li key={topic} className="flex items-baseline gap-2.5">
                        <span className="bg-accent inline-block h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full" />
                        <span className="text-muted text-sm leading-relaxed sm:text-base">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
