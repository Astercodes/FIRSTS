import Link from "next/link";
import type { CategoryProgress } from "@/lib/dashboardData";

type QuickModule = { id: number; title: string; minutes: number | null };

export function RecentGradSnapshot({
  daysSinceGrad,
  overallPct,
  overallComplete,
  overallTotal,
  stageThreeCategories,
  stageThreeHref,
  categoryHrefs,
  decelerating,
  quickModule,
}: {
  daysSinceGrad: number | null;
  overallPct: number;
  overallComplete: number;
  overallTotal: number;
  stageThreeCategories: CategoryProgress[];
  stageThreeHref: string;
  categoryHrefs: Record<string, string>;
  decelerating: boolean;
  quickModule?: QuickModule;
}) {
  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Since graduation
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            Time elapsed, readiness built
          </h2>
        </div>
        <Link
          href={stageThreeHref}
          className="text-xs font-semibold text-ink/45 underline decoration-ink/20 underline-offset-4 hover:text-ink"
        >
          Open Stage Three →
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 border-b border-ink/8 pb-6">
        <div>
          {daysSinceGrad === null ? (
            <>
              <p className="font-display text-3xl font-bold tracking-tight text-ink/25">Add date</p>
              <p className="mt-1 text-xs leading-relaxed text-ink/45">
                Set your graduation date on{" "}
                <Link
                  href="/dashboard/profile"
                  className="font-semibold underline decoration-ink/20 underline-offset-4 hover:text-ink"
                >
                  your profile
                </Link>{" "}
                to see this counter.
              </p>
            </>
          ) : (
            <>
              <p className="font-display text-3xl font-bold tracking-tight text-ink">{daysSinceGrad}</p>
              <p className="mt-1 text-xs font-medium text-ink/45">
                day{daysSinceGrad === 1 ? "" : "s"} since graduation
              </p>
            </>
          )}
        </div>
        <div>
          <p className="font-display text-3xl font-bold tracking-tight text-ink">{overallPct}%</p>
          <p className="mt-1 text-xs font-medium text-ink/45">
            {overallComplete} of {overallTotal} FIRSTS built, across the whole blueprint
          </p>
        </div>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-ink/40">
        Job search tools
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {stageThreeCategories.map((cat) => (
          <Link
            key={cat.category}
            href={categoryHrefs[cat.category] ?? stageThreeHref}
            className="block rounded-2xl border border-ink/8 bg-paper-dim p-4 transition-colors hover:border-ink/20"
          >
            <p className="text-xs font-semibold text-ink/70">{cat.label}</p>
            <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-ink/8">
              <div
                className="h-full rounded-full"
                style={{ width: `${cat.pct}%`, background: cat.color }}
              />
            </div>
            <p className="mt-1.5 text-xs text-ink/45">
              {cat.complete}/{cat.total} complete
            </p>
          </Link>
        ))}
      </div>

      {decelerating && (
        <div className="mt-5 rounded-2xl bg-[color-mix(in_oklab,var(--tropical-mango)_14%,white)] p-4">
          <p className="text-sm font-semibold text-ink">Pace has slowed. That&apos;s normal, not a verdict.</p>
          <p className="mt-1 text-xs leading-relaxed text-ink/55">
            {quickModule ? (
              <>
                Rebuild momentum with something small:{" "}
                <Link
                  href={`/dashboard/stage/${quickModule.id}`}
                  className="font-semibold underline decoration-ink/30 underline-offset-4 hover:text-ink"
                >
                  {quickModule.title}
                </Link>
                {quickModule.minutes ? ` (about ${quickModule.minutes} min)` : ""}.
              </>
            ) : (
              "Pick any unlocked FIRST and knock it out today, however small."
            )}
          </p>
        </div>
      )}
    </div>
  );
}
