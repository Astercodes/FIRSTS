"use client";

import { useState } from "react";
import Link from "next/link";
import { LEARN_CONTENT } from "@/lib/moduleContent";
import { findRealTools } from "@/lib/toolLinks";
import type { FirstModule } from "@/lib/dashboardData";

type ToolUse = { id: number; title: string };

export function StageToolsPanel({ modules }: { modules: FirstModule[] }) {
  const [showAll, setShowAll] = useState(false);
  const toolMap = new Map<string, { url: string; uses: ToolUse[] }>();

  for (const m of modules) {
    const content = LEARN_CONTENT[m.id];
    if (!content) continue;
    for (const tool of findRealTools(content.tools)) {
      const entry = toolMap.get(tool.label) ?? { url: tool.url, uses: [] };
      entry.uses.push({ id: m.id, title: m.title });
      toolMap.set(tool.label, entry);
    }
  }

  const entries = Array.from(toolMap.entries()).sort(
    (a, b) => b[1].uses.length - a[1].uses.length
  );

  if (entries.length === 0) return null;

  const PREVIEW = 8;
  const visible = showAll ? entries : entries.slice(0, PREVIEW);

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Tools &amp; resources
      </p>
      <h2 className="mt-1 font-display text-xl font-semibold text-ink">
        Tools for this stage
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
        Real tools referenced across the FIRSTS in this stage, linked to
        where you can use them.
      </p>

      <div className="mt-5 space-y-2.5">
        {visible.map(([label, { url, uses }]) => (
          <div
            key={label}
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border border-ink/8 bg-paper-dim px-4 py-3.5"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-berry-burst hover:underline"
            >
              {label} &#8599;
            </a>
            <div className="flex flex-wrap gap-1.5">
              {uses.slice(0, 3).map((u) => (
                <Link
                  key={u.id}
                  href={`/dashboard/stage/${u.id}`}
                  className="rounded-full border border-ink/10 bg-white px-2.5 py-1 text-xs font-medium text-ink/60 transition-colors hover:border-ink/25 hover:text-ink"
                >
                  {u.title}
                </Link>
              ))}
              {uses.length > 3 && (
                <span className="px-1.5 py-1 text-xs font-medium text-ink/40">
                  +{uses.length - 3} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {entries.length > PREVIEW && (
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="mt-3 text-sm font-semibold text-berry-burst hover:underline"
        >
          {showAll ? "Show fewer" : `Show all ${entries.length} tools`}
        </button>
      )}
    </div>
  );
}
