"use client";

import { motion } from "framer-motion";
import { STAGES } from "@/lib/dashboardData";
import { useFacilitatorPortal, TIER_META } from "@/lib/facilitatorStore";

const BANNER = "linear-gradient(120deg, var(--fuchsia-blast), var(--neon-pink) 60%, var(--juicy-plum))";

export function FacilitatorOverview() {
  const { application, profile } = useFacilitatorPortal();

  if (!application || !profile) return null;

  const stages = STAGES.filter((s) => application.stagesInterested.includes(s.id));
  const tier = TIER_META[profile.tier];

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-3xl border border-ink/8 bg-white"
      >
        <div className="relative h-24" style={{ background: BANNER }}>
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white,transparent_35%),radial-gradient(circle_at_80%_70%,white,transparent_30%)]" />
        </div>

        <div className="px-7 pb-7">
          <div className="flex items-end gap-4">
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-20 w-20 shrink-0 -translate-y-8 items-center justify-center rounded-full font-display text-2xl font-bold text-white ring-4 ring-white"
              style={{ background: "linear-gradient(135deg, var(--fuchsia-blast), var(--neon-pink))" }}
            >
              {application.name.charAt(0)}
            </motion.span>
            <div className="-mt-3">
              <h1 className="font-display text-xl font-semibold tracking-tight text-ink">
                {application.name}
              </h1>
              <p className="text-sm text-ink/55">Facilitator since {formatDate(profile.joinedAt)}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-5 rounded-2xl bg-paper-dim px-4 py-3"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
              Current tier
            </p>
            <p className="mt-0.5 font-display text-sm font-bold text-ink">{tier.label}</p>
            <p className="mt-0.5 text-xs text-ink/50">{tier.blurb}</p>
          </motion.div>

          {stages.length > 0 && (
            <div className="mt-5 border-t border-ink/8 pt-4">
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-ink/40">
                Stages you&apos;re drawn to
              </p>
              <div className="flex flex-wrap gap-2">
                {stages.map((s, i) => (
                  <motion.span
                    key={s.id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 320, damping: 24 }}
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{
                      borderColor: "var(--fuchsia-blast)",
                      color: "var(--fuchsia-blast)",
                      background: "color-mix(in oklab, var(--fuchsia-blast) 10%, white)",
                    }}
                  >
                    {s.shortLabel}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Sessions delivered" value={String(profile.sessionsDelivered)} delay={0} />
        <StatCard label="Students reached" value={String(profile.studentsReached)} delay={0.05} />
        <StatCard
          label="Average rating"
          value={profile.avgRating !== null ? profile.avgRating.toFixed(1) : "N/A"}
          hint={profile.avgRating === null ? "No sessions yet" : undefined}
          delay={0.1}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-3xl border border-ink/8 bg-white p-6"
      >
        <p className="mb-4 font-display text-base font-semibold text-ink">Getting started</p>
        <div className="space-y-3">
          <ChecklistRow label="Application accepted" state="done" />
          <ChecklistRow label="Complete stage-specific training" state="locked" note="Opens soon" />
          <ChecklistRow label="Run your first session" state="locked" note="Opens soon" />
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
  delay,
}: {
  label: string;
  value: string;
  hint?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-ink/8 bg-white p-5"
    >
      <p className="font-display text-2xl font-bold text-ink">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
      {hint && <p className="mt-1 text-[11px] text-ink/40">{hint}</p>}
    </motion.div>
  );
}

function ChecklistRow({
  label,
  state,
  note,
}: {
  label: string;
  state: "done" | "locked";
  note?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs"
        style={
          state === "done"
            ? { background: "var(--fuchsia-blast)", color: "white" }
            : { background: "rgba(11,4,16,0.06)", color: "rgba(11,4,16,0.3)" }
        }
      >
        {state === "done" ? "✓" : "•"}
      </span>
      <span className={`text-sm font-medium ${state === "done" ? "text-ink" : "text-ink/45"}`}>
        {label}
      </span>
      {note && <span className="ml-auto text-xs text-ink/35">{note}</span>}
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
