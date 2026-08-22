"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { StalledStudent } from "@/lib/cohortData";

type SortKey = "risk" | "name" | "cohort" | "stage" | "inactive";

const STAGE_LABEL: Record<string, string> = {
  one: "Stage One",
  two: "Stage Two",
  three: "Stage Three",
  four: "Stage Four",
  complete: "Complete",
};

const MAX_ROWS = 50;

export function StalledStudentsTable({ students }: { students: StalledStudent[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("risk");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "name" || key === "cohort" || key === "stage" ? "asc" : "desc");
    }
  }

  const sorted = useMemo(() => {
    const copy = [...students];
    copy.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "risk") cmp = a.riskScore - b.riskScore;
      else if (sortKey === "name") cmp = a.name.localeCompare(b.name);
      else if (sortKey === "cohort") cmp = a.cohortName.localeCompare(b.cohortName);
      else if (sortKey === "stage") cmp = a.currentStagePct - b.currentStagePct;
      else if (sortKey === "inactive") cmp = a.daysInactive - b.daysInactive;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [students, sortKey, sortDir]);

  const visible = sorted.slice(0, MAX_ROWS);

  if (students.length === 0) {
    return (
      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Stalled students</h2>
        <p className="text-sm text-ink/45">
          No one is flagged right now. Nobody has gone 14+ days inactive or stalled mid-stage.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-2">
      <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 pt-5">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Stalled students</h2>
          <p className="mt-1 text-xs text-ink/45">
            Inactive 14+ days, or started a stage and stopped. Sortable, ranked by risk.
          </p>
        </div>
        <span className="rounded-full bg-[#c92f3f]/10 px-3 py-1 text-xs font-bold text-[#c92f3f]">
          {students.length} flagged
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
              <SortableHeader label="Student" sortKey="name" active={sortKey} dir={sortDir} onClick={toggleSort} />
              <SortableHeader label="Cohort" sortKey="cohort" active={sortKey} dir={sortDir} onClick={toggleSort} />
              <SortableHeader label="Current stage" sortKey="stage" active={sortKey} dir={sortDir} onClick={toggleSort} />
              <SortableHeader label="Days inactive" sortKey="inactive" active={sortKey} dir={sortDir} onClick={toggleSort} />
              <th className="px-5 py-4">Flag</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((s) => (
              <tr key={`${s.cohortId}-${s.id}`} className="border-t border-ink/8">
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
                      <p className="text-xs text-ink/40">{s.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <Link href={`/advisor/cohorts/${s.cohortId}`} className="text-ink/70 hover:text-berry-burst hover:underline">
                    {s.cohortName}
                  </Link>
                </td>
                <td className="px-5 py-4 text-ink/70">
                  {STAGE_LABEL[s.currentStage]}
                  {s.currentStage !== "complete" && <span className="ml-1 text-xs text-ink/40">({s.currentStagePct}%)</span>}
                </td>
                <td className="px-5 py-4 font-semibold text-ink">
                  {s.daysInactive}d
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/60">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: s.reason === "stalled-mid-stage" ? "var(--tropical-mango)" : "#c92f3f" }}
                    />
                    {s.reasonLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {students.length > MAX_ROWS && (
        <p className="px-5 pb-4 pt-3 text-xs text-ink/40">
          Showing the top {MAX_ROWS} of {students.length} flagged students by risk.
        </p>
      )}
    </div>
  );
}

function SortableHeader({
  label,
  sortKey,
  active,
  dir,
  onClick,
}: {
  label: string;
  sortKey: SortKey;
  active: SortKey;
  dir: "asc" | "desc";
  onClick: (key: SortKey) => void;
}) {
  const isActive = active === sortKey;
  return (
    <th className="px-5 py-4">
      <button
        type="button"
        onClick={() => onClick(sortKey)}
        className={`flex items-center gap-1 transition-colors hover:text-ink ${isActive ? "text-ink" : ""}`}
      >
        {label}
        <span className="text-[10px]" aria-hidden>
          {isActive ? (dir === "asc" ? "↑" : "↓") : ""}
        </span>
      </button>
    </th>
  );
}
