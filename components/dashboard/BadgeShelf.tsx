"use client";

import Link from "next/link";
import { useState } from "react";
import type { Badge } from "@/lib/badges";

export function BadgeShelf({ stage, standout }: { stage: Badge[]; standout: Badge[] }) {
  const earnedCount = [...stage, ...standout].filter((b) => b.earned).length;
  const totalCount = stage.length + standout.length;

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Achievements
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            {earnedCount} of {totalCount} badges earned
          </h2>
        </div>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/40">
          Stage badges
        </p>
        <div className="flex flex-wrap gap-4">
          {stage.map((b) => (
            <BadgeTile key={b.id} badge={b} />
          ))}
        </div>
      </div>

      <div className="mt-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink/40">
          Standout badges
        </p>
        <p className="mb-3 text-xs text-ink/40">
          One per Extra Edge FIRST. Each one means you actually shipped something.
        </p>
        <div className="flex flex-wrap gap-4">
          {standout.map((b) => (
            <BadgeTile key={b.id} badge={b} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BadgeTile({ badge }: { badge: Badge }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={badge.href}
      className="group relative flex w-20 flex-col items-center gap-2 text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 transition-transform duration-200 group-hover:-translate-y-0.5"
        style={
          badge.earned
            ? { background: badge.color, borderColor: badge.color }
            : { borderColor: "rgba(11,4,16,0.12)", background: "rgba(11,4,16,0.02)" }
        }
      >
        {badge.earned ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : badge.kind === "stage" ? (
          <span className="text-xs font-bold tabular-nums text-ink/45">{badge.progressPct}%</span>
        ) : (
          <LockIcon className="h-5 w-5 text-ink/25" />
        )}
      </span>
      <span className={`text-[11px] font-semibold leading-tight ${badge.earned ? "text-ink" : "text-ink/40"}`}>
        {badge.title}
      </span>

      {hovered && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[200px] -translate-x-1/2 rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg">
          <span className="block text-[11px] leading-snug text-paper/80">
            {badge.earned ? badge.description : `${badge.description} ${badge.kind === "stage" ? `Currently ${badge.progressPct}%.` : "Not started yet."}`}
          </span>
        </span>
      )}
    </Link>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className}>
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className={className}>
      <rect x="5" y="10.5" width="14" height="9" rx="2" stroke="currentColor" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
