"use client";

import { useEffect, useMemo, useState } from "react";
import { cohortsForInstitution } from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import { taggedStudents } from "@/lib/segmentation";
import {
  placementCorrelation,
  timeToPlacementTrend,
  overallOfferRate,
  avgStartingSalary,
  employerFeedbackSummary,
} from "@/lib/placementData";
import { useEmployerFeedback } from "@/lib/employerFeedbackStore";
import { TimeToPlacementChart } from "@/components/charts/TimeToPlacementChart";

const COLLAPSED_FEEDBACK = 5;

export function OutcomesView() {
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

  const correlation = useMemo(() => placementCorrelation(tagged), [tagged]);
  const trend = useMemo(() => timeToPlacementTrend(tagged), [tagged]);
  const offerRate = useMemo(() => overallOfferRate(tagged), [tagged]);
  const salary = useMemo(() => avgStartingSalary(tagged), [tagged]);

  const feedback = useEmployerFeedback();
  const feedbackSummary = useMemo(() => employerFeedbackSummary(feedback), [feedback]);
  const [showAllFeedback, setShowAllFeedback] = useState(false);
  const visibleFeedback = showAllFeedback ? feedback : feedback.slice(0, COLLAPSED_FEEDBACK);

  const maxRate = Math.max(correlation.completed.offerRatePct, correlation.notCompleted.offerRatePct, 1);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          {institution}
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Outcomes
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Real placement signal, not just FIRSTS activity: offer rates, time to placement, and
          what employers report back.
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--tropical-mango)]/30 bg-[color-mix(in_oklab,var(--tropical-mango)_10%,white)] p-5">
        <p className="text-sm leading-relaxed text-ink/70">
          This institution hasn&apos;t connected a real outcomes feed (job offers, internships,
          starting salaries). The numbers below are modeled from each student&apos;s actual Stage
          Three completion and grad year, so the correlation direction is honest, but the exact
          figures aren&apos;t real placement records. Connect an outcomes feed to replace this with
          reported data.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Modeled offer rate" value={`${offerRate}%`} color="var(--berry-burst)" />
        <StatCard
          label="Avg starting salary (full-time)"
          value={salary ? `$${salary.toLocaleString()}` : "No data"}
          color="var(--juicy-plum)"
        />
        <StatCard
          label="Employer hire-quality rating"
          value={feedbackSummary.count > 0 ? `${feedbackSummary.avgHireQuality}/5` : "No ratings yet"}
          color="#1a8f3c"
        />
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-semibold text-ink">Placement correlation</h2>
          <span className="rounded-full bg-[color-mix(in_oklab,#1a8f3c_12%,white)] px-3 py-1 text-xs font-semibold text-[#1a8f3c]">
            {correlation.gap >= 0 ? "+" : ""}
            {correlation.gap}pt offer-rate gap
          </span>
        </div>
        <p className="mb-5 text-xs text-ink/45">
          Modeled offer rate for students who&apos;ve completed Stage Three (Job Application &amp;
          Interview Skills) vs those who haven&apos;t. A stronger claim than an advising-session
          correlation, since it&apos;s tied to a real-world outcome.
        </p>
        <div className="space-y-3">
          <CorrelationBar label={correlation.completed.label} pct={correlation.completed.offerRatePct} count={correlation.completed.count} max={maxRate} tone="strong" />
          <CorrelationBar label={correlation.notCompleted.label} pct={correlation.notCompleted.offerRatePct} count={correlation.notCompleted.count} max={maxRate} tone="light" />
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Time to placement</h2>
        <p className="mb-5 text-xs text-ink/45">
          Average days from Stage Three to a reported offer, by graduating class.
        </p>
        <TimeToPlacementChart points={trend} />
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-lg font-semibold text-ink">Employer feedback</h2>
          {feedbackSummary.count > 0 && (
            <span className="text-xs font-semibold text-ink/45">
              {feedbackSummary.avgHireQuality}/5 hire quality · {feedbackSummary.avgInterviewPerformance}/5 interview performance ·{" "}
              {feedbackSummary.count} rating{feedbackSummary.count === 1 ? "" : "s"}
            </span>
          )}
        </div>
        <p className="mb-5 text-xs text-ink/45">
          Rolls up whatever employers report back on FIRSTS-credentialed candidates from the
          employer portfolio review, closing the loop on whether the framework predicts
          readiness.
        </p>

        {feedback.length === 0 ? (
          <p className="text-sm text-ink/45">No employer feedback yet.</p>
        ) : (
          <div className="space-y-3">
            {visibleFeedback.map((f) => (
              <div key={f.id} className="rounded-2xl border border-ink/8 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">{f.candidateName}</p>
                  <p className="text-xs text-ink/45">{f.company} · {f.createdAt}</p>
                </div>
                <div className="mt-1.5 flex gap-4 text-xs text-ink/55">
                  <span>Hire quality: <strong className="text-ink">{f.hireQuality}/5</strong></span>
                  <span>Interview performance: <strong className="text-ink">{f.interviewPerformance}/5</strong></span>
                </div>
                {f.comment && <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.comment}</p>}
              </div>
            ))}
          </div>
        )}

        {feedback.length > COLLAPSED_FEEDBACK && (
          <button
            type="button"
            onClick={() => setShowAllFeedback((v) => !v)}
            className="mt-3 text-xs font-semibold text-berry-burst hover:underline"
          >
            {showAllFeedback ? "Show less" : `See all ${feedback.length} →`}
          </button>
        )}
      </div>
    </div>
  );
}

function CorrelationBar({
  label,
  pct,
  count,
  max,
  tone,
}: {
  label: string;
  pct: number;
  count: number;
  max: number;
  tone: "light" | "strong";
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-ink/70">
          {label} <span className="text-xs text-ink/40">({count} students)</span>
        </span>
        <span className="text-sm font-bold tabular-nums text-ink">{pct}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/6">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.max((pct / max) * 100, pct > 0 ? 3 : 0)}%`,
            background: tone === "strong" ? "var(--berry-burst)" : "color-mix(in oklab, var(--berry-burst) 30%, var(--paper-dim))",
          }}
        />
      </div>
    </div>
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
