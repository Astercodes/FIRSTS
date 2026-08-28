"use client";

import { motion } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import { TIER_META, type AdminFacilitatorRecord, type BackgroundCheckStatus, type ActivityStatus } from "@/lib/adminFacilitatorData";

const BG_LABEL: Record<BackgroundCheckStatus, string> = {
  cleared: "Cleared",
  pending: "Pending",
  "not-started": "Not started",
};

const BG_COLOR: Record<BackgroundCheckStatus, string> = {
  cleared: "var(--citrus-lime)",
  pending: "var(--sunshine-orange)",
  "not-started": "rgba(11,4,16,0.35)",
};

const ACTIVITY_COLOR: Record<ActivityStatus, string> = {
  active: "var(--citrus-lime)",
  inactive: "var(--sunshine-orange)",
  lapsed: "var(--berry-burst)",
};

export function AdminFacilitatorDirectory({ roster }: { roster: AdminFacilitatorRecord[] }) {
  return (
    <section className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="mb-1 font-display text-base font-semibold text-ink">Facilitator directory</p>
      <p className="mb-5 text-xs text-ink/45">{roster.length} facilitators on record.</p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink/8 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
              <th className="pb-2 pr-4">Name</th>
              <th className="pb-2 pr-4">Tier</th>
              <th className="pb-2 pr-4">Certified stages</th>
              <th className="pb-2 pr-4">Sessions</th>
              <th className="pb-2 pr-4">Reached</th>
              <th className="pb-2 pr-4">Rating</th>
              <th className="pb-2 pr-4">Background</th>
              <th className="pb-2">Activity</th>
            </tr>
          </thead>
          <tbody>
            {roster.map((f, i) => (
              <motion.tr
                key={f.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="border-b border-ink/5 last:border-0"
              >
                <td className="py-2.5 pr-4 font-medium text-ink/80">
                  {f.name}
                  {f.isYou && <span className="ml-1.5 text-xs text-ink/40">(you)</span>}
                </td>
                <td className="py-2.5 pr-4 text-ink/60">{TIER_META[f.tier].label.split(" · ")[0]}</td>
                <td className="py-2.5 pr-4 text-ink/60">
                  {f.stagesCertified.length > 0
                    ? STAGES.filter((s) => f.stagesCertified.includes(s.id))
                        .map((s) => s.shortLabel.replace("Stage ", ""))
                        .join(", ")
                    : "None yet"}
                </td>
                <td className="py-2.5 pr-4 text-ink/60">{f.sessionsDelivered}</td>
                <td className="py-2.5 pr-4 text-ink/60">{f.studentsReached}</td>
                <td className="py-2.5 pr-4 text-ink/60">{f.avgRating !== null ? f.avgRating.toFixed(1) : "N/A"}</td>
                <td className="py-2.5 pr-4">
                  <span
                    className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                    style={{ color: BG_COLOR[f.backgroundCheck], background: `color-mix(in oklab, ${BG_COLOR[f.backgroundCheck]} 16%, white)` }}
                  >
                    {BG_LABEL[f.backgroundCheck]}
                  </span>
                </td>
                <td className="py-2.5">
                  <span
                    className="rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize"
                    style={{ color: ACTIVITY_COLOR[f.activity], background: `color-mix(in oklab, ${ACTIVITY_COLOR[f.activity]} 16%, white)` }}
                  >
                    {f.activity}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
