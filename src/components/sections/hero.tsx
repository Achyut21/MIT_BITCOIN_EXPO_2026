"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #FAFAF9 1px, transparent 1px), linear-gradient(to bottom, #FAFAF9 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Date badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border/50 text-sm text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            April 11-12, 2026
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          variants={itemVariants}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight"
        >
          Freedom for{" "}
          <span className="text-accent">All</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-lg sm:text-xl text-muted"
        >
          MIT Bitcoin Expo 2026
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-6"
            asChild
          >
            <Link href="https://mitbtcexpo.org/" target="_blank" rel="noopener noreferrer">
              View 2025 Expo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </Button>
        </motion.div>

        {/* Helper text */}
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-sm text-muted/60"
        >
          More information coming soon
        </motion.p>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
