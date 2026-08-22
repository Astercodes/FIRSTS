"use client";

import Link from "next/link";
import { type ElementType, useEffect, useState } from "react";
import type { FirstModule, ModuleStatus } from "@/lib/dashboardData";
import { CATEGORY_META } from "@/lib/dashboardData";
import { scoreThoroughness, type ThoroughnessResult } from "@/lib/depthScore";

export function ModuleCard({
  module: m,
  unlocked,
}: {
  module: FirstModule;
  unlocked: boolean;
}) {
  const color = CATEGORY_META[m.category].color;
  const effectiveStatus: ModuleStatus =
    m.status === "locked" && unlocked ? "available" : m.status;
  const isLocked = effectiveStatus === "locked";
  const [depth, setDepth] = useState<ThoroughnessResult | null>(null);

  useEffect(() => {
    function sync() {
      setDepth(scoreThoroughness(m.id));
    }
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [m.id, m.status]);

  const Wrapper: ElementType = isLocked ? "div" : Link;
  const wrapperProps = isLocked ? {} : { href: `/dashboard/stage/${m.id}` };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex items-center gap-4 rounded-2xl border border-ink/8 bg-white px-4 py-4 transition-all duration-300 ${
        isLocked ? "opacity-50" : "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg"
      }`}
    >
      <StatusIcon status={effectiveStatus} color={color} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">
          <span className="mr-1.5 text-ink/35">{m.code}</span>
          {m.title}
        </p>
        <div className="mt-0.5 flex items-center gap-2">
          <p className="text-xs text-ink/45">
            {m.time} · {m.difficulty}
          </p>
          {depth && <DepthIndicator depth={depth} color={color} />}
        </div>
      </div>
      {effectiveStatus === "complete" && (
        <span className="shrink-0 text-xs font-semibold text-ink/35">Done</span>
      )}
      {effectiveStatus === "in-progress" && (
        <span
          className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold"
          style={{ color, background: `color-mix(in oklab, ${color} 14%, white)` }}
        >
          In progress
        </span>
      )}
    </Wrapper>
  );
}

function DepthIndicator({ depth, color }: { depth: ThoroughnessResult; color: string }) {
  return (
    <span
      className="inline-flex shrink-0 items-center gap-1.5"
      title={`Response depth: ${depth.label}`}
      aria-label={`Response depth: ${depth.label}`}
    >
      <span className="flex items-end gap-[1.5px]">
        {[1, 2, 3].map((tick) => (
          <span
            key={tick}
            className={`w-[3px] rounded-[1px] ${tick > depth.level ? "bg-ink/10" : ""}`}
            style={{
              height: 3 + tick * 2,
              background: tick <= depth.level ? color : undefined,
            }}
          />
        ))}
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/40">
        {depth.label}
      </span>
    </span>
  );
}

function StatusIcon({ status, color }: { status: ModuleStatus; color: string }) {
  if (status === "complete") {
    return (
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
        style={{ background: color }}
      >
        ✓
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2"
        style={{ borderColor: color }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      </span>
    );
  }
  if (status === "locked") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/8 text-ink/30">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.7} className="h-4 w-4">
          <rect x="5" y="10.5" width="14" height="9" rx="2" stroke="currentColor" />
          <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2"
      style={{ borderColor: `color-mix(in oklab, ${color} 45%, transparent)` }}
    />
  );
}
