"use client";

import Link from "next/link";
import {
  type Cohort,
  studentOverallPct,
  isAtRisk,
  cohortAvgCompletion,
  cohortAtRiskCount,
} from "@/lib/cohortData";

export function CohortDetail({ cohort }: { cohort: Cohort }) {
  const avg = cohortAvgCompletion(cohort);
  const atRisk = cohortAtRiskCount(cohort);
  const sorted = [...cohort.students].sort(
    (a, b) => studentOverallPct(b) - studentOverallPct(a)
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <Link href="/advisor" className="text-sm font-medium text-ink/45 hover:text-ink">
          ← Overview
        </Link>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
          {cohort.name}
        </h1>
        <p className="mt-1 text-sm text-ink/50">
          {cohort.institution} · {cohort.students.length} students
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Average completion" value={`${avg}%`} color="var(--juicy-plum)" />
        <StatCard label="At-risk students" value={String(atRisk)} color="var(--sunshine-orange)" />
        <StatCard
          label="Opted to share at least one reflection"
          value={String(cohort.students.filter((s) => s.sharedCount > 0).length)}
          color="var(--citrus-lime)"
        />
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-2">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
                <th className="px-5 py-4">Student</th>
                <th className="px-5 py-4">Stage 1</th>
                <th className="px-5 py-4">Stage 2</th>
                <th className="px-5 py-4">Stage 3</th>
                <th className="px-5 py-4">Stage 4</th>
                <th className="px-5 py-4">Overall</th>
                <th className="px-5 py-4">Last active</th>
                <th className="px-5 py-4">Shared</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((s) => {
                const overall = studentOverallPct(s);
                const risky = isAtRisk(s);
                return (
                  <tr key={s.id} className="border-t border-ink/8">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                          style={{ background: "linear-gradient(135deg, var(--juicy-plum), var(--berry-burst))" }}
                        >
                          {s.name.charAt(0)}
                        </span>
                        <div>
                          <p className="font-medium text-ink">{s.name}</p>
                          {risky && (
                            <p className="text-xs font-semibold text-[var(--sunshine-orange)]">At risk</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <MiniPctCell pct={s.stagePct.one} />
                    <MiniPctCell pct={s.stagePct.two} />
                    <MiniPctCell pct={s.stagePct.three} />
                    <MiniPctCell pct={s.stagePct.four} />
                    <td className="px-5 py-4 font-semibold text-ink">{overall}%</td>
                    <td className="px-5 py-4 text-ink/60">
                      {s.daysInactive === 0 ? "Today" : `${s.daysInactive}d ago`}
                    </td>
                    <td className="px-5 py-4 text-ink/60">
                      {s.sharedCount > 0
                        ? `${s.sharedCount} module${s.sharedCount === 1 ? "" : "s"}`
                        : "None yet"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-ink/40">
        You&apos;re seeing completion status only. A student&apos;s actual
        worksheet answers stay private unless they choose to share a
        specific module with you.
      </p>
    </div>
  );
}

function MiniPctCell({ pct }: { pct: number }) {
  return (
    <td className="px-5 py-4">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-14 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: "var(--juicy-plum)" }}
          />
        </div>
        <span className="text-xs text-ink/55">{pct}%</span>
      </div>
    </td>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6">
      <p className="font-display text-3xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="mt-1.5 text-xs leading-snug text-ink/50">{label}</p>
    </div>
  );
}
