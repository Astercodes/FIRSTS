"use client";

import type { OutcomeComparison } from "@/lib/cohortData";

export function OutcomeComparisonChart({ data }: { data: OutcomeComparison }) {
  const maxCompletion = Math.max(data.engaged.avgCompletion, data.notEngaged.avgCompletion, 1);
  const maxInactive = Math.max(data.engaged.avgDaysInactive, data.notEngaged.avgDaysInactive, 1);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        <MetricComparison
          label="Average completion"
          unit="%"
          engagedValue={data.engaged.avgCompletion}
          notEngagedValue={data.notEngaged.avgCompletion}
          max={maxCompletion}
          higherIsBetter
        />
        <MetricComparison
          label="Average days inactive"
          unit="d"
          engagedValue={data.engaged.avgDaysInactive}
          notEngagedValue={data.notEngaged.avgDaysInactive}
          max={maxInactive}
          higherIsBetter={false}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 border-t border-ink/8 pt-4 text-xs text-ink/45">
        <span>{data.engaged.count} students have shared with an advisor</span>
        <span>{data.notEngaged.count} students haven&apos;t yet</span>
      </div>
    </div>
  );
}

function MetricComparison({
  label,
  unit,
  engagedValue,
  notEngagedValue,
  max,
  higherIsBetter,
}: {
  label: string;
  unit: string;
  engagedValue: number;
  notEngagedValue: number;
  max: number;
  higherIsBetter: boolean;
}) {
  const engagedIsBetter = higherIsBetter ? engagedValue >= notEngagedValue : engagedValue <= notEngagedValue;

  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
      <div className="space-y-3">
        <Bar
          label="Shared with an advisor"
          value={engagedValue}
          unit={unit}
          pct={(engagedValue / max) * 100}
          tone={engagedIsBetter ? "strong" : "light"}
        />
        <Bar
          label="Hasn't shared yet"
          value={notEngagedValue}
          unit={unit}
          pct={(notEngagedValue / max) * 100}
          tone={engagedIsBetter ? "light" : "strong"}
        />
      </div>
    </div>
  );
}

function Bar({
  label,
  value,
  unit,
  pct,
  tone,
}: {
  label: string;
  value: number;
  unit: string;
  pct: number;
  tone: "light" | "strong";
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-medium text-ink/55">{label}</span>
        <span className="text-xs font-bold tabular-nums text-ink/70">
          {value}
          {unit}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/6">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.max(pct, value > 0 ? 3 : 0)}%`,
            background: tone === "strong" ? "var(--berry-burst)" : "color-mix(in oklab, var(--berry-burst) 30%, var(--paper-dim))",
          }}
        />
      </div>
    </div>
  );
}
