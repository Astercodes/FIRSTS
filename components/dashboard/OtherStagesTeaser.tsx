import Link from "next/link";
import { STAGES, completionStats, type FirstModule, type StageId } from "@/lib/dashboardData";

const STAGE_BLURBS: Partial<Record<StageId, string>> = {
  two: "Professional Identity & Personal Brand: your pitch, LinkedIn, resume, and portfolio.",
  three: "Job Application & Interview Skills: your tracker, STAR stories, mock interviews, and offers.",
};

export function OtherStagesTeaser({ modules }: { modules: FirstModule[] }) {
  const otherStages = STAGES.filter((s) => s.id !== "one");

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Up next
      </p>
      <div className="mt-3 space-y-4">
        {otherStages.map((stage) => {
          const stats = completionStats(modules.filter((m) => m.stage === stage.id));
          return (
            <div key={stage.id}>
              <p className="font-display text-lg font-semibold text-ink">
                {stage.shortLabel}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">
                {STAGE_BLURBS[stage.id] ?? `${stats.total} FIRSTS.`}
              </p>
              <Link
                href={stage.href}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
              >
                Explore {stage.shortLabel} →
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
