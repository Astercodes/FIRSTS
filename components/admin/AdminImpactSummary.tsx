"use client";

import { motion } from "framer-motion";
import { orgImpactTotals, type AdminFacilitatorRecord } from "@/lib/adminFacilitatorData";

export function AdminImpactSummary({ roster }: { roster: AdminFacilitatorRecord[] }) {
  const totals = orgImpactTotals(roster);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <Stat label="Sessions delivered" value={totals.totalSessions} delay={0} />
      <Stat label="Students reached" value={totals.totalStudents} delay={0.05} />
      <Stat label="Active facilitators" value={totals.activeFacilitators} delay={0.1} />
    </div>
  );
}

function Stat({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-ink/8 bg-white p-5"
    >
      <p className="font-display text-3xl font-bold text-ink">{value.toLocaleString()}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
    </motion.div>
  );
}
