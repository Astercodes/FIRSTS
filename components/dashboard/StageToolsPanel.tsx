"use client";

import { useState } from "react";
import Link from "next/link";
import { LEARN_CONTENT } from "@/lib/moduleContent";
import type { FirstModule } from "@/lib/dashboardData";

type ToolUse = { id: number; title: string };

function ToolRow({ tool, uses }: { tool: string; uses: ToolUse[] }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl border border-ink/8 bg-paper-dim px-4 py-3.5">
      <span className="text-sm font-medium text-ink/80">{tool}</span>
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
  );
}

export function StageToolsPanel({ modules }: { modules: FirstModule[] }) {
  const [showAll, setShowAll] = useState(false);
  const toolMap = new Map<string, ToolUse[]>();

  for (const m of modules) {
    const content = LEARN_CONTENT[m.id];
    if (!content) continue;
    for (const tool of content.tools) {
      const uses = toolMap.get(tool) ?? [];
      uses.push({ id: m.id, title: m.title });
      toolMap.set(tool, uses);
    }
  }

  const entries = Array.from(toolMap.entries()).sort(
    (a, b) => b[1].length - a[1].length
  );

  if (entries.length === 0) return null;

  const shared = entries.filter(([, uses]) => uses.length > 1);
  const single = entries.filter(([, uses]) => uses.length === 1);
  const PREVIEW = 6;
  const visibleSingle = showAll ? single : single.slice(0, PREVIEW);

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Tools &amp; resources
      </p>
      <h2 className="mt-1 font-display text-xl font-semibold text-ink">
        What you&apos;ll need for this stage
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
        Pulled straight from the FIRSTS in this stage, so you can line up
        what you need before you start.
      </p>

      {shared.length > 0 && (
        <div className="mt-5">
          <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
            Used across multiple FIRSTS
          </p>
          <div className="space-y-2.5">
            {shared.map(([tool, uses]) => (
              <ToolRow key={tool} tool={tool} uses={uses} />
            ))}
          </div>
        </div>
      )}

      {single.length > 0 && (
        <div className="mt-5">
          {shared.length > 0 && (
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
              Also referenced
            </p>
          )}
          <div className="space-y-2.5">
            {visibleSingle.map(([tool, uses]) => (
              <ToolRow key={tool} tool={tool} uses={uses} />
            ))}
          </div>
          {single.length > PREVIEW && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="mt-3 text-sm font-semibold text-berry-burst hover:underline"
            >
              {showAll
                ? "Show fewer"
                : `Show all ${single.length} resources`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
