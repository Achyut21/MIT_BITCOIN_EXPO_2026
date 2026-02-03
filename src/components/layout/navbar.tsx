"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const EVENT_DETAILS = {
  title: "MIT Bitcoin Expo 2026",
  description:
    "MIT Bitcoin Expo 2026 - Freedom for All. Join us for two days of talks, workshops, and networking.",
  location: "32 Vassar St, Cambridge, MA 02139",
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/speakers", label: "Speakers" },
  { href: "/team", label: "Team" },
  { href: "/hackathon", label: "Hackathon" },
];

// Animation variants for menu
const menuContainerVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: { duration: 0.15, ease: "easeIn" },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
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
        className="text-muted hover:text-accent flex items-center gap-1.5 text-sm transition-colors"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <svg
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
            className="bg-surface border-border absolute top-full right-0 z-50 mt-2 w-52 rounded-xl border py-1.5 shadow-xl shadow-black/20"
          >
            <button
              onClick={handleDownloadICS}
              className="text-foreground hover:bg-accent/10 hover:text-accent flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download .ics</span>
              <span className="text-muted ml-auto text-xs">Apple</span>
            </button>
            <button
              onClick={handleGoogleCalendar}
              className="text-foreground hover:bg-accent/10 hover:text-accent flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 22h-15A2.5 2.5 0 012 19.5v-15A2.5 2.5 0 014.5 2H9v2H4.5a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V15h2v4.5a2.5 2.5 0 01-2.5 2.5zM13 2v2h5.59L8.29 14.29l1.41 1.41L20 5.41V11h2V2h-9z" />
              </svg>
              <span>Google Calendar</span>
              <span className="text-muted ml-auto text-xs">Open</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  toggleButtonRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, toggleButtonRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
          <motion.div
            ref={menuRef}
            variants={menuContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-[5.5rem] right-4 z-50 w-64 md:hidden"
          >
            <div className="bg-surface/95 border-border/50 overflow-hidden rounded-2xl border shadow-2xl shadow-black/50 backdrop-blur-xl">
              <nav className="p-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "bg-background/90 text-foreground"
                          : "text-muted hover:text-accent hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="border-border/30 mt-2 border-t pt-2">
                  <Link
                    href="https://engage.mit.edu/mitbtc/rsvp_boot?id=916970"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[15px] font-medium transition-colors"
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
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      >
        <nav className="bg-surface/60 border-border/50 flex items-center justify-between rounded-2xl border px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl md:px-6 md:py-4">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src="/logo_2.webp"
                alt="MIT Bitcoin Club"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-foreground text-sm leading-tight font-semibold">MIT Bitcoin</p>
              <p className="text-muted text-xs">Expo 2026</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${isActive ? "bg-background/80 text-foreground backdrop-blur-sm" : "text-muted hover:text-accent"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <AddToCalendarDropdown />
            <Link
              href="https://engage.mit.edu/mitbtc/rsvp_boot?id=916970"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
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
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <AddToCalendarDropdown />
            <button
              ref={mobileMenuToggleRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted hover:text-accent p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        toggleButtonRef={mobileMenuToggleRef}
      />
    </>
  );
}
