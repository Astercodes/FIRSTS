"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";
import { workshopKit } from "@/lib/facilitatorResourceStore";

const ACCENT = "var(--fuchsia-blast)";

export function ResourceLibraryView() {
  const { application } = useFacilitatorPortal();
  const [openId, setOpenId] = useState<string | null>(null);

  if (!application) return null;

  const stages = STAGES.filter((s) => application.stagesInterested.includes(s.id));

  if (stages.length === 0) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-ink/8 bg-white p-7 text-center">
        <p className="text-sm text-ink/50">
          Kits unlock for the stages you applied to facilitate. Nothing here yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {stages.map((stage, i) => {
        const kit = workshopKit(stage.id);
        const open = openId === stage.id;
        return (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-3xl border border-ink/8 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenId(open ? null : stage.id)}
              className="flex w-full items-center justify-between px-7 py-5 text-left"
            >
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {stage.shortLabel} workshop kit
                </p>
                <p className="mt-0.5 text-xs text-ink/45">v{kit.version} · guide, prompts, timing, worksheet</p>
              </div>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-ink/40"
              >
                ▾
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 border-t border-ink/8 px-7 py-6">
                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                        Facilitator guide
                      </p>
                      <ol className="space-y-1.5">
                        {kit.facilitatorGuide.map((line, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-ink/70">
                            <span className="font-semibold" style={{ color: ACCENT }}>
                              {idx + 1}.
                            </span>
                            {line}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                        Discussion prompts
                      </p>
                      <ul className="space-y-1.5">
                        {kit.discussionPrompts.map((p, idx) => (
                          <li key={idx} className="text-sm text-ink/70">
                            &ldquo;{p}&rdquo;
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                        Timing guide
                      </p>
                      <div className="space-y-1.5">
                        {kit.timingGuide.map((t) => (
                          <div key={t.segment} className="flex items-center justify-between text-sm">
                            <span className="text-ink/70">{t.segment}</span>
                            <span className="font-semibold text-ink/50">{t.minutes} min</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-paper-dim px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                        Printable worksheet
                      </p>
                      <p className="mt-1 text-xs text-ink/55">{kit.worksheetNote}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="w-full rounded-2xl border border-ink/10 px-5 py-2.5 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/25 hover:bg-paper-dim"
                    >
                      Print this kit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
