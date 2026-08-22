"use client";

import Link from "next/link";
import { useState } from "react";
import type { StageProgress } from "@/lib/dashboardData";

export function StackedLayers({ stages }: { stages: StageProgress[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  // Stage Seven renders first (top layer), Stage One last (foundation, bottom layer).
  const topToBottom = [...stages].reverse();

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        {topToBottom.map((s) => {
          const isHovered = hovered === s.stage;
          return (
            <Link
              key={s.stage}
              href={s.href}
              onMouseEnter={() => setHovered(s.stage)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(s.stage)}
              onBlur={() => setHovered(null)}
              className="group relative block"
              aria-label={`${s.label}: ${s.complete} of ${s.total} complete, ${s.pct}%`}
            >
              <div className="mb-1 flex items-baseline justify-between">
                <span className="text-sm font-semibold text-ink">{s.shortLabel}</span>
                <span className="font-display text-sm font-bold tabular-nums text-ink">
                  {s.pct}%
                </span>
              </div>
              <div
                className="relative h-8 w-full overflow-hidden rounded-lg bg-ink/6 transition-transform duration-200"
                style={{ transform: isHovered ? "translateX(2px)" : "none" }}
              >
                <div
                  className="h-full rounded-lg transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.max(s.pct, s.pct > 0 ? 3 : 0)}%`,
                    background: "var(--berry-burst)",
                    opacity: isHovered ? 0.88 : 1,
                  }}
                />
              </div>

              {isHovered && (
                <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max max-w-[220px] -translate-x-1/2 rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg">
                  <p className="text-xs font-semibold leading-snug">{s.label}</p>
                  <p className="mt-0.5 text-[11px] text-paper/60">
                    {s.complete} of {s.total} FIRSTS complete
                  </p>
                </div>
              )}
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-ink/40">
        Each layer is a stage in the FIRSTS blueprint. Fill shows how much of that stage is built so far.
      </p>
    </div>
  );
}
