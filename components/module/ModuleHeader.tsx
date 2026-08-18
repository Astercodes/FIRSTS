import Link from "next/link";
import { CATEGORY_META, type FirstModule } from "@/lib/dashboardData";

export function ModuleHeader({ module: m }: { module: FirstModule }) {
  const color = CATEGORY_META[m.category].color;

  return (
    <div className="mb-6">
      <Link
        href="/dashboard"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink/50 transition-colors hover:text-ink"
      >
        ← Stage One
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        <span
          className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
          style={{ color, background: `color-mix(in oklab, ${color} 14%, white)` }}
        >
          First {String(m.id).padStart(2, "0")}
        </span>
        <span className="rounded-full bg-ink/6 px-3 py-1 text-[11px] font-semibold text-ink/55">
          {m.time} · {m.difficulty}
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/35">
          {CATEGORY_META[m.category].label}
        </span>
      </div>

      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {m.title}
      </h1>
    </div>
  );
}
