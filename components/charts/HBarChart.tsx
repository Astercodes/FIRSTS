"use client";

import { useState } from "react";

export type HBarDatum = {
  key: string;
  label: string;
  value: number;
  href?: string;
  sublabel?: string;
};

export function HBarChart({
  data,
  max = 100,
  color = "var(--berry-burst)",
  unit = "%",
  barHeight = 20,
}: {
  data: HBarDatum[];
  max?: number;
  color?: string;
  unit?: string;
  barHeight?: number;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const gridSteps = [0, 25, 50, 75, 100];

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 top-1"
          aria-hidden
        >
          {gridSteps.map((g) => (
            <div
              key={g}
              className="absolute top-0 bottom-6 border-l border-ink/8"
              style={{ left: `${(g / max) * 100}%` }}
            />
          ))}
        </div>

        <div className="relative space-y-3">
          {data.map((d) => {
            const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
            const isHovered = hovered === d.key;
            const Wrapper = d.href ? "a" : "div";
            return (
              <div key={d.key} className="group">
                <div className="mb-1 flex items-baseline justify-between gap-3">
                  <Wrapper
                    {...(d.href ? { href: d.href } : {})}
                    className={`truncate text-sm font-medium text-ink ${d.href ? "hover:text-berry-burst" : ""}`}
                  >
                    {d.label}
                  </Wrapper>
                  <span className="shrink-0 font-display text-sm font-bold text-ink tabular-nums">
                    {d.value}
                    {unit}
                  </span>
                </div>
                {d.sublabel && (
                  <p className="mb-1 text-xs text-ink/45">{d.sublabel}</p>
                )}
                <div
                  className="relative h-[--bar-h] w-full overflow-hidden rounded-full bg-ink/8"
                  style={{ ["--bar-h" as string]: `${barHeight}px` }}
                  onMouseEnter={() => setHovered(d.key)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(d.key)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  role="img"
                  aria-label={`${d.label}: ${d.value}${unit}`}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${pct}%`,
                      background: color,
                      opacity: isHovered ? 0.85 : 1,
                      outline: isHovered ? "2px solid var(--ink)" : "none",
                      outlineOffset: isHovered ? "-2px" : "0",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wide text-ink/35">
          {gridSteps.map((g) => (
            <span key={g}>{g}{unit}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
