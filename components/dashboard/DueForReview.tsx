import type { FirstModule } from "@/lib/dashboardData";
import { CATEGORY_META } from "@/lib/dashboardData";

export function DueForReview({ modules }: { modules: FirstModule[] }) {
  if (modules.length === 0) return null;

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Due for review
      </p>
      <div className="space-y-3">
        {modules.map((m) => {
          const color = CATEGORY_META[m.category].color;
          return (
            <div
              key={m.id}
              className="flex items-center justify-between gap-4 rounded-2xl bg-paper-dim px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">{m.title}</p>
                <p className="text-xs text-ink/50">
                  Last written {m.lastUpdated}
                </p>
              </div>
              <button
                className="shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold"
                style={{
                  color,
                  background: `color-mix(in oklab, ${color} 16%, white)`,
                }}
              >
                Revisit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
