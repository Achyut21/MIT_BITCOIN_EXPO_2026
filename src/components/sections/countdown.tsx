"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TimeUnit {
  value: number;
  label: string;
}

function TimeBlock({ value, label }: TimeUnit) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 sm:w-24 md:w-28 h-24 sm:h-28 md:h-32 bg-surface rounded-xl border border-border overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
          </motion.div>
        </AnimatePresence>
        
        {/* Subtle line in middle */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-border/50" />
      </div>
      <span className="mt-3 text-xs sm:text-sm text-muted uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex flex-col items-center justify-center h-24 sm:h-28 md:h-32 px-1 sm:px-2">
      <div className="w-2 h-2 rounded-full bg-accent/60 mb-3" />
      <div className="w-2 h-2 rounded-full bg-accent/60" />
    </div>
  );
}

const TARGET_DATE = new Date("2026-04-11T09:00:00-04:00").getTime();

function calculateTimeLeft() {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const isClient = useIsClient();

  const updateTime = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  if (!isClient) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
            Countdown to{" "}
            <span className="text-accent">Expo 2026</span>
          </h2>
          <p className="text-muted mb-10">April 11, 2026 • 9:00 AM ET</p>
          <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <div key={label} className="flex items-start">
                {i > 0 && <Colon />}
                <div className="flex flex-col items-center">
                  <div className="w-20 sm:w-24 md:w-28 h-24 sm:h-28 md:h-32 bg-surface rounded-xl border border-border animate-pulse" />
                  <span className="mt-3 text-xs sm:text-sm text-muted uppercase tracking-widest font-medium">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">
          Countdown to{" "}
          <span className="text-accent">Expo 2026</span>
        </h2>
        <p className="text-muted mb-10">April 11, 2026 • 9:00 AM ET</p>

        <div className="flex items-start justify-center gap-1 sm:gap-2 md:gap-4">
          <TimeBlock value={timeLeft.days} label="Days" />
          <Colon />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <Colon />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </section>
  );
}
