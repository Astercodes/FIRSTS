"use client";

import { motion, AnimatePresence } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import { useFacilitatorApplications, setApplicationStatus } from "@/lib/facilitatorApplicationStore";

const ACCENT = "var(--fuchsia-blast)";

export function AdminApplicationQueue() {
  const applications = useFacilitatorApplications();
  const pending = applications.filter((a) => !a.isMine && (a.status === "pending" || a.status === "under-review"));

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">Applications to review</p>
          <p className="text-xs text-ink/45">Accept or decline volunteer applicants.</p>
        </div>
        <span className="rounded-full bg-paper-dim px-3 py-1 text-xs font-semibold text-ink/50">
          {pending.length} pending
        </span>
      </div>

      {pending.length === 0 ? (
        <div className="rounded-3xl border border-ink/8 bg-white p-6 text-center text-sm text-ink/45">
          Queue is empty.
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence>
            {pending.map((a) => {
              const stageLabels = STAGES.filter((s) => a.stagesInterested.includes(s.id)).map((s) => s.shortLabel);
              return (
                <motion.div
                  key={a.id}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl border border-ink/8 bg-white p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-sm font-semibold text-ink">{a.name}</p>
                      <p className="text-xs text-ink/45">{a.email}</p>
                      <p className="mt-1 text-xs text-ink/55">
                        {stageLabels.join(", ")} · {a.availability} · {a.formatPreference}
                      </p>
                      {a.priorExperience && (
                        <p className="mt-1.5 text-xs text-ink/50">{a.priorExperience}</p>
                      )}
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button
                        type="button"
                        onClick={() => setApplicationStatus(a.id, "accepted")}
                        className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: ACCENT }}
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        onClick={() => setApplicationStatus(a.id, "declined")}
                        className="rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold text-ink/60 transition-colors hover:border-ink/25"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
