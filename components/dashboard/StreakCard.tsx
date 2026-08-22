export function StreakCard({ streak }: { streak: number }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-3xl border border-ink/8 bg-white p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Habit streak
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-display text-5xl font-bold tracking-tight text-ink">{streak}</span>
        <span className="text-sm font-semibold text-ink/50">day{streak === 1 ? "" : "s"}</span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/50">
        {streak > 0
          ? "Consecutive days active on your Stage Four habit-building FIRSTS."
          : "No active streak yet. A Stage Four habit FIRST completed today starts one."}
      </p>
    </div>
  );
}
