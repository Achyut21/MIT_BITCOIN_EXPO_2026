"use client";

import { motion, type Variants } from "motion/react";
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <Background />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Title */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight"
        >
          MIT BITCOIN{" "}
          <span className="text-accent">EXPO</span>
        </motion.h1>

        {/* Theme + Date */}
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-muted"
        >
          Freedom for All{" "}
          <span className="text-muted/40">|</span>{" "}
          <span className="text-accent">April 11-12, 2026</span>
        </motion.p>

        {/* More info */}
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-sm sm:text-base text-muted/60"
        >
          More information coming soon
        </motion.p>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
