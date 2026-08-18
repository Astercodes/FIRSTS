"use client";

import Link from "next/link";
import { FirstsList } from "@/components/dashboard/FirstsList";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { STAGES, completionStats, type StageId } from "@/lib/dashboardData";

export function StageOverview({ stage }: { stage: StageId }) {
  const allModules = useFirstsWithProgress();
  const modules = allModules.filter((m) => m.stage === stage);
  const stats = completionStats(modules);
  const current = STAGES.find((s) => s.id === stage)!;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex gap-2">
        {STAGES.map((s) => (
          <Link
            key={s.id}
            href={s.href}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
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
        <p className="mt-2 text-[15px] text-ink/55">
          {stats.complete} of {stats.total} FIRSTS complete. Tap any
          unlocked module to open it.
        </p>
      </div>
      <FirstsList
        modules={modules}
        eyebrow={current.shortLabel}
        title={`All ${stats.total} FIRSTS`}
      />
    </div>
  );
}
