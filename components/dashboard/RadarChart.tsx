"use client";

import { useState } from "react";
import type { StageProgress } from "@/lib/dashboardData";

export function RadarChart({ stages }: { stages: StageProgress[] }) {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const size = 320;
  const pad = 46;
  const viewSize = size + pad * 2;
  const center = viewSize / 2;
  const maxR = size / 2 - 56;
  const n = stages.length;
  const angleFor = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  // Rounded so the coordinate is identical whether computed during server render or
  // client hydration, tiny floating-point differences between the two Math.cos/sin
  // implementations otherwise trip a hydration mismatch on some stage counts.
  const round = (v: number) => Math.round(v * 1000) / 1000;

  const pointFor = (i: number, pct: number) => {
    const r = (pct / 100) * maxR;
    const a = angleFor(i);
    return { x: round(center + r * Math.cos(a)), y: round(center + r * Math.sin(a)) };
  };

  const dataPoints = stages.map((s, i) => ({ ...pointFor(i, s.pct), stage: s }));
  const polygonPath =
    dataPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  const rings = [25, 50, 75, 100];

  return (
    <div className="relative mx-auto" style={{ width: viewSize, height: viewSize }}>
      <svg viewBox={`0 0 ${viewSize} ${viewSize}`} width={viewSize} height={viewSize}>
        {rings.map((ring) => {
          const ringPoints = stages
            .map((_, i) => pointFor(i, ring))
            .map((p) => `${p.x},${p.y}`)
            .join(" ");
          return (
            <polygon
              key={ring}
              points={ringPoints}
              fill="none"
              stroke="var(--ink)"
              strokeOpacity={0.08}
              strokeWidth={1}
            />
          );
        })}

        {stages.map((s, i) => {
          const edge = pointFor(i, 100);
          return (
            <line
              key={s.stage}
              x1={center}
              y1={center}
              x2={edge.x}
              y2={edge.y}
              stroke="var(--ink)"
              strokeOpacity={0.08}
              strokeWidth={1}
            />
          );
        })}

        <path d={polygonPath} fill="var(--berry-burst)" fillOpacity={0.12} stroke="none" />
        <path d={polygonPath} fill="none" stroke="var(--berry-burst)" strokeWidth={2} strokeLinejoin="round" />

        {dataPoints.map((p, i) => (
          <circle
            key={p.stage.stage}
            cx={p.x}
            cy={p.y}
            r={hoverIdx === i ? 5.5 : 4}
            fill="var(--berry-burst)"
            stroke="var(--paper)"
            strokeWidth={2}
            className="cursor-pointer"
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
          />
        ))}

        {stages.map((s, i) => {
          const a = angleFor(i);
          const lx = round(center + (maxR + 30) * Math.cos(a));
          const ly = round(center + (maxR + 30) * Math.sin(a));
          const anchor = Math.cos(a) > 0.3 ? "start" : Math.cos(a) < -0.3 ? "end" : "middle";
          return (
            <text
              key={`label-${s.stage}`}
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              className="fill-ink/55 text-[10px] font-semibold uppercase tracking-wide"
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              {s.shortLabel.replace("Stage ", "")}
            </text>
          );
        })}
      </svg>

      {hoverIdx !== null && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-xl border border-ink/10 bg-ink px-3 py-2 text-paper shadow-lg"
          style={{
            left: dataPoints[hoverIdx].x,
            top: dataPoints[hoverIdx].y - 10,
          }}
        >
          <p className="text-xs font-semibold leading-snug">{stages[hoverIdx].label}</p>
          <p className="mt-0.5 text-[11px] text-paper/60">
            {stages[hoverIdx].complete} of {stages[hoverIdx].total} · {stages[hoverIdx].pct}%
          </p>
        </div>
      )}
    </div>
  );
}
