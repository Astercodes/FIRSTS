"use client";

import { motion } from "framer-motion";
import { coverageByStage, type AdminFacilitatorRecord } from "@/lib/adminFacilitatorData";

const ACCENT = "var(--fuchsia-blast)";

export function AdminCoverageView({ roster }: { roster: AdminFacilitatorRecord[] }) {
  const coverage = coverageByStage(roster);
  const maxCertified = Math.max(1, ...coverage.map((c) => c.certified));

  return (
    <section className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="mb-1 font-display text-base font-semibold text-ink">Coverage by stage</p>
      <p className="mb-5 text-xs text-ink/45">
        Certified facilitators per stage, gaps are where a workshop request would go unfilled.
      </p>

      <div className="space-y-3">
        {coverage.map((c, i) => {
          const gap = c.certified === 0;
          return (
            <div key={c.stageId}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className={`font-semibold ${gap ? "text-[var(--berry-burst)]" : "text-ink/70"}`}>
                  {c.label}
                  {gap && " · no coverage"}
                </span>
                <span className="text-ink/45">
                  {c.certified} certified{c.inTraining > 0 ? ` · ${c.inTraining} in training` : ""}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-paper-dim">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: gap ? "var(--berry-burst)" : ACCENT }}
                  initial={{ width: 0 }}
                  animate={{ width: gap ? "6%" : `${(c.certified / maxCertified) * 100}%` }}
                  transition={{ delay: i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
