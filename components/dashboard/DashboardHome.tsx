"use client";

import { ContinueCard } from "@/components/dashboard/ContinueCard";
import { DueForReview } from "@/components/dashboard/DueForReview";
import { PortfolioTeaser } from "@/components/dashboard/PortfolioTeaser";
import { StackedLayers } from "@/components/dashboard/StackedLayers";
import { RadarChart } from "@/components/dashboard/RadarChart";
import { CategoryHeatmap } from "@/components/dashboard/CategoryHeatmap";
import { VelocityChart } from "@/components/dashboard/VelocityChart";
import { StreakCard } from "@/components/dashboard/StreakCard";
import { TimeInvestedCard } from "@/components/dashboard/TimeInvestedCard";
import { MomentumStories } from "@/components/dashboard/MomentumStories";
import { PeerCompareCard } from "@/components/dashboard/PeerCompareCard";
import { BadgeShelf } from "@/components/dashboard/BadgeShelf";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { completionStats, stageProgress, categoryProgressByStage, STAGES } from "@/lib/dashboardData";
import { habitStreak, weeklyVelocity, timeInvested, isDeceleration } from "@/lib/momentum";
import { allBadges } from "@/lib/badges";

export function DashboardHome() {
  const allModules = useFirstsWithProgress();
  const stats = completionStats(allModules);
  const stages = stageProgress(allModules);
  const categoryRows = categoryProgressByStage(allModules);
  const continueModule =
    allModules.find((m) => m.status === "in-progress") ??
    allModules.find((m) => m.status === "available") ??
    allModules.find((m) => m.status !== "complete");
  const dueForReview = allModules.filter((m) => m.dueForReview);

  const streak = habitStreak(allModules);
  const velocityWeeks = weeklyVelocity(allModules, 12);
  const timeStats = timeInvested(allModules);
  const decelerating = isDeceleration(velocityWeeks);
  const weeklyAvg = velocityWeeks.reduce((s, w) => s + w.count, 0) / velocityWeeks.length;
  const bestWeek = Math.max(...velocityWeeks.map((w) => w.count));
  const last4Weeks = velocityWeeks.slice(-4).reduce((s, w) => s + w.count, 0);

  const compareStageId = continueModule?.stage ?? "one";
  const compareStage = stages.find((s) => s.stage === compareStageId)!;
  const compareStageLabel = STAGES.find((s) => s.id === compareStageId)!.label;

  const badges = allBadges(allModules);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {continueModule && <ContinueCard module={continueModule} />}
        </div>

        <div className="flex flex-col justify-center rounded-3xl border border-ink/8 bg-white p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            All {STAGES.length} stages
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
        <div className="rounded-3xl border border-ink/8 bg-white p-7 lg:col-span-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
                Momentum
              </p>
              <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
                FIRSTS completed per week
              </h2>
            </div>
            {decelerating && (
              <span className="rounded-full bg-[color-mix(in_oklab,var(--tropical-mango)_18%,white)] px-3 py-1 text-xs font-semibold text-ink/70">
                Pace has slowed recently
              </span>
            )}
          </div>
          <div className="mt-5">
            <VelocityChart weeks={velocityWeeks} />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-ink/8 pt-5">
            <VelocityStat label="Weekly average" value={weeklyAvg.toFixed(1)} />
            <VelocityStat label="Best week" value={String(bestWeek)} />
            <VelocityStat label="Last 4 weeks" value={String(last4Weeks)} />
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6 lg:col-span-2">
          <StreakCard streak={streak} />
          <TimeInvestedCard data={timeStats} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <MomentumStories />
        </div>
        <div className="lg:col-span-2">
          <PeerCompareCard stage={compareStageId} stageLabel={compareStageLabel} pct={compareStage.pct} />
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

      <BadgeShelf stage={badges.stage} standout={badges.standout} />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DueForReview modules={dueForReview} />
        </div>
        <PortfolioTeaser />
      </div>
    </div>
  );
}

function VelocityStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold tracking-tight text-ink">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-ink/45">{label}</p>
    </div>
  );
}
