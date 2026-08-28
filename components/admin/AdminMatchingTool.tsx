"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STAGES, type StageId } from "@/lib/dashboardData";
import type { AdminFacilitatorRecord } from "@/lib/adminFacilitatorData";

const ACCENT = "var(--fuchsia-blast)";

export function AdminMatchingTool({ roster }: { roster: AdminFacilitatorRecord[] }) {
  const [stageId, setStageId] = useState<StageId>(STAGES[0].id);
  const [requested, setRequested] = useState<string | null>(null);

  const certified = roster
    .filter((f) => f.stagesCertified.includes(stageId) && f.activity === "active")
    .sort((a, b) => b.sessionsDelivered - a.sessionsDelivered);
  const inTraining = roster.filter((f) => f.stagesInTraining.includes(stageId) && f.activity === "active");

  return (
    <section className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="mb-1 font-display text-base font-semibold text-ink">Match a request</p>
      <p className="mb-4 text-xs text-ink/45">
        Pick a stage a school or region requested, see who&apos;s available to run it.
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {STAGES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setStageId(s.id);
              setRequested(null);
            }}
            className="rounded-full border px-3 py-1.5 text-xs font-semibold transition-all"
            style={
              stageId === s.id
                ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--fuchsia-blast) 14%, white)" }
                : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
            }
          >
            {s.shortLabel}
          </button>
        ))}
      </div>

      {certified.length === 0 && inTraining.length === 0 && (
        <p className="rounded-2xl bg-paper-dim px-4 py-3 text-sm text-ink/50">
          No one is certified or training for this stage yet.
        </p>
      )}

      <div className="space-y-2">
        {certified.map((f) => (
          <div key={f.id} className="flex items-center justify-between gap-3 rounded-2xl bg-paper-dim px-4 py-3">
            <div>
              <span className="text-sm font-semibold text-ink/80">
                {f.name}
                {f.isYou && <span className="ml-1.5 text-xs text-ink/40">(you)</span>}
              </span>
              <span className="ml-2 text-xs text-ink/45">{f.sessionsDelivered} sessions run</span>
            </div>
            <AnimatePresence mode="wait">
              {requested === f.id ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-xs font-semibold"
                  style={{ color: ACCENT }}
                >
                  Requested ✓
                </motion.span>
              ) : (
                <motion.button
                  key="request"
                  type="button"
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setRequested(f.id)}
                  className="rounded-full px-3.5 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: ACCENT }}
                >
                  Request
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        ))}

        {inTraining.length > 0 && (
          <div className="rounded-2xl border border-dashed border-ink/10 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Still training</p>
            <p className="mt-1 text-xs text-ink/50">
              {inTraining.map((f) => f.name).join(", ")}, not ready to assign yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
