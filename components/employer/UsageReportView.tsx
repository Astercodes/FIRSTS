"use client";

import { useViewedCandidates } from "@/lib/viewStore";
import { usePipeline, PIPELINE_STAGES, type PipelineStage } from "@/lib/pipelineStore";
import { useOutreachMessages } from "@/lib/employerOutreachStore";
import { useInterviewSlots } from "@/lib/schedulingStore";
import { useEmployerFeedback } from "@/lib/employerFeedbackStore";
import { hireOutcomeSummary } from "@/lib/placementData";
import { useRecruitingEvents, useEventRsvps, attendeeCount } from "@/lib/eventsStore";

export function UsageReportView() {
  const viewed = useViewedCandidates();
  const pipeline = usePipeline();
  const messages = useOutreachMessages();
  const slots = useInterviewSlots();
  const feedback = useEmployerFeedback();
  const events = useRecruitingEvents();
  const rsvps = useEventRsvps();

  const viewedCount = Object.keys(viewed).length;
  const savedCount = Object.keys(pipeline).length;
  const stageCount = (stage: PipelineStage) => Object.values(pipeline).filter((e) => e.stage === stage).length;
  const messagesSent = messages.filter((m) => m.from === "employer").length;
  const confirmedInterviews = slots.filter((s) => s.confirmed).length;
  const hireSummary = hireOutcomeSummary(feedback);
  const totalRsvps = events.reduce((sum, e) => sum + attendeeCount(e, rsvps), 0);

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          What FIRSTS is doing for you
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Usage & ROI
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/50">
          Real activity from this account: what got viewed, contacted, scheduled, and hired,
          the number that actually justifies the subscription.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Candidates viewed" value={String(viewedCount)} color="var(--pink-grapefruit)" />
        <StatCard label="Saved to pipeline" value={String(savedCount)} color="var(--berry-burst)" />
        <StatCard label="Messages sent" value={String(messagesSent)} color="var(--sunshine-orange)" />
        <StatCard label="Interviews confirmed" value={String(confirmedInterviews)} color="var(--juicy-plum)" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">Pipeline breakdown</h2>
          <p className="mb-5 text-xs text-ink/45">Where your saved candidates currently sit</p>
          <div className="space-y-3">
            {PIPELINE_STAGES.map((stage) => {
              const count = stageCount(stage.id);
              const pct = savedCount > 0 ? (count / savedCount) * 100 : 0;
              return (
                <div key={stage.id}>
                  <div className="mb-1 flex items-baseline justify-between text-sm">
                    <span className="font-medium text-ink/70">{stage.label}</span>
                    <span className="font-bold text-ink">{count}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-ink/6">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${Math.max(pct, count > 0 ? 4 : 0)}%`, background: "var(--pink-grapefruit)" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white p-7">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">Outcomes this cycle</h2>
          <p className="mb-5 text-xs text-ink/45">Reported back from your own feedback and events</p>
          <dl className="space-y-3 text-sm">
            <div className="flex items-center justify-between border-b border-ink/8 pb-3">
              <dt className="text-ink/60">Hires reported</dt>
              <dd className="font-bold text-ink">
                {hireSummary.reported > 0 ? `${hireSummary.hired} of ${hireSummary.reported}` : "None yet"}
              </dd>
            </div>
            <div className="flex items-center justify-between border-b border-ink/8 pb-3">
              <dt className="text-ink/60">Events hosted</dt>
              <dd className="font-bold text-ink">{events.length}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-ink/60">Total event RSVPs</dt>
              <dd className="font-bold text-ink">{totalRsvps}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          This reflects activity on this account only, viewed locally rather than pulled from a
          shared backend, so it won&apos;t match a teammate&apos;s browser until accounts are
          unified behind real sign-in.
        </p>
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
