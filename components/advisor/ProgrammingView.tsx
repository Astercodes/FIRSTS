"use client";

import { useEffect, useMemo, useState } from "react";
import { cohortsForInstitution, getCohort } from "@/lib/cohortData";
import { CATEGORY_META } from "@/lib/dashboardData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import {
  contentGapAnalysis,
  categoryPctForCohorts,
  projectedWorkshopImpact,
  WORKSHOP_TARGET_CATEGORIES,
} from "@/lib/programming";
import { createWorkshop, deleteWorkshop, useWorkshops } from "@/lib/workshopStore";

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function ProgrammingView() {
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
  const workshops = useWorkshops();
  const contentGaps = useMemo(() => contentGapAnalysis(10), []);

  const [title, setTitle] = useState("");
  const [targetCategory, setTargetCategory] = useState<string>(WORKSHOP_TARGET_CATEGORIES[0]);
  const [date, setDate] = useState(todayIso());
  const [selectedCohorts, setSelectedCohorts] = useState<Set<string>>(new Set());

  function toggleCohort(id: string) {
    setSelectedCohorts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function submitWorkshop() {
    if (!title.trim() || selectedCohorts.size === 0) return;
    createWorkshop(title.trim(), targetCategory, date, Array.from(selectedCohorts));
    setTitle("");
    setSelectedCohorts(new Set());
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          {institution}
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Programming
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Log the workshops you run and see the projected lift, and catch specific FIRSTS that
          are quietly underperforming institution-wide.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-4 font-display text-lg font-semibold text-ink">Log a workshop</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Resume workshop"
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Target category
            </label>
            <select
              value={targetCategory}
              onChange={(e) => setTargetCategory(e.target.value)}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            >
              {WORKSHOP_TARGET_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{CATEGORY_META[cat].label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Cohorts attending
            </label>
            <div className="flex max-h-24 flex-wrap gap-1.5 overflow-y-auto">
              {cohorts.map((c) => {
                const active = selectedCohorts.has(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => toggleCohort(c.id)}
                    className="rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors"
                    style={
                      active
                        ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 12%, white)" }
                        : { borderColor: "rgba(11,4,16,0.12)", color: "rgba(11,4,16,0.55)" }
                    }
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={submitWorkshop}
          disabled={!title.trim() || selectedCohorts.size === 0}
          className="mt-5 rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Log workshop
        </button>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Workshop impact</h2>
        <p className="mb-5 text-xs text-ink/45">
          There&apos;s no dated, per-worksheet completion log behind this app, so the &ldquo;after&rdquo; figure
          is a modeled projected lift, not a measured before/after, scaled down for categories
          already close to complete.
        </p>
        {workshops.length === 0 ? (
          <p className="text-sm text-ink/45">No workshops logged yet.</p>
        ) : (
          <div className="space-y-4">
            {workshops.map((w) => {
              const attendingCohorts = w.cohortIds.map((id) => getCohort(id)).filter((c): c is NonNullable<typeof c> => !!c);
              const baselinePct = categoryPctForCohorts(attendingCohorts, w.targetCategory);
              const impact = projectedWorkshopImpact(w.id, baselinePct);
              return (
                <div key={w.id} className="rounded-2xl border border-ink/8 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-ink">{w.title}</p>
                      <p className="text-xs text-ink/45">
                        {w.date} · {CATEGORY_META[w.targetCategory as keyof typeof CATEGORY_META].label} ·{" "}
                        {attendingCohorts.map((c) => c.name).join(", ")}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteWorkshop(w.id)}
                      className="text-xs font-medium text-[#c92f3f]/70 hover:text-[#c92f3f]"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1">
                      <div className="mb-1 flex items-baseline justify-between text-xs text-ink/55">
                        <span>Before</span>
                        <span className="font-semibold text-ink">{impact.baselinePct}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-ink/6">
                        <div className="h-full rounded-full" style={{ width: `${impact.baselinePct}%`, background: "color-mix(in oklab, var(--berry-burst) 35%, var(--paper-dim))" }} />
                      </div>
                    </div>
                    <span className="rounded-full bg-[color-mix(in_oklab,#1a8f3c_12%,white)] px-2.5 py-1 text-xs font-bold text-[#1a8f3c]">
                      +{impact.projectedLiftPts}pt
                    </span>
                    <div className="flex-1">
                      <div className="mb-1 flex items-baseline justify-between text-xs text-ink/55">
                        <span>Projected after 2 weeks</span>
                        <span className="font-semibold text-ink">{impact.projectedAfterPct}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-ink/6">
                        <div className="h-full rounded-full" style={{ width: `${impact.projectedAfterPct}%`, background: "var(--berry-burst)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-2">
        <div className="px-5 pt-5">
          <h2 className="font-display text-lg font-semibold text-ink">Content gap detection</h2>
          <p className="mt-1 text-xs text-ink/45">
            The 10 FIRSTS with the lowest modeled completion rate institution-wide, across every
            stage. A companion workshop or a look at the worksheet itself are the two usual fixes.
          </p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
                <th className="px-5 py-4">FIRST</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Completion rate</th>
                <th className="px-5 py-4">Abandonment</th>
                <th className="px-5 py-4">Likely fix</th>
              </tr>
            </thead>
            <tbody>
              {contentGaps.map((row) => (
                <tr key={row.id} className="border-t border-ink/8">
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{row.code} {row.title}</p>
                  </td>
                  <td className="px-5 py-4 text-ink/60">{row.categoryLabel}</td>
                  <td className="px-5 py-4 font-semibold text-[#c92f3f]">{row.completionRatePct}%</td>
                  <td className="px-5 py-4 text-ink/60">{row.abandonmentRatePct}%</td>
                  <td className="px-5 py-4 text-xs text-ink/55">
                    {row.abandonmentRatePct > 35 ? "Worksheet may need clarity work" : "Consider a companion workshop"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
