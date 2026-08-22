"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { cohortsForInstitution } from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import {
  taggedStudents,
  applyFilters,
  atRiskPopulationOverlay,
  DEFAULT_FILTERS,
  type SegmentFilters,
  type TaggedStudent,
} from "@/lib/segmentation";
import { useCustomCohorts, createCustomCohort, deleteCustomCohort } from "@/lib/customCohortStore";

const STAGE_LABEL: Record<string, string> = {
  one: "Stage One",
  two: "Stage Two",
  three: "Stage Three",
  four: "Stage Four",
  complete: "Complete",
};

function studentKey(s: TaggedStudent) {
  return `${s.cohortId}-${s.id}`;
}

export function SegmentsView() {
  const [advisor, setAdvisor] = useState<AdvisorProfile | null>(null);

  useEffect(() => {
    const sync = () => setAdvisor(loadAdvisor());
    sync();
    window.addEventListener(ADVISOR_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(ADVISOR_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const institution = advisor?.institution || MOCK_ADVISOR.institution;
  const cohorts = useMemo(() => cohortsForInstitution(institution), [institution]);
  const tagged = useMemo(() => taggedStudents(cohorts), [cohorts]);
  const overlay = useMemo(() => atRiskPopulationOverlay(cohorts), [cohorts]);
  const customCohorts = useCustomCohorts();

  const majors = useMemo(() => Array.from(new Set(cohorts.map((c) => c.focus))).sort(), [cohorts]);
  const gradYears = useMemo(
    () => Array.from(new Set(tagged.map((s) => s.gradYear))).sort(),
    [tagged]
  );

  const [filters, setFilters] = useState<SegmentFilters>(DEFAULT_FILTERS);
  const filtered = useMemo(() => applyFilters(tagged, filters), [tagged, filters]);
  const filtersActive = JSON.stringify(filters) !== JSON.stringify(DEFAULT_FILTERS);

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [cohortName, setCohortName] = useState("");
  const [expandedCustom, setExpandedCustom] = useState<string | null>(null);

  function toggleOne(key: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function toggleAllVisible() {
    setSelected((prev) => {
      const visibleKeys = filtered.map(studentKey);
      const allSelected = visibleKeys.every((k) => prev.has(k));
      const next = new Set(prev);
      if (allSelected) {
        visibleKeys.forEach((k) => next.delete(k));
      } else {
        visibleKeys.forEach((k) => next.add(k));
      }
      return next;
    });
  }

  function saveSelection() {
    if (!cohortName.trim() || selected.size === 0) return;
    createCustomCohort(cohortName.trim(), Array.from(selected));
    setCohortName("");
    setSelected(new Set());
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          {institution}
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Segments
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Filter your students into populations, cross-reference stall risk against groups your
          institution prioritizes, and save ad hoc groups to track as a unit.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Filter students</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Major">
            <select
              value={filters.major}
              onChange={(e) => setFilters((f) => ({ ...f, major: e.target.value }))}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="all">All majors</option>
              {majors.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </Field>

          <Field label="Grad year">
            <select
              value={filters.gradYear}
              onChange={(e) => setFilters((f) => ({ ...f, gradYear: e.target.value }))}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="all">All grad years</option>
              {gradYears.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </Field>

          <Field label="Hasn't started">
            <select
              value={filters.notStartedStage}
              onChange={(e) => setFilters((f) => ({ ...f, notStartedStage: e.target.value as SegmentFilters["notStartedStage"] }))}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="any">Any stage</option>
              <option value="one">Stage One</option>
              <option value="two">Stage Two</option>
              <option value="three">Stage Three</option>
              <option value="four">Stage Four</option>
            </select>
          </Field>

          <Field label="Tags">
            <div className="flex flex-wrap gap-1.5">
              <TagToggle label="First-gen" active={filters.firstGen} onClick={() => setFilters((f) => ({ ...f, firstGen: !f.firstGen }))} />
              <TagToggle label="Athlete" active={filters.athlete} onClick={() => setFilters((f) => ({ ...f, athlete: !f.athlete }))} />
              <TagToggle label="International" active={filters.international} onClick={() => setFilters((f) => ({ ...f, international: !f.international }))} />
            </div>
          </Field>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-ink/8 pt-4">
          <p className="text-sm text-ink/60">
            <span className="font-semibold text-ink">{filtered.length}</span> of {tagged.length} students match
          </p>
          {filtersActive && (
            <button
              type="button"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="text-xs font-semibold text-ink/45 underline decoration-ink/20 underline-offset-4 hover:text-ink"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-2">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
                <th className="px-5 py-4">
                  <input
                    type="checkbox"
                    checked={filtered.length > 0 && filtered.every((s) => selected.has(studentKey(s)))}
                    onChange={toggleAllVisible}
                    className="h-4 w-4"
                    aria-label="Select all visible"
                  />
                </th>
                <th className="px-5 py-4">Student</th>
                <th className="px-5 py-4">Cohort</th>
                <th className="px-5 py-4">Major</th>
                <th className="px-5 py-4">Grad year</th>
                <th className="px-5 py-4">Current stage</th>
                <th className="px-5 py-4">Tags</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 200).map((s) => {
                const key = studentKey(s);
                const badges = [
                  s.firstGen && "First-gen",
                  s.athlete && "Athlete",
                  s.international && "Intl",
                  s.academicProbation && "Probation",
                  s.undeclaredMajor && "Undeclared",
                  s.noEngagementThisYear && "No engagement",
                ].filter(Boolean) as string[];
                return (
                  <tr key={key} className="border-t border-ink/8">
                    <td className="px-5 py-4">
                      <input
                        type="checkbox"
                        checked={selected.has(key)}
                        onChange={() => toggleOne(key)}
                        className="h-4 w-4"
                        aria-label={`Select ${s.name}`}
                      />
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-medium text-ink">{s.name}</p>
                      <p className="text-xs text-ink/40">{s.email}</p>
                    </td>
                    <td className="px-5 py-4">
                      <Link href={`/advisor/cohorts/${s.cohortId}`} className="text-ink/70 hover:text-berry-burst hover:underline">
                        {s.cohortName}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-ink/60">{s.major}</td>
                    <td className="px-5 py-4 text-ink/60">{s.gradYear}</td>
                    <td className="px-5 py-4 text-ink/70">
                      {STAGE_LABEL[s.currentStage]}
                      {s.currentStage !== "complete" && (
                        <span className="ml-1 text-xs text-ink/40">({s.overallPct}% overall)</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {badges.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {badges.map((b) => (
                            <span key={b} className="rounded-full bg-ink/6 px-2 py-0.5 text-[10px] font-semibold text-ink/55">
                              {b}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-xs text-ink/30">None</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <p className="px-5 py-8 text-center text-sm text-ink/45">No students match these filters.</p>
        )}
        {filtered.length > 200 && (
          <p className="px-5 pb-4 pt-3 text-xs text-ink/40">Showing the first 200 of {filtered.length} matching students.</p>
        )}
      </div>

      {selected.size > 0 && (
        <div className="sticky bottom-4 z-10 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/10 bg-ink px-5 py-4 text-paper shadow-xl">
          <span className="text-sm font-semibold">{selected.size} selected</span>
          <input
            value={cohortName}
            onChange={(e) => setCohortName(e.target.value)}
            placeholder="Name this group, e.g. Fall career fair attendees"
            className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-paper placeholder:text-paper/40 outline-none focus:border-white/30"
          />
          <button
            type="button"
            onClick={saveSelection}
            disabled={!cohortName.trim()}
            className="shrink-0 rounded-xl bg-paper px-4 py-2 text-sm font-semibold text-ink transition-opacity disabled:opacity-40"
          >
            Save as custom cohort
          </button>
          <button
            type="button"
            onClick={() => setSelected(new Set())}
            className="shrink-0 text-xs font-medium text-paper/50 hover:text-paper/80"
          >
            Clear
          </button>
        </div>
      )}

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">At-risk population overlay</h2>
        <p className="mb-5 text-xs text-ink/45">
          Stall rate within each priority population, against the {overlay.baselineStalledPct}% institution-wide
          baseline. A gap here is an equity signal, not just an engagement one.
        </p>
        <div className="space-y-3">
          {overlay.rows.map((row) => (
            <div key={row.key}>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-ink/70">
                  {row.label} <span className="text-xs text-ink/40">({row.populationCount} students)</span>
                </span>
                <span className="text-sm font-bold tabular-nums text-ink">
                  {row.stalledPct}%
                  <span className="ml-1 text-xs font-normal text-ink/40">
                    {row.stalledPct > overlay.baselineStalledPct ? "above" : row.stalledPct < overlay.baselineStalledPct ? "below" : "at"} baseline
                  </span>
                </span>
              </div>
              <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-ink/6">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.max(row.stalledPct, row.stalledPct > 0 ? 2 : 0)}%`,
                    background: row.stalledPct > overlay.baselineStalledPct ? "#c92f3f" : "var(--berry-burst)",
                  }}
                />
                <div
                  className="absolute top-0 h-full w-px bg-ink/40"
                  style={{ left: `${overlay.baselineStalledPct}%` }}
                  title={`Baseline: ${overlay.baselineStalledPct}%`}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink/40">
          The vertical mark on each bar is the institution-wide baseline stall rate.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Custom cohorts</h2>
        <p className="mb-5 text-xs text-ink/45">
          Ad hoc groups you&apos;ve built from the filtered list above, separate from official
          institutional cohorts.
        </p>
        {customCohorts.length === 0 ? (
          <p className="text-sm text-ink/45">
            None yet. Select students in the table above and save them as a group.
          </p>
        ) : (
          <div className="space-y-3">
            {customCohorts.map((c) => {
              const members = tagged.filter((s) => c.studentKeys.includes(studentKey(s)));
              const isExpanded = expandedCustom === c.id;
              return (
                <div key={c.id} className="rounded-2xl border border-ink/8 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setExpandedCustom(isExpanded ? null : c.id)}
                      className="text-left"
                    >
                      <p className="font-semibold text-ink">{c.name}</p>
                      <p className="text-xs text-ink/45">
                        {c.studentKeys.length} student{c.studentKeys.length === 1 ? "" : "s"} · created {c.createdAt}
                      </p>
                    </button>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setExpandedCustom(isExpanded ? null : c.id)}
                        className="text-xs font-semibold text-berry-burst hover:underline"
                      >
                        {isExpanded ? "Hide" : "View"}
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteCustomCohort(c.id)}
                        className="text-xs font-medium text-[#c92f3f]/70 hover:text-[#c92f3f]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  {isExpanded && (
                    <ul className="mt-3 space-y-1.5 border-t border-ink/8 pt-3">
                      {members.map((m) => (
                        <li key={studentKey(m)} className="flex items-center justify-between text-sm">
                          <span className="text-ink/75">{m.name}</span>
                          <span className="text-xs text-ink/40">{STAGE_LABEL[m.currentStage]} · {m.overallPct}%</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
        {label}
      </label>
      {children}
    </div>
  );
}

function TagToggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors"
      style={
        active
          ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 12%, white)" }
          : { borderColor: "rgba(11,4,16,0.12)", color: "rgba(11,4,16,0.55)" }
      }
    >
      {label}
    </button>
  );
}
