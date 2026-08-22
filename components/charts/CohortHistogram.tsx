"use client";

import { useState } from "react";
import type { StageDistributionBucket } from "@/lib/cohortData";

export function CohortHistogram({
  data,
  color = "var(--berry-burst)",
}: {
  data: StageDistributionBucket[];
  color?: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const total = data.reduce((sum, d) => sum + d.count, 0);
  const max = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-3" style={{ height: 180 }}>
        {data.map((d) => {
          const isHovered = hovered === d.key;
          const heightPct = Math.max((d.count / max) * 100, d.count > 0 ? 4 : 0);
          const pctOfTotal = total > 0 ? Math.round((d.count / total) * 100) : 0;
          return (
            <div
              key={d.key}
              className="group relative flex flex-1 flex-col items-center justify-end"
              style={{ height: "100%" }}
              onMouseEnter={() => setHovered(d.key)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(d.key)}
              onBlur={() => setHovered(null)}
              tabIndex={0}
              role="img"
              aria-label={`${d.label}: ${d.count} students, ${pctOfTotal}% of cohort`}
            >
              {isHovered && (
                <div className="pointer-events-none absolute bottom-full z-10 mb-2 w-max max-w-[180px] -translate-x-1/2 rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg" style={{ left: "50%" }}>
                  <p className="text-xs font-semibold leading-snug">{d.label}</p>
                  <p className="mt-0.5 text-[11px] text-paper/60">
                    {d.count} student{d.count === 1 ? "" : "s"} · {pctOfTotal}%
                  </p>
                </div>
              )}
              <span className="mb-1.5 font-display text-sm font-bold tabular-nums text-ink">
                {d.count}
              </span>
              <div
                className="w-full rounded-t-lg transition-all duration-700 ease-out"
                style={{
                  height: `${heightPct}%`,
                  background: d.key === "complete" ? "color-mix(in oklab, #1a8f3c 85%, black)" : color,
                  opacity: isHovered ? 0.85 : 1,
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex justify-between gap-3 border-t border-ink/8 pt-2">
        {data.map((d) => (
          <span key={d.key} className="flex-1 text-center text-[10px] font-semibold uppercase tracking-wide text-ink/40">
            {d.label.replace("Stage ", "")}
          </span>
        ))}
      </div>
    </div>
  );
}
