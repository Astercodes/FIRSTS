"use client";

import { useEffect, useMemo, useState } from "react";
import { cohortsForInstitution } from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import { useWorkshops } from "@/lib/workshopStore";
import {
  executiveSummary,
  yearOverYearTrend,
  naceCompetencyBreakdown,
  REPORT_GENERATED_ON,
} from "@/lib/reporting";

function StatTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-ink/8 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
      <p className="mt-1.5 font-display text-2xl font-semibold text-ink">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-ink/45">{sub}</p>}
    </div>
  );
}

export function ReportingView() {
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

  const summary = useMemo(() => executiveSummary(cohorts, workshops), [cohorts, workshops]);
  const yoy = useMemo(
    () => yearOverYearTrend(institution, summary.avgCompletionPct, summary.offerRatePct),
    [institution, summary.avgCompletionPct, summary.offerRatePct]
  );
  const nace = useMemo(() => naceCompetencyBreakdown(cohorts.flatMap((c) => c.students)), [cohorts]);

  const maxYoyCompletion = Math.max(...yoy.map((y) => y.avgCompletionPct), 1);
  const maxYoyOffer = Math.max(...yoy.map((y) => y.offerRatePct), 1);

  return (
    <div className="report-page mx-auto max-w-5xl space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4 print:hidden">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">{institution}</p>
          <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">Reporting</h1>
          <p className="mt-2 max-w-xl text-sm text-ink/55">
            An executive summary you can hand upward, a year-over-year trend, and a NACE competency
            breakdown for accreditation conversations. Export it as a PDF straight from the browser.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
        >
          Export as PDF
        </button>
      </div>

      <div className="hidden print:block">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">{institution}</p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-ink">FIRSTS Career Readiness Report</h1>
        <p className="mt-1 text-xs text-ink/45">Generated {REPORT_GENERATED_ON}</p>
      </div>

      <section className="rounded-3xl border border-ink/10 bg-white p-7 print:break-inside-avoid print:rounded-none print:border-0 print:p-0">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Executive summary</h2>
        <p className="mb-5 text-xs text-ink/45">
          Every figure here is pulled from the same live data behind Segmentation, Workload, Outcomes,
          and Programming, not recomputed from scratch.
        </p>
        <p className="mb-5 rounded-2xl bg-paper-dim px-4 py-3 text-sm text-ink/70 print:bg-transparent print:px-0">
          Across <strong className="text-ink">{summary.totalStudents}</strong> students at {institution},
          completion averages <strong className="text-ink">{summary.avgCompletionPct}%</strong>.{" "}
          <strong className="text-ink">{summary.atRiskCount}</strong> students ({summary.atRiskPct}%) are
          currently flagged at risk. Students who finish Stage Three report offers at a rate{" "}
          <strong className="text-ink">{summary.placementGapPts} points higher</strong> than those who
          have not, and the overall reported offer rate stands at{" "}
          <strong className="text-ink">{summary.offerRatePct}%</strong>. {summary.workshopsLoggedCount}{" "}
          workshop{summary.workshopsLoggedCount === 1 ? "" : "s"} have been logged this term, and{" "}
          {summary.contentGapsFlaggedCount} FIRSTS are flagged institution-wide with completion under 50%.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <StatTile label="Total students" value={String(summary.totalStudents)} />
          <StatTile label="Avg completion" value={`${summary.avgCompletionPct}%`} />
          <StatTile label="At risk" value={`${summary.atRiskCount}`} sub={`${summary.atRiskPct}% of cohort`} />
          <StatTile label="Offer rate" value={`${summary.offerRatePct}%`} />
          <StatTile
            label="Avg starting salary"
            value={summary.avgStartingSalary ? `$${summary.avgStartingSalary.toLocaleString()}` : "N/A"}
          />
          <StatTile label="Workshops logged" value={String(summary.workshopsLoggedCount)} />
        </div>
        {summary.topWeakCategory && (
          <p className="mt-4 text-xs text-ink/50">
            Weakest category cohort-wide: {summary.topWeakCategory.label} ({summary.topWeakCategory.pct}%
            average completion).
          </p>
        )}
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-7 print:break-inside-avoid print:rounded-none print:border-0 print:p-0">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Year-over-year trend</h2>
        <p className="mb-5 text-xs text-ink/45">
          This app keeps this moment&apos;s data, not a historical log. The two prior years below are
          modeled backward from this year&apos;s real numbers, deterministic per institution, to show a
          plausible trend line, not a measured record.
        </p>
        <div className="space-y-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">Avg completion</p>
            <div className="space-y-2">
              {yoy.map((y) => (
                <div key={`completion-${y.year}`} className="flex items-center gap-3">
                  <span className="w-14 shrink-0 text-xs font-medium text-ink/55">
                    {y.year}
                    {y.modeled && <span className="text-ink/30">*</span>}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/6">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(y.avgCompletionPct / maxYoyCompletion) * 100}%`,
                        background: y.modeled ? "color-mix(in oklab, var(--berry-burst) 45%, white)" : "var(--berry-burst)",
                      }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-xs font-semibold text-ink">
                    {y.avgCompletionPct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">Offer rate</p>
            <div className="space-y-2">
              {yoy.map((y) => (
                <div key={`offer-${y.year}`} className="flex items-center gap-3">
                  <span className="w-14 shrink-0 text-xs font-medium text-ink/55">
                    {y.year}
                    {y.modeled && <span className="text-ink/30">*</span>}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink/6">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(y.offerRatePct / maxYoyOffer) * 100}%`,
                        background: y.modeled ? "color-mix(in oklab, #1a8f3c 45%, white)" : "#1a8f3c",
                      }}
                    />
                  </div>
                  <span className="w-10 shrink-0 text-right text-xs font-semibold text-ink">
                    {y.offerRatePct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-[11px] text-ink/40">* Modeled, not measured.</p>
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-2 print:break-inside-avoid print:rounded-none print:border-0 print:p-0">
        <div className="px-5 pt-5">
          <h2 className="font-display text-lg font-semibold text-ink">NACE competency breakdown</h2>
          <p className="mt-1 text-xs text-ink/45">
            FIRSTS categories mapped to NACE&apos;s 8 career readiness competencies. This is our own
            categorization for accreditation conversations, not an official NACE crosswalk. Competencies
            with no mapped FIRSTS category are shown as uncovered rather than assigned a number.
          </p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
                <th className="px-5 py-4">Competency</th>
                <th className="px-5 py-4">Mapped FIRSTS categories</th>
                <th className="px-5 py-4">Avg completion</th>
              </tr>
            </thead>
            <tbody>
              {nace.map((row) => (
                <tr key={row.competency} className="border-t border-ink/8">
                  <td className="px-5 py-4 font-medium text-ink">{row.competency}</td>
                  <td className="px-5 py-4 text-xs text-ink/55">
                    {row.categoryLabels.length ? row.categoryLabels.join(", ") : "No FIRSTS category mapped yet"}
                  </td>
                  <td className="px-5 py-4 font-semibold text-ink">
                    {row.avgCompletionPct === null ? (
                      <span className="text-ink/30">Not covered</span>
                    ) : (
                      `${row.avgCompletionPct}%`
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-2 print:break-inside-avoid print:rounded-none print:border-0 print:p-0">
        <div className="px-5 pt-5">
          <h2 className="font-display text-lg font-semibold text-ink">Cohort breakdown</h2>
          <p className="mt-1 text-xs text-ink/45">An appendix table, useful for a compliance export.</p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
                <th className="px-5 py-4">Cohort</th>
                <th className="px-5 py-4">Students</th>
                <th className="px-5 py-4">Avg completion</th>
                <th className="px-5 py-4">At risk</th>
              </tr>
            </thead>
            <tbody>
              {summary.cohortBreakdown.map((row) => (
                <tr key={row.id} className="border-t border-ink/8">
                  <td className="px-5 py-4 font-medium text-ink">{row.name}</td>
                  <td className="px-5 py-4 text-ink/60">{row.studentCount}</td>
                  <td className="px-5 py-4 text-ink/60">{row.avgCompletionPct}%</td>
                  <td className="px-5 py-4 text-ink/60">{row.atRiskCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
