import Link from "next/link";
import type { FirstModule } from "@/lib/dashboardData";
import { completionStats } from "@/lib/dashboardData";

export function StageTwoTeaser({ modules }: { modules: FirstModule[] }) {
  const stats = completionStats(modules);

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Up next
      </p>
      <p className="mt-2 font-display text-lg font-semibold text-ink">
        Stage Two
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink/60">
        Professional Identity &amp; Personal Brand — {stats.total} FIRSTS covering your
        pitch, LinkedIn, resume, and portfolio.
      </p>
      <Link
        href="/dashboard/stage/two"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
      >
        Explore Stage Two →
      </Link>
    </div>
  );
}
