"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFacilitatorPortal, TIER_META, type FacilitatorTier } from "@/lib/facilitatorStore";
import { useFacilitatorTraining, computeEarnedTier } from "@/lib/facilitatorTrainingStore";
import {
  DEVELOPMENT_MODULES,
  useCompletedDevelopmentModules,
  toggleDevelopmentModule,
} from "@/lib/facilitatorDevelopmentStore";
import { requestLetter, useLetterRequests } from "@/lib/facilitatorLetterStore";
import { DRAFT_ITEMS, submitAdvisoryFeedback, useAdvisoryFeedback } from "@/lib/facilitatorAdvisoryStore";

const ACCENT = "var(--fuchsia-blast)";

export function RecognitionView() {
  const { application, profile } = useFacilitatorPortal();
  const training = useFacilitatorTraining();

  if (!application || !profile) return null;

  const tier = Math.max(profile.tier, computeEarnedTier(training)) as FacilitatorTier;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <p className="font-display text-lg font-semibold text-ink">Recognition & perks</p>
        <p className="mt-1 text-sm text-ink/50">
          What FIRSTS offers back for volunteering: credential, growth, belonging, and a voice in
          what gets built next.
        </p>
      </motion.div>

      <Card delay={0}>
        <CardTitle>Your badge, made visible</CardTitle>
        <p className="text-sm text-ink/60">
          Your facilitator badge and impact stats now show on your community profile, right
          alongside your student badges, if you&apos;re also a FIRSTS student.
        </p>
        <Link
          href="/dashboard/community"
          className="mt-3 inline-block text-sm font-semibold underline decoration-ink/20 underline-offset-2 hover:text-ink"
          style={{ color: ACCENT }}
        >
          View your community profile →
        </Link>
      </Card>

      <Card delay={0.03}>
        <CardTitle>Exportable certificate</CardTitle>
        <p className="text-sm text-ink/60">
          A printable, LinkedIn-postable certificate for your current tier, {TIER_META[tier].label}.
        </p>
        <Link
          href="/facilitator/certificate"
          className="mt-3 inline-block rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          View certificate
        </Link>
      </Card>

      <DevelopmentCard delay={0.06} />

      <LetterCard delay={0.09} />

      <Card delay={0.12}>
        <CardTitle>Community & belonging</CardTitle>
        <p className="text-sm text-ink/60">
          A dedicated space for facilitators to trade tips and celebrate wins, separate from the
          student feed.
        </p>
        <Link
          href="/facilitator/lounge"
          className="mt-3 inline-block rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          Open the facilitator lounge
        </Link>
      </Card>

      <Card delay={0.15}>
        <CardTitle>Early access</CardTitle>
        {tier >= 1 ? (
          <p className="text-sm text-ink/60">
            As a certified facilitator, you get early access to new stages and content before they
            go public, first look, first feedback.
          </p>
        ) : (
          <p className="text-sm text-ink/45">
            Unlocks once you earn your first certification.
          </p>
        )}
      </Card>

      <AdvisoryCard delay={0.18} tier={tier} />
    </div>
  );
}

