"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CandidatePortfolio } from "@/lib/sponsorData";
import { loadEmployer, MOCK_EMPLOYER } from "@/lib/employerStore";
import { addEmployerFeedback, feedbackForCandidate, useEmployerFeedback, HIRE_OUTCOME_LABEL, type HireOutcome } from "@/lib/employerFeedbackStore";
import { roleFeedbackForCandidate, useRoleFeedback } from "@/lib/roleFeedbackStore";
import { recordCandidateView } from "@/lib/viewStore";
import { CredentialDetail } from "@/components/employer/CredentialDetail";
import { OutreachPanel } from "@/components/employer/OutreachPanel";
import { SchedulingPanel } from "@/components/employer/SchedulingPanel";
import { PIPELINE_STAGES, usePipeline, addToPipeline, setPipelineStage, removeFromPipeline, type PipelineStage } from "@/lib/pipelineStore";

const OUTCOME_OPTIONS: HireOutcome[] = ["hired", "still-deciding", "not-selected"];

export function PortfolioDetail({ candidate }: { candidate: CandidatePortfolio }) {
  useEffect(() => {
    recordCandidateView(candidate.id);
  }, [candidate.id]);

  const allFeedback = useEmployerFeedback();
  const existingFeedback = feedbackForCandidate(allFeedback, candidate.id);
  const allRoleFeedback = useRoleFeedback();
  const existingRoleFeedback = roleFeedbackForCandidate(allRoleFeedback, candidate.id);
  const [hireQuality, setHireQuality] = useState(0);
  const [interviewPerformance, setInterviewPerformance] = useState(0);
  const [comment, setComment] = useState("");
  const [outcome, setOutcome] = useState<HireOutcome | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const pipeline = usePipeline();
  const pipelineEntry = pipeline[candidate.id];

  function submitFeedback() {
    if (hireQuality === 0 || interviewPerformance === 0) return;
    const employer = loadEmployer();
    addEmployerFeedback({
      candidateId: candidate.id,
      candidateName: candidate.name,
      company: employer?.company || MOCK_EMPLOYER.company,
      hireQuality,
      interviewPerformance,
      comment: comment.trim(),
      outcome: outcome ?? undefined,
    });
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <Link href="/employer/portfolios" className="text-sm font-medium text-ink/45 hover:text-ink">
        ← Candidate portfolios
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="flex items-start gap-5">
          <span
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-display text-2xl font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--berry-burst))" }}
          >
            {candidate.name.charAt(0)}
          </span>
          <div>
            <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {candidate.name}
            </h1>
            <p className="mt-1 text-[15px] text-ink/60">{candidate.headline}</p>
            <p className="mt-1 text-sm text-ink/40">{candidate.school}</p>
          </div>
        </div>

        {pipelineEntry ? (
          <div className="flex items-center gap-2">
            <select
              value={pipelineEntry.stage}
              onChange={(e) => setPipelineStage(candidate.id, e.target.value as PipelineStage)}
              className="rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm font-medium text-ink outline-none focus:border-ink/25"
            >
              {PIPELINE_STAGES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => removeFromPipeline(candidate.id)}
              className="text-xs font-medium text-ink/40 underline decoration-ink/20 underline-offset-4 hover:text-ink"
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => addToPipeline(candidate.id)}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
          >
            + Add to pipeline
          </button>
        )}
      </div>

      <CredentialDetail candidate={candidate} />

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Top values
        </p>
        <div className="flex flex-wrap gap-2">
          {candidate.topValues.map((v) => (
            <span
              key={v}
              className="rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm text-ink/70"
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          STAR story
        </p>
        <dl className="space-y-4">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Situation</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.situation}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Task</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.task}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Action</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.action}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">Result</dt>
            <dd className="mt-1 text-[15px] leading-relaxed text-ink/75">{candidate.starStory.result}</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Stated goal
        </p>
        <p className="text-[15px] leading-relaxed text-ink/75">{candidate.goalHeadline}</p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Rate this candidate
        </p>
        <p className="mb-4 text-sm text-ink/55">
          Optional, and shared back with {candidate.school}&apos;s career center so they can see
          whether FIRSTS actually predicts hire readiness.
        </p>

        {submitted ? (
          <p className="text-sm font-medium text-ink/70">Thanks, your feedback has been recorded.</p>
        ) : (
          <div className="space-y-4">
            <StarField label="Hire quality" value={hireQuality} onChange={setHireQuality} />
            <StarField label="Interview performance" value={interviewPerformance} onChange={setInterviewPerformance} />
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink/40">
                Outcome (optional)
              </p>
              <div className="flex flex-wrap gap-2">
                {OUTCOME_OPTIONS.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => setOutcome((prev) => (prev === o ? null : o))}
                    className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                    style={
                      outcome === o
                        ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 14%, white)" }
                        : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                    }
                  >
                    {HIRE_OUTCOME_LABEL[o]}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Anything specific about how they came across?"
              rows={2}
              className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
            />
            <button
              type="button"
              onClick={submitFeedback}
              disabled={hireQuality === 0 || interviewPerformance === 0}
              className="rounded-2xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
            >
              Submit feedback
            </button>
          </div>
        )}

        {existingFeedback.length > 0 && (
          <div className="mt-6 space-y-2.5 border-t border-ink/8 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              Past feedback ({existingFeedback.length})
            </p>
            {existingFeedback.map((f) => (
              <div key={f.id} className="rounded-xl bg-paper-dim p-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink/50">
                  <span>{f.company} · {f.createdAt}</span>
                  <span>{f.hireQuality}/5 hire quality · {f.interviewPerformance}/5 interview</span>
                </div>
                {f.outcome && (
                  <p className="mt-1 text-xs font-semibold" style={{ color: "var(--berry-burst)" }}>
                    {HIRE_OUTCOME_LABEL[f.outcome]}
                  </p>
                )}
                {f.comment && <p className="mt-1.5 text-sm text-ink/70">{f.comment}</p>}
              </div>
            ))}
          </div>
        )}
      </div>

      {existingRoleFeedback.length > 0 && (
        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Role-fit feedback received
          </p>
          <p className="mb-4 text-sm text-ink/55">
            Structured feedback from role-fit reviews, shared as a growth signal rather than a
            silent pass.
          </p>
          <div className="space-y-3">
            {existingRoleFeedback.map((f) => (
              <div key={f.id} className="rounded-xl bg-paper-dim p-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink/50">
                  <span>{f.company} · {f.roleTitle}</span>
                  <span>{f.createdAt}</span>
                </div>
                {f.strengths.length > 0 && (
                  <p className="mt-1.5 text-sm text-ink/70">
                    <span className="font-semibold">Strong on:</span> {f.strengths.join(", ")}
                  </p>
                )}
                {f.gaps.length > 0 && (
                  <p className="mt-1 text-sm text-ink/70">
                    <span className="font-semibold">Room to grow:</span> {f.gaps.join(", ")}
                  </p>
                )}
                {f.note && <p className="mt-1.5 text-sm text-ink/70">{f.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      <OutreachPanel candidateId={candidate.id} candidateName={candidate.name} openToOutreach={candidate.openToOutreach} />

      <SchedulingPanel candidateId={candidate.id} candidateName={candidate.name} />

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          This is a summary {candidate.name.split(" ")[0]} chose to share with
          you directly. Treat it as a conversation starter alongside their
          resume and your own interview process, not a replacement for
          either.
        </p>
      </div>
    </div>
  );
}

function StarField({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-label={`${n} of 5`}
            className="flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold transition-colors"
            style={
              n <= value
                ? { borderColor: "var(--berry-burst)", background: "var(--berry-burst)", color: "white" }
                : { borderColor: "rgba(11,4,16,0.15)", color: "rgba(11,4,16,0.35)" }
            }
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
