"use client";

import { useMemo, useRef, useState } from "react";
import type { VelocityWeek } from "@/lib/momentum";

export function VelocityChart({ weeks }: { weeks: VelocityWeek[] }) {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const width = 640;
  const height = 200;
  const padX = 8;
  const padTop = 20;
  const padBottom = 28;
  const plotH = height - padTop - padBottom;
  const max = Math.max(...weeks.map((w) => w.count), 3);

  const points = useMemo(() => {
    const n = weeks.length;
    return weeks.map((w, i) => {
      const x = padX + (i / (n - 1)) * (width - padX * 2);
      const y = padTop + plotH * (1 - w.count / max);
      return { x, y, week: w };
    });
  }, [weeks, plotH, max]);

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padTop + plotH} L ${points[0].x} ${padTop + plotH} Z`;

  function handleMove(e: React.PointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * width;
    let nearest = 0;
    let best = Infinity;
    points.forEach((p, i) => {
      const d = Math.abs(p.x - relX);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setHoverIdx(nearest);
  }

  const gridSteps = [0, Math.round(max / 2), max];
  const hovered = hoverIdx !== null ? points[hoverIdx] : null;

  return (
    <div className="relative w-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full touch-none"
        onPointerMove={handleMove}
        onPointerLeave={() => setHoverIdx(null)}
        role="img"
        aria-label={`FIRSTS completed per week, over the last ${weeks.length} weeks`}
      >
        {gridSteps.map((g) => {
          const y = padTop + plotH * (1 - g / max);
          return (
            <line key={g} x1={padX} x2={width - padX} y1={y} y2={y} stroke="var(--ink)" strokeOpacity={0.08} strokeWidth={1} />
          );
        })}

        <path d={areaPath} fill="var(--berry-burst)" fillOpacity={0.1} stroke="none" />
        <path d={linePath} fill="none" stroke="var(--berry-burst)" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

        {points.map((p, i) => (
          <circle
            key={p.week.weekStart}
            cx={p.x}
            cy={p.y}
            r={i === hoverIdx ? 4.5 : p.week.count > 0 ? 3 : 0}
            fill="var(--berry-burst)"
            stroke="var(--paper)"
            strokeWidth={2}
          />
        ))}

        {hovered && (
          <line x1={hovered.x} x2={hovered.x} y1={padTop} y2={padTop + plotH} stroke="var(--ink)" strokeOpacity={0.25} strokeWidth={1} />
        )}

        {weeks.map((w, i) => {
          if (i !== 0 && i !== weeks.length - 1 && i !== Math.floor(weeks.length / 2)) return null;
          return (
            <text
              key={w.weekStart}
              x={points[i].x}
              y={height - 8}
              textAnchor={i === 0 ? "start" : i === weeks.length - 1 ? "end" : "middle"}
              className="fill-ink/40 text-[10px] font-medium uppercase tracking-wide"
            >
              {w.label}
            </text>
          );
        })}
      </svg>

      {hovered && hoverIdx !== null && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg"
          style={{
            left: `${(hovered.x / width) * 100}%`,
            top: `${(hovered.y / height) * 100}%`,
            marginTop: "-10px",
          }}
        >
          <p className="font-display text-sm font-bold leading-none">
            {hovered.week.count} FIRST{hovered.week.count === 1 ? "" : "S"}
          </p>
          <p className="mt-1 text-[10px] leading-none text-paper/60">
            Week of {hovered.week.label}{hovered.week.isCurrent ? " · this week" : ""}
          </p>
        </div>
      )}
    </div>
  );
}
