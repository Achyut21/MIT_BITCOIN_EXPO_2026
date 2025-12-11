"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const EVENT_DETAILS = {
  title: "MIT Bitcoin Expo 2026",
  description: "MIT Bitcoin Expo 2026 - Freedom for All. Join us for two days of talks, workshops, and networking.",
  location: "32 Vassar St, Cambridge, MA 02139",
};

function generateICS(): string {
  const start = "20260411T090000";
  const end = "20260412T180000";
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//MIT Bitcoin Expo//EN",
    "BEGIN:VEVENT",
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${EVENT_DETAILS.title}`,
    `DESCRIPTION:${EVENT_DETAILS.description}`,
    `LOCATION:${EVENT_DETAILS.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return icsContent;
}

function generateGoogleCalendarUrl(): string {
  const start = "20260411T090000";
  const end = "20260412T180000";
  
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_DETAILS.title,
    dates: `${start}/${end}`,
    details: EVENT_DETAILS.description,
    location: EVENT_DETAILS.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function AddToCalendarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownloadICS = () => {
    const icsContent = generateICS();
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mit-bitcoin-expo-2026.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const handleGoogleCalendar = () => {
    window.open(generateGoogleCalendarUrl(), "_blank");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="hidden sm:inline">Add to Calendar</span>
        <svg 
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-52 py-1.5 bg-surface rounded-xl border border-border shadow-xl shadow-black/20 z-50"
          >
            <button
              onClick={handleDownloadICS}
              className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-accent/10 hover:text-accent flex items-center gap-2.5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download .ics</span>
              <span className="ml-auto text-xs text-muted">Apple</span>
            </button>
            <button
              onClick={handleGoogleCalendar}
              className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-accent/10 hover:text-accent flex items-center gap-2.5 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 22h-15A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2H9v2H4.5a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V15h2v4.5a2.5 2.5 0 01-2.5 2.5zM13 2v2h5.59L8.29 14.29l1.41 1.41L20 5.41V11h2V2h-9z" />
              </svg>
              <span>Google Calendar</span>
              <span className="ml-auto text-xs text-muted">Open</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <nav className="flex items-center justify-between px-6 py-4 rounded-2xl bg-surface/60 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden">
            <Image
              src="/logo_2.webp"
              alt="MIT Bitcoin Club"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-foreground font-semibold text-sm leading-tight">MIT Bitcoin</p>
            <p className="text-muted text-xs">Expo 2026</p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <AddToCalendarDropdown />
          <Link
            href="https://mitbtcexpo.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
          >
            View 2025 Expo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
