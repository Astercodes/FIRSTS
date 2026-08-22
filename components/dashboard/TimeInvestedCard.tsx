import type { TimeInvested } from "@/lib/momentum";

export function TimeInvestedCard({ data }: { data: TimeInvested }) {
  const estimatedHrs = data.estimatedMinutes / 60;
  const actualHrs = data.actualMinutes / 60;
  const maxHrs = Math.max(estimatedHrs, actualHrs, 1);

  return (
    <div className="flex h-full flex-col justify-center rounded-3xl border border-ink/8 bg-white p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Time invested
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-5xl font-bold tracking-tight text-ink">
          {actualHrs.toFixed(1)}
        </span>
        <span className="text-sm font-semibold text-ink/50">hrs actual</span>
      </div>

      <div className="mt-5 space-y-3">
        <TimeBar label="Estimated" hrs={estimatedHrs} maxHrs={maxHrs} tone="light" />
        <TimeBar label="Actual" hrs={actualHrs} maxHrs={maxHrs} tone="strong" />
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink/40">
        Based on {data.countedModules} of {data.totalComplete} completed FIRSTS with a defined time
        estimate. Actual time reflects how thorough your saved answers were.
      </p>
    </div>
  );
}

function TimeBar({ label, hrs, maxHrs, tone }: { label: string; hrs: number; maxHrs: number; tone: "light" | "strong" }) {
  const pct = Math.max((hrs / maxHrs) * 100, hrs > 0 ? 3 : 0);
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-semibold text-ink/55">{label}</span>
        <span className="text-xs font-bold tabular-nums text-ink/70">{hrs.toFixed(1)} hrs</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/6">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: tone === "strong" ? "var(--berry-burst)" : "color-mix(in oklab, var(--berry-burst) 35%, var(--paper-dim))",
          }}
        />
      </div>
    </div>
  );
}
