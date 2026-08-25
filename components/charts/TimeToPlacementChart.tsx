"use client";

import { useState } from "react";
import type { TimeToPlacementPoint } from "@/lib/placementData";

export function TimeToPlacementChart({ points }: { points: TimeToPlacementPoint[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const max = Math.max(...points.map((p) => p.avgDays), 1);

  if (points.length === 0) {
    return <p className="text-sm text-ink/45">No reported offers yet to trend.</p>;
  }

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-4" style={{ height: 160 }}>
        {points.map((p) => {
          const isHovered = hovered === p.gradYear;
          const heightPct = Math.max((p.avgDays / max) * 100, 4);
          return (
            <div
              key={p.gradYear}
              className="group relative flex flex-1 flex-col items-center justify-end"
              style={{ height: "100%" }}
              onMouseEnter={() => setHovered(p.gradYear)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.gradYear)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              role="img"
              aria-label={`Class of ${p.gradYear}: ${p.avgDays} days on average, from ${p.count} reported offers`}
            >
              {isHovered && (
                <div className="pointer-events-none absolute bottom-full z-10 mb-2 w-max max-w-[200px] -translate-x-1/2 rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg" style={{ left: "50%" }}>
                  <p className="text-xs font-semibold leading-snug">Class of {p.gradYear}</p>
                  <p className="mt-0.5 text-[11px] text-paper/60">
                    {p.avgDays} days average · {p.count} reported offer{p.count === 1 ? "" : "s"}
                  </p>
                </div>
              )}
              <span className="mb-1.5 font-display text-sm font-bold tabular-nums text-ink">{p.avgDays}d</span>
              <div
                className="w-full rounded-t-lg transition-all duration-700 ease-out"
                style={{ height: `${heightPct}%`, background: "var(--berry-burst)", opacity: isHovered ? 0.85 : 1 }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex justify-between gap-4 border-t border-ink/8 pt-2">
        {points.map((p) => (
          <span key={p.gradYear} className="flex-1 text-center text-[10px] font-semibold uppercase tracking-wide text-ink/40">
            {p.gradYear}
          </span>
        ))}
      </div>
    </div>
  );
}
