"use client";

import Link from "next/link";
import { CANDIDATE_PORTFOLIOS } from "@/lib/sponsorData";
import {
  PIPELINE_STAGES,
  usePipeline,
  setPipelineStage,
  setPipelineNote,
  removeFromPipeline,
  type PipelineStage,
} from "@/lib/pipelineStore";

const ACCENT = "var(--pink-grapefruit)";

export function PipelineView() {
  const entries = usePipeline();
  const inPipeline = CANDIDATE_PORTFOLIOS.filter((c) => entries[c.id]);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your working list
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Pipeline
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/50">
          Candidates you&apos;ve saved from a portfolio or Talent Pool, tracked by stage so you can
          come back to where you left off instead of re-running the same search.
        </p>
      </div>

      {inPipeline.length === 0 ? (
        <div className="rounded-3xl border border-ink/10 bg-white p-10 text-center">
          <p className="text-sm text-ink/50">
            Nothing saved yet. Open a candidate&apos;s portfolio and add them to your pipeline to get
            started.
          </p>
          <Link
            href="/employer/portfolios"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-berry-burst"
          >
            Browse candidate portfolios →
          </Link>
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-4">
          {PIPELINE_STAGES.map((stage) => {
            const candidatesAtStage = inPipeline.filter((c) => entries[c.id].stage === stage.id);
            return (
              <div key={stage.id} className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">{stage.label}</p>
                  <span className="text-xs font-semibold text-ink/35">{candidatesAtStage.length}</span>
                </div>
                <div className="space-y-3">
                  {candidatesAtStage.map((c) => (
                    <PipelineCard key={c.id} candidateId={c.id} name={c.name} school={c.school} note={entries[c.id].note} stage={entries[c.id].stage} />
                  ))}
                  {candidatesAtStage.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-ink/10 p-4 text-center text-xs text-ink/30">
                      No one here yet
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function PipelineCard({
  candidateId,
  name,
  school,
  note,
  stage,
}: {
  candidateId: string;
  name: string;
  school: string;
  note: string;
  stage: PipelineStage;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <Link href={`/employer/portfolios/${candidateId}`} className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink hover:underline">{name}</p>
          <p className="truncate text-xs text-ink/45">{school}</p>
        </Link>
        <button
          type="button"
          onClick={() => removeFromPipeline(candidateId)}
          aria-label={`Remove ${name} from pipeline`}
          className="shrink-0 text-ink/30 hover:text-ink/60"
        >
          ×
        </button>
      </div>

      <select
        value={stage}
        onChange={(e) => setPipelineStage(candidateId, e.target.value as PipelineStage)}
        className="mt-3 w-full rounded-xl border border-ink/10 bg-paper-dim px-2.5 py-1.5 text-xs font-medium text-ink outline-none focus:border-ink/25"
        style={{ borderColor: `color-mix(in oklab, ${ACCENT} 30%, rgba(11,4,16,0.1))` }}
      >
        {PIPELINE_STAGES.map((s) => (
          <option key={s.id} value={s.id}>
            {s.label}
          </option>
        ))}
      </select>

      <textarea
        defaultValue={note}
        onBlur={(e) => setPipelineNote(candidateId, e.target.value)}
        placeholder="Private note to yourself…"
        rows={2}
        className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-2.5 py-1.5 text-xs text-ink outline-none focus:border-ink/25"
      />
    </div>
  );
}
