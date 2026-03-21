import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { schedule } from "@/data/schedule-data";
import type { Session, SessionType } from "@/data/schedule-data";

const TYPE_CONFIG: Record<SessionType, { label: string; className: string }> = {
  keynote: { label: "Keynote", className: "bg-[#C0FF70]/15 text-[#C0FF70] border-[#C0FF70]/30" },
  talk: { label: "Talk", className: "bg-[#78716C]/15 text-[#FAFAF9] border-[#78716C]/30" },
  panel: { label: "Panel", className: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
  break: { label: "Break", className: "" },
  logistics: { label: "", className: "" },
  award: { label: "Award", className: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
  dinner: { label: "Dinner", className: "bg-purple-500/15 text-purple-300 border-purple-500/30" },
};

function isStructural(s: Session) {
  return s.type === "break" || s.type === "logistics";
}

function SessionBadge({ type }: { type: SessionType }) {
  const { label, className } = TYPE_CONFIG[type];
  if (!label) return null;
  return <Badge className={cn("shrink-0 border text-xs font-medium", className)}>{label}</Badge>;
}

function ScheduleList({ sessions }: { sessions: Session[] }) {
  return (
    <div className="divide-y divide-[#292524] overflow-hidden rounded-xl border border-[#292524]">
      {/* Column headers — desktop only */}
      <div className="hidden gap-4 bg-[#1C1917]/60 px-5 py-2.5 sm:grid sm:grid-cols-[7rem_6rem_1fr] lg:grid-cols-[7rem_6rem_1fr_15rem]">
        <span className="text-xs tracking-widest text-[#78716C] uppercase">Time</span>
        <span className="text-xs tracking-widest text-[#78716C] uppercase">Type</span>
        <span className="text-xs tracking-widest text-[#78716C] uppercase">Session</span>
        <span className="hidden text-xs tracking-widest text-[#78716C] uppercase lg:block">
          Presenters
        </span>
      </div>

      {sessions.map((s, i) => {
        if (isStructural(s)) {
          return (
            <div
              key={i}
              className="grid grid-cols-[5rem_1fr] gap-3 bg-[#0C0A09]/40 px-5 py-2.5 sm:grid-cols-[7rem_6rem_1fr] sm:gap-4 lg:grid-cols-[7rem_6rem_1fr_15rem]"
            >
              <span className="pt-px font-mono text-xs whitespace-nowrap text-[#78716C]/70 tabular-nums">
                {s.start}
              </span>
              {/* Skip type col on mobile for structural rows */}
              <span className="text-xs text-[#78716C]/70 italic sm:col-start-3">{s.title}</span>
            </div>
          );
        }

        return (
          <div
            key={i}
            className="grid grid-cols-[5rem_1fr] gap-3 px-5 py-4 transition-colors hover:bg-[#1C1917]/60 sm:grid-cols-[7rem_6rem_1fr] sm:gap-4 lg:grid-cols-[7rem_6rem_1fr_15rem]"
          >
            {/* Time */}
            <span className="pt-0.5 font-mono text-xs whitespace-nowrap text-[#78716C] tabular-nums">
              {s.start}
            </span>

            {/* Badge — sits in col 2 on desktop, hidden on mobile */}
            <div className="hidden items-start pt-0.5 sm:flex">
              <SessionBadge type={s.type} />
            </div>

            {/* Content */}
            <div className="min-w-0">
              {/* Mobile: badge inline with title */}
              <div className="mb-1 flex flex-wrap items-start gap-2 sm:mb-0">
                <div className="sm:hidden">
                  <SessionBadge type={s.type} />
                </div>
                <span
                  className={cn(
                    "text-sm leading-snug font-medium break-words",
                    s.tbd ? "text-[#78716C] italic" : "text-[#FAFAF9]"
                  )}
                >
                  {s.title}
                </span>
              </div>

              {/* Confirmed / TBD indicators */}
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
                {s.confirmed && (
                  <span className="text-[10px] font-medium text-[#C0FF70]">✓ confirmed</span>
                )}
                {s.tbd && <span className="text-[10px] text-[#78716C] italic">title pending</span>}
              </div>

              {/* Presenters + moderator — hidden on lg (shown in own column) */}
              {(s.presenters || s.moderator) && (
                <div className="mt-1.5 space-y-0.5 lg:hidden">
                  {s.presenters && (
                    <p className="text-xs leading-relaxed text-orange-400">{s.presenters}</p>
                  )}
                  {s.moderator && <p className="text-xs text-orange-400/60">Mod: {s.moderator}</p>}
                </div>
              )}
            </div>

            {/* Presenters column — lg only */}
            <div className="hidden space-y-0.5 pt-0.5 lg:block">
              {s.presenters && (
                <p className="text-xs leading-relaxed text-orange-400">{s.presenters}</p>
              )}
              {s.moderator && <p className="text-xs text-orange-400/60">Mod: {s.moderator}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Schedule() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-accent/[0.03] absolute top-1/2 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="mb-2 text-xs font-medium tracking-widest text-[#C0FF70] uppercase">
            Program
          </p>
          <h2 className="text-2xl font-bold text-[#FAFAF9] sm:text-3xl">Schedule</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#C0FF70]" />
          <p className="mt-3 text-sm text-[#78716C]">
            April 11–12, 2026 · MIT Campus, Cambridge MA
          </p>
        </div>

        <Tabs defaultValue="saturday">
          <TabsList className="mb-6 h-auto w-full rounded-lg border border-[#292524] bg-[#1C1917] p-1 sm:w-auto">
            {schedule.map((day) => (
              <TabsTrigger
                key={day.value}
                value={day.value}
                className={cn(
                  "flex-1 rounded-md px-4 py-2 text-sm sm:flex-none",
                  "data-[state=active]:bg-[#C0FF70] data-[state=active]:font-semibold data-[state=active]:text-[#0C0A09]",
                  "text-[#78716C] transition-colors hover:text-[#FAFAF9]"
                )}
              >
                {day.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {schedule.map((day) => (
            <TabsContent key={day.value} value={day.value}>
              <ScheduleList sessions={day.sessions} />
            </TabsContent>
          ))}
        </Tabs>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-xs text-[#78716C]">Legend:</span>
          {(["keynote", "talk", "panel", "award"] as SessionType[]).map((t) => (
            <SessionBadge key={t} type={t} />
          ))}
          <span className="text-[10px] font-medium text-[#C0FF70]">✓ confirmed</span>
          <span className="text-[10px] text-[#78716C] italic">title pending</span>
        </div>
      </div>
    </section>
  );
}