function Card({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-ink/8 bg-white p-6"
    >
      {children}
    </motion.div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 font-display text-base font-semibold text-ink">{children}</p>;
}

function DevelopmentCard({ delay }: { delay: number }) {
  const completed = useCompletedDevelopmentModules();

  return (
    <Card delay={delay}>
      <CardTitle>Facilitator development</CardTitle>
      <p className="mb-3 text-sm text-ink/60">
        Optional growth content, doesn&apos;t affect certification, just for you.
      </p>
      <div className="space-y-2">
        {DEVELOPMENT_MODULES.map((m) => {
          const done = completed.includes(m.id);
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => toggleDevelopmentModule(m.id)}
              className="flex w-full items-start gap-3 rounded-2xl border border-ink/8 px-4 py-3 text-left transition-colors hover:bg-paper-dim"
            >
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px]"
                style={
                  done
                    ? { background: ACCENT, color: "white" }
                    : { background: "rgba(11,4,16,0.06)", color: "rgba(11,4,16,0.3)" }
                }
              >
                {done ? "✓" : ""}
              </span>
              <span>
                <span className={`block text-sm font-semibold ${done ? "text-ink" : "text-ink/75"}`}>
                  {m.title}
                </span>
                <span className="mt-0.5 block text-xs text-ink/45">{m.description}</span>
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}

function LetterCard({ delay }: { delay: number }) {
  const requests = useLetterRequests();
  const [context, setContext] = useState("");
  const [showForm, setShowForm] = useState(false);

  function handleSubmit() {
    if (!context.trim()) return;
    requestLetter(context.trim());
    setContext("");
    setShowForm(false);
  }

  return (
    <Card delay={delay}>
      <CardTitle>Letter of recommendation</CardTitle>
      <p className="mb-3 text-sm text-ink/60">
        For long-serving or high-performing facilitators, request one whenever you need it.
      </p>

      {requests.length > 0 && (
        <div className="mb-3 space-y-2">
          {requests.map((r) => (
            <div key={r.id} className="rounded-2xl bg-paper-dim px-4 py-2.5 text-xs text-ink/55">
              Requested {r.requestedAt} · {r.status === "pending" ? "Pending" : "Sent"}
            </div>
          ))}
        </div>
      )}

      {showForm ? (
        <div className="space-y-3">
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="What's it for, a job, grad school, anything the writer should know…"
            rows={2}
            className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!context.trim()}
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
            style={{ background: ACCENT }}
          >
            Send request
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          Request a letter
        </button>
      )}
    </Card>
  );
}

function AdvisoryCard({ delay, tier }: { delay: number; tier: FacilitatorTier }) {
  const feedback = useAdvisoryFeedback();
  const [openDraftId, setOpenDraftId] = useState<string | null>(null);
  const [strengths, setStrengths] = useState("");
  const [concerns, setConcerns] = useState("");

  function handleSubmit(draftId: string) {
    if (!strengths.trim() && !concerns.trim()) return;
    submitAdvisoryFeedback(draftId, strengths.trim(), concerns.trim());
    setStrengths("");
    setConcerns("");
    setOpenDraftId(null);
  }

  return (
    <Card delay={delay}>
      <CardTitle>Advisory input</CardTitle>
      {tier < 2 ? (
        <p className="text-sm text-ink/45">
          Opens at Tier 2, once you&apos;re certified to run sessions solo, we start asking for
          your take on what&apos;s next.
        </p>
      ) : (
        <>
          <p className="mb-3 text-sm text-ink/60">
            Give feedback on content before it ships, this is where your experience shapes what
            comes next.
          </p>
          <div className="space-y-3">
            {DRAFT_ITEMS.map((d) => {
              const submitted = feedback.some((f) => f.draftId === d.id);
              const open = openDraftId === d.id;
              return (
                <div key={d.id} className="rounded-2xl border border-ink/8 px-4 py-3">
                  <p className="text-sm font-semibold text-ink/80">{d.title}</p>
                  <p className="mt-0.5 text-xs text-ink/50">{d.summary}</p>
                  {submitted ? (
                    <p className="mt-2 text-xs font-semibold" style={{ color: ACCENT }}>
                      Feedback submitted, thank you.
                    </p>
                  ) : open ? (
                    <div className="mt-3 space-y-2">
                      <textarea
                        value={strengths}
                        onChange={(e) => setStrengths(e.target.value)}
                        placeholder="What's working?"
                        rows={2}
                        className="w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
                      />
                      <textarea
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        placeholder="What would you change?"
                        rows={2}
                        className="w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
                      />
                      <button
                        type="button"
                        onClick={() => handleSubmit(d.id)}
                        className="rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: ACCENT }}
                      >
                        Submit feedback
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpenDraftId(d.id)}
                      className="mt-2 text-xs font-semibold underline decoration-ink/20 underline-offset-2"
                      style={{ color: ACCENT }}
                    >
                      Give feedback
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </Card>
  );
}
