"use client";

const SEGMENTS = [
  { key: "active", label: "Active", sublabel: "Active in the last 7 days", color: "#1a8f3c" },
  { key: "watch", label: "Watch", sublabel: "7 to 20 days inactive", color: "var(--sunshine-orange)" },
  { key: "atRisk", label: "At risk", sublabel: "21+ days inactive", color: "#c92f3f" },
] as const;

export function StatusBar({
  active,
  watch,
  atRisk,
}: {
  active: number;
  watch: number;
  atRisk: number;
}) {
  const total = active + watch + atRisk;
  const counts = { active, watch, atRisk };

  return (
    <div>
      <div className="flex h-5 w-full overflow-hidden rounded-full bg-ink/8">
        {SEGMENTS.map((seg, i) => {
          const count = counts[seg.key];
          if (count === 0) return null;
          const pct = total === 0 ? 0 : (count / total) * 100;
          return (
            <div
              key={seg.key}
              className="h-full transition-all duration-700 ease-out"
              style={{
                width: `${pct}%`,
                background: seg.color,
                marginLeft: i === 0 ? 0 : 2,
              }}
              title={`${seg.label}: ${count} student${count === 1 ? "" : "s"} (${seg.sublabel})`}
            />
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {SEGMENTS.map((seg) => (
          <div key={seg.key} className="flex items-start gap-2">
            <span
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: seg.color }}
              aria-hidden
            />
            <div>
              <p className="font-display text-lg font-bold text-ink tabular-nums">
                {counts[seg.key]}
              </p>
              <p className="text-xs leading-snug text-ink/50">{seg.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
