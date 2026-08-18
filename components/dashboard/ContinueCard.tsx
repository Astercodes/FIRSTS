import Link from "next/link";
import type { FirstModule } from "@/lib/dashboardData";
import { CATEGORY_META } from "@/lib/dashboardData";

export function ContinueCard({ module: m }: { module: FirstModule }) {
  const color = CATEGORY_META[m.category].color;
  const isInProgress = m.status === "in-progress";

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-7 text-paper sm:p-8"
      style={{
        background: `linear-gradient(120deg, var(--ink), color-mix(in oklab, ${color} 35%, var(--ink)))`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ background: color }}
      />
      <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">
        {isInProgress ? "Continue where you left off" : "Start your next FIRST"}
      </p>
      <h2 className="relative mt-3 font-display text-2xl font-semibold sm:text-3xl">
        First {m.code} · {m.title}
      </h2>
      <p className="relative mt-2 text-sm text-paper/60">
        {m.time} · {m.difficulty}
        {isInProgress && m.lastUpdated ? ` · last touched ${m.lastUpdated}` : ""}
      </p>
      <Link
        href={`/dashboard/stage/${m.id}`}
        className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
      >
        {isInProgress ? "Resume worksheet →" : "Start worksheet →"}
      </Link>
    </div>
  );
}
