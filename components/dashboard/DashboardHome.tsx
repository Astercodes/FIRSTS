"use client";

import { ContinueCard } from "@/components/dashboard/ContinueCard";
import { DueForReview } from "@/components/dashboard/DueForReview";
import { PortfolioTeaser } from "@/components/dashboard/PortfolioTeaser";
import { StackedLayers } from "@/components/dashboard/StackedLayers";
import { RadarChart } from "@/components/dashboard/RadarChart";
import { CategoryHeatmap } from "@/components/dashboard/CategoryHeatmap";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { completionStats, stageProgress, categoryProgressByStage } from "@/lib/dashboardData";

export function DashboardHome() {
  const allModules = useFirstsWithProgress();
  const stats = completionStats(allModules);
  const stages = stageProgress(allModules);
  const categoryRows = categoryProgressByStage(allModules);
  const continueModule =
    allModules.find((m) => m.status === "in-progress") ?? allModules.find((m) => m.status === "available");
  const dueForReview = allModules.filter((m) => m.dueForReview);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {continueModule && <ContinueCard module={continueModule} />}
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-ink/8 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            All 7 stages
          </p>
          <p className="mt-2 font-display text-5xl font-bold tracking-tight text-ink">
            {stats.pct}%
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/50">
            {stats.complete} of {stats.total} FIRSTS complete across the whole blueprint.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/8 bg-white p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your blueprint
        </p>
        <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
          Every stage builds on the one below it
        </h2>
        <div className="mt-6">
          <StackedLayers stages={stages} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-ink/8 bg-white p-7 lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Your shape
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            Strong where, thin where
          </h2>
          <div className="mt-4">
            <RadarChart stages={stages} />
          </div>
        </div>

        <div className="rounded-3xl border border-ink/8 bg-white p-7 lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Category strength
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            Every category, every stage
          </h2>
          <div className="mt-5">
            <CategoryHeatmap rows={categoryRows} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DueForReview modules={dueForReview} />
        </div>
        <PortfolioTeaser />
      </div>
    </div>
  );
}
