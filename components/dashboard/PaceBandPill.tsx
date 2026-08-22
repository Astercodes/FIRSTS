"use client";

import { useState } from "react";
import type { PaceBand } from "@/lib/socialProof";

export function PaceBandPill({ band }: { band: PaceBand }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="group relative inline-flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklab,var(--berry-burst)_12%,white)] px-3 py-1 text-xs font-semibold text-[var(--berry-burst)]">
        <TrendUpIcon className="h-3 w-3" />
        {band.label}
      </span>
      {hovered && (
        <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max max-w-[220px] -translate-x-1/2 rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg">
          <span className="block text-[11px] leading-snug text-paper/80">{band.description}</span>
        </span>
      )}
    </span>
  );
}

function TrendUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M3 17 9 11l4 4 8-8M17 7h4v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
