"use client";

import { useMemo, useRef, useState } from "react";

export function TrendChart({
  values,
  labels,
  color = "var(--juicy-plum)",
  unit = "%",
  height = 180,
  seriesName = "Average completion",
}: {
  values: number[];
  labels: string[];
  color?: string;
  unit?: string;
  height?: number;
  seriesName?: string;
}) {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const width = 640;
  const padX = 8;
  const padTop = 16;
  const padBottom = 28;
  const plotH = height - padTop - padBottom;
  const max = 100;

  const points = useMemo(() => {
    const n = values.length;
    return values.map((v, i) => {
      const x = padX + (i / (n - 1)) * (width - padX * 2);
      const y = padTop + plotH * (1 - v / max);
      return { x, y, v };
    });
  }, [values, plotH]);

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

  const gridSteps = [0, 25, 50, 75, 100];
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
        aria-label={`${seriesName} trend over ${labels.length} weeks`}
      >
        {gridSteps.map((g) => {
          const y = padTop + plotH * (1 - g / max);
          return (
            <line
              key={g}
              x1={padX}
              x2={width - padX}
              y1={y}
              y2={y}
              stroke="var(--ink)"
              strokeOpacity={0.08}
              strokeWidth={1}
            />
          );
        })}

        <path d={areaPath} fill={color} fillOpacity={0.1} stroke="none" />
        <path d={linePath} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />

        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={i === points.length - 1 || i === hoverIdx ? 4.5 : 3}
            fill={color}
            stroke="var(--paper)"
            strokeWidth={2}
          />
        ))}

        {hovered && (
          <line
            x1={hovered.x}
            x2={hovered.x}
            y1={padTop}
            y2={padTop + plotH}
            stroke="var(--ink)"
            strokeOpacity={0.25}
            strokeWidth={1}
          />
        )}

        <text
          x={points[points.length - 1].x}
          y={points[points.length - 1].y - 10}
          textAnchor="end"
          className="fill-ink font-display text-[13px] font-bold"
        >
          {values[values.length - 1]}{unit}
        </text>

        {labels.map((l, i) => {
          if (i !== 0 && i !== labels.length - 1 && i !== Math.floor(labels.length / 2)) return null;
          return (
            <text
              key={l}
              x={points[i].x}
              y={height - 8}
              textAnchor={i === 0 ? "start" : i === labels.length - 1 ? "end" : "middle"}
              className="fill-ink/40 text-[10px] font-medium uppercase tracking-wide"
            >
              {l}
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
            {hovered.v}{unit}
          </p>
          <p className="mt-1 text-[10px] leading-none text-paper/60">{labels[hoverIdx]} · {seriesName}</p>
        </div>
      )}
    </div>
  );
}
