"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Background } from "@/components/animations/background";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const mascotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Background />

      {/* Mobile Mascot - behind text, transparent */}
      <motion.div
        variants={mascotVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center lg:hidden"
      >
        {/* Glow effect behind mascot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-accent/30 h-64 w-64 rounded-full blur-3xl" />
        </div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/greenLogo.webp"
            alt="Bitcoin Expo Mascot"
            width={400}
            height={500}
            className="h-[60vh] max-h-[500px] w-auto object-contain opacity-20"
            priority
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mr-auto ml-auto flex w-full max-w-6xl items-center justify-center gap-4 px-6 lg:mr-8 lg:ml-32 lg:gap-12 xl:ml-48">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:max-w-2xl lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            MIT BITCOIN <span className="text-accent">EXPO</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted mt-4 text-2xl font-medium sm:text-3xl md:text-4xl"
          >
            April 11-12, 2026 <span className="text-muted/40">|</span>{" "}
            <span className="text-accent">Freedom for All</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-row justify-center gap-3 lg:justify-start"
          >
            <Link
              href="/hackathon"
              className="bg-surface/80 border-border text-foreground hover:bg-surface flex items-center justify-center gap-2 rounded-xl border px-6 py-3 font-medium transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Hackathon
            </Link>
            <Link
              href="https://engage.mit.edu/mitbtc/rsvp_boot?id=916970"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              Tickets
            </Link>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted/60 mt-5 text-sm sm:text-base">
            More information coming soon
          </motion.p>
        </motion.div>

        {/* Desktop Mascot - right side */}
        <motion.div
          variants={mascotVariants}
          initial="hidden"
          animate="visible"
          className="relative hidden flex-shrink-0 items-center justify-center lg:flex"
        >
          {/* Glow effect behind mascot */}
          <div className="bg-accent/20 absolute inset-0 scale-75 rounded-full blur-3xl" />

          {/* Floating animation wrapper */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/greenLogo.webp"
              alt="Bitcoin Expo Mascot"
              width={400}
              height={500}
              className="h-[400px] w-auto object-contain drop-shadow-2xl xl:h-[500px]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
    </section>
  );
}
