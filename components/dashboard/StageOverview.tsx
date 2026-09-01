"use client";

import Link from "next/link";
import { FirstsList } from "@/components/dashboard/FirstsList";
import { PaceBandPill } from "@/components/dashboard/PaceBandPill";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { STAGES, completionStats, type StageId } from "@/lib/dashboardData";
import { paceBand } from "@/lib/socialProof";

export function StageOverview({ stage }: { stage: StageId }) {
  const allModules = useFirstsWithProgress();
  const modules = allModules.filter((m) => m.stage === stage);
  const stats = completionStats(modules);
  const current = STAGES.find((s) => s.id === stage)!;
  const band = paceBand(stage, stats.pct);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {STAGES.map((s) => (
          <Link
            key={s.id}
            href={s.href}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              s.id === stage ? "bg-ink text-paper" : "bg-paper-dim text-ink/60 hover:text-ink"
            }`}
          >
            {s.shortLabel}
          </Link>
        ))}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-berry-burst">
          {current.label}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
          {current.shortLabel}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <p className="text-[15px] text-ink/55">
            {stats.complete} of {stats.total} FIRSTS complete. Tap any
            unlocked module to open it.
          </p>
          {band && <PaceBandPill band={band} />}
        </div>
      </div>
      <FirstsList
        modules={modules}
        eyebrow={current.shortLabel}
        title={`All ${stats.total} FIRSTS`}
      />
    </div>
  );
}
