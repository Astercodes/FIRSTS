"use client";

import { motion, AnimatePresence } from "framer-motion";
import { STAGES, type StageId } from "@/lib/dashboardData";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";
import {
  FUNDAMENTALS_MODULES,
  useFacilitatorTraining,
  toggleFundamentalsModule,
  toggleStageTrainingItem,
  advanceApprenticeship,
  recertifyStage,
  stageReadyForApprenticeship,
  type ApprenticeshipStep,
} from "@/lib/facilitatorTrainingStore";

const ACCENT = "var(--fuchsia-blast)";

const APPRENTICESHIP_STEPS: { step: ApprenticeshipStep; label: string; cta: string }[] = [
  { step: "not-started", label: "Not started", cta: "Mark shadow session complete" },
  { step: "shadowed", label: "Shadowed a session", cta: "Mark co-led session complete" },
  { step: "co-led", label: "Co-led a session", cta: "Mark certified for solo sessions" },
  { step: "certified", label: "Certified for solo sessions", cta: "" },
];

function stepIndex(step: ApprenticeshipStep): number {
  return APPRENTICESHIP_STEPS.findIndex((s) => s.step === step);
}

export function TrainingView() {
  const { application } = useFacilitatorPortal();
  const training = useFacilitatorTraining();

  if (!application) return null;

  const fundamentalsDone = FUNDAMENTALS_MODULES.filter((m) =>
    training.fundamentalsComplete.includes(m.id),
  ).length;
  const stages = STAGES.filter((s) => application.stagesInterested.includes(s.id));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-ink/8 bg-white p-7"
      >
        <div className="mb-1 flex items-center justify-between">
          <p className="font-display text-base font-semibold text-ink">Facilitator fundamentals</p>
          <span className="text-xs font-semibold text-ink/40">
            {fundamentalsDone}/{FUNDAMENTALS_MODULES.length}
          </span>
        </div>
        <p className="mb-4 text-xs text-ink/45">
          General facilitation skills, required before apprenticing on any stage.
        </p>

        <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-paper-dim">
          <motion.div
            className="h-full rounded-full"
            style={{ background: ACCENT }}
            initial={{ width: 0 }}
            animate={{ width: `${(fundamentalsDone / FUNDAMENTALS_MODULES.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="space-y-2">
          {FUNDAMENTALS_MODULES.map((m) => {
            const done = training.fundamentalsComplete.includes(m.id);
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => toggleFundamentalsModule(m.id)}
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
      </motion.div>

      {stages.map((stage, i) => (
        <StageTrainingCard
          key={stage.id}
          stageId={stage.id}
          stageLabel={stage.shortLabel}
          training={training}
          delay={0.05 + i * 0.05}
        />
      ))}
    </div>
  );
}

function StageTrainingCard({
  stageId,
  stageLabel,
  training,
  delay,
}: {
  stageId: StageId;
  stageLabel: string;
  training: ReturnType<typeof useFacilitatorTraining>;
  delay: number;
}) {
  const stage = training.stages[stageId] ?? {
    guideStudied: false,
    readinessCheckPassed: false,
    apprenticeship: "not-started" as ApprenticeshipStep,
    certifiedAt: null,
  };
  const ready = stageReadyForApprenticeship(training, stageId);
  const idx = stepIndex(stage.apprenticeship);
  const currentStepDef = APPRENTICESHIP_STEPS[idx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-ink/8 bg-white p-7"
    >
      <p className="mb-4 font-display text-base font-semibold text-ink">{stageLabel} training</p>

      <div className="space-y-2">
        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-ink/8 px-4 py-3 transition-colors hover:bg-paper-dim">
          <input
            type="checkbox"
            checked={stage.guideStudied}
            onChange={() => toggleStageTrainingItem(stageId, "guideStudied")}
            className="h-4 w-4 accent-[var(--fuchsia-blast)]"
          />
          <span className="text-sm font-medium text-ink/80">
            Study the {stageLabel} facilitator guide
          </span>
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-ink/8 px-4 py-3 transition-colors hover:bg-paper-dim">
          <input
            type="checkbox"
            checked={stage.readinessCheckPassed}
            onChange={() => toggleStageTrainingItem(stageId, "readinessCheckPassed")}
            className="h-4 w-4 accent-[var(--fuchsia-blast)]"
          />
          <span className="text-sm font-medium text-ink/80">
            Pass the {stageLabel} readiness check
          </span>
        </label>
      </div>

      <div className="mt-5 border-t border-ink/8 pt-4">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
          Apprenticeship
        </p>
        <div className="flex items-center gap-1.5">
          {APPRENTICESHIP_STEPS.map((s, i) => (
            <div
              key={s.step}
              className="h-1.5 flex-1 rounded-full transition-colors duration-500"
              style={{ background: i <= idx ? ACCENT : "rgba(11,4,16,0.08)" }}
            />
          ))}
        </div>
        <p className="mt-2 text-xs font-semibold text-ink/60">{currentStepDef.label}</p>

        <AnimatePresence mode="wait">
          {stage.apprenticeship !== "certified" ? (
            <motion.button
              key={stage.apprenticeship}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type="button"
              disabled={!ready}
              onClick={() => advanceApprenticeship(stageId)}
              whileTap={ready ? { scale: 0.97 } : undefined}
              className="mt-3 w-full rounded-2xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-30"
              style={{ background: ACCENT }}
            >
              {ready ? currentStepDef.cta : "Complete the checklist above first"}
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 flex items-center justify-between rounded-2xl bg-paper-dim px-4 py-3"
            >
              <span className="text-xs text-ink/50">
                Certified {stage.certifiedAt ? `on ${stage.certifiedAt}` : ""}, renews annually
              </span>
              <button
                type="button"
                onClick={() => recertifyStage(stageId)}
                className="text-xs font-semibold underline decoration-ink/20 underline-offset-2 hover:text-ink"
                style={{ color: ACCENT }}
              >
                Recertify now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
