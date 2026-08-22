"use client";

import { useState } from "react";
import type { CategoryProgress } from "@/lib/dashboardData";

export function CategoryHeatmap({
  rows,
}: {
  rows: { stage: string; shortLabel: string; categories: CategoryProgress[] }[];
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="space-y-2.5">
      {rows.map((row) => (
        <div key={row.stage} className="flex items-center gap-3">
          <span className="w-[74px] shrink-0 text-right text-[11px] font-semibold uppercase tracking-wide text-ink/40">
            {row.shortLabel.replace("Stage ", "")}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {row.categories.map((c) => {
              const key = `${row.stage}-${c.category}`;
              const isHovered = hovered === key;
              const light = c.pct >= 50;
              return (
                <div key={key} className="group relative">
                  <div
                    tabIndex={0}
                    role="img"
                    aria-label={`${c.label}: ${c.complete} of ${c.total} complete, ${c.pct}%`}
                    onMouseEnter={() => setHovered(key)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(key)}
                    onBlur={() => setHovered(null)}
                    className="flex h-9 w-9 cursor-default flex-col items-center justify-center rounded-md text-[10px] font-bold leading-none transition-transform duration-150"
                    style={{
                      background: `color-mix(in oklab, var(--berry-burst) ${Math.max(c.pct, 6)}%, var(--paper-dim))`,
                      color: light ? "var(--paper)" : "var(--ink)",
                      transform: isHovered ? "scale(1.12)" : "scale(1)",
                    }}
                  >
                    <span>{c.category}</span>
                  </div>

                  {isHovered && (
                    <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[200px] -translate-x-1/2 rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg">
                      <p className="text-xs font-semibold leading-snug">{c.label}</p>
                      <p className="mt-0.5 text-[11px] text-paper/60">
                        {c.complete} of {c.total} · {c.pct}%
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-2 pt-1">
        <span className="text-[11px] text-ink/40">0%</span>
        <div
          className="h-2 w-32 rounded-full"
          style={{ background: "linear-gradient(to right, var(--paper-dim), var(--berry-burst))" }}
        />
        <span className="text-[11px] text-ink/40">100%</span>
      </div>
    </div>
  );
}
