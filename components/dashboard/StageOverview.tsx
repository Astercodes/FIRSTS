"use client";

import { FirstsList } from "@/components/dashboard/FirstsList";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { MOCK_USER, completionStats } from "@/lib/dashboardData";

export function StageOverview() {
  const modules = useFirstsWithProgress();
  const stats = completionStats(modules);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-berry-burst">
          {MOCK_USER.stage}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
          Stage One
        </h1>
        <p className="mt-2 text-[15px] text-ink/55">
          {stats.complete} of {stats.total} FIRSTS complete. Tap any
          unlocked module to open it.
        </p>
      </div>
      <FirstsList modules={modules} />
    </div>
  );
}
