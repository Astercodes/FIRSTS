"use client";

import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { ContinueCard } from "@/components/dashboard/ContinueCard";
import { DueForReview } from "@/components/dashboard/DueForReview";
import { FirstsList } from "@/components/dashboard/FirstsList";
import { PortfolioTeaser } from "@/components/dashboard/PortfolioTeaser";
import { StageTwoTeaser } from "@/components/dashboard/StageTwoTeaser";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { MOCK_USER, completionStats } from "@/lib/dashboardData";

export function DashboardHome() {
  const allModules = useFirstsWithProgress();
  const modules = allModules.filter((m) => m.stage === "one");
  const stageTwoModules = allModules.filter((m) => m.stage === "two");
  const stats = completionStats(modules);
  const continueModule =
    modules.find((m) => m.status === "in-progress") ?? modules.find((m) => m.status === "available");
  const dueForReview = modules.filter((m) => m.dueForReview);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {continueModule && <ContinueCard module={continueModule} />}
        </div>

        <div className="flex items-center justify-center gap-6 rounded-3xl border border-ink/8 bg-white p-6">
          <ProgressRing
            pct={stats.pct}
            label={`${stats.complete}/${stats.total}`}
            sublabel="FIRSTS complete"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
              {MOCK_USER.stage}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              {stats.total - stats.complete} to go. At this pace you&apos;ll
              finish Stage One in about 9 weeks.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <FirstsList modules={modules} />
        </div>
        <div className="space-y-6">
          <DueForReview modules={dueForReview} />
          <StageTwoTeaser modules={stageTwoModules} />
          <PortfolioTeaser />
        </div>
      </div>
    </div>
  );
}
