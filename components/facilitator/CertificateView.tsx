"use client";

import { motion } from "framer-motion";
import { useFacilitatorPortal, TIER_META, type FacilitatorTier } from "@/lib/facilitatorStore";
import { useFacilitatorTraining, computeEarnedTier } from "@/lib/facilitatorTrainingStore";

export function CertificateView() {
  const { application, profile } = useFacilitatorPortal();
  const training = useFacilitatorTraining();

  if (!application || !profile) return null;

  const tier = Math.max(profile.tier, computeEarnedTier(training)) as FacilitatorTier;
  const tierLabel = TIER_META[tier].label;

  if (tier === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-ink/8 bg-white p-7 text-center print:hidden">
        <p className="text-sm text-ink/55">
          Your certificate unlocks once you earn your first tier, complete training and shadow a
          session to get there.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex justify-center print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          Print / Save as PDF
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[2rem] border-4 p-12 text-center"
        style={{ borderColor: "var(--fuchsia-blast)", background: "white" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_15%_20%,var(--fuchsia-blast),transparent_35%),radial-gradient(circle_at_85%_80%,var(--neon-pink),transparent_35%)]"
        />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "var(--fuchsia-blast)" }}>
            FIRSTS
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/40">
            This certifies that
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-ink">{application.name}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            has been recognized by FIRSTS as a
          </p>
          <p className="mt-1 font-display text-xl font-semibold" style={{ color: "var(--fuchsia-blast)" }}>
            {tierLabel}
          </p>
          <p className="mx-auto mt-6 max-w-sm text-xs leading-relaxed text-ink/50">
            {TIER_META[tier].blurb}
          </p>
          <div className="mx-auto mt-8 h-px w-24" style={{ background: "var(--fuchsia-blast)" }} />
          <p className="mt-4 text-xs text-ink/40">
            Volunteer facilitator since {formatDate(profile.joinedAt)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
