"use client";

import Link from "next/link";
import { useFacilitatorPortal, TIER_META, type FacilitatorTier } from "@/lib/facilitatorStore";
import { useFacilitatorTraining, computeEarnedTier } from "@/lib/facilitatorTrainingStore";

export function FacilitatorTopbar() {
  const { application, profile } = useFacilitatorPortal();
  const training = useFacilitatorTraining();

  const displayName = application?.name || "Facilitator";
  const firstName = displayName.split(" ")[0];
  const initial = displayName.charAt(0).toUpperCase();
  const tier = profile
    ? (Math.max(profile.tier, computeEarnedTier(training)) as FacilitatorTier)
    : null;

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/8 bg-paper/75 px-6 py-4 backdrop-blur-xl lg:px-10 print:hidden">
      <Link href="/facilitator" className="flex items-center gap-2 lg:hidden">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon-pink)] via-[var(--sunshine-orange)] to-[var(--lime-zest)]">
          <span className="font-display text-xs font-bold text-ink">F</span>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          FIRSTS
        </span>
      </Link>

      <div className="hidden lg:block">
        <p className="font-display text-lg font-semibold text-ink">
          Good to see you, {firstName}.
        </p>
        <p className="text-xs text-ink/45">Facilitator portal</p>
      </div>

      <div className="flex items-center gap-3">
        {tier !== null && (
          <span
            className="hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold sm:flex"
            style={{
              borderColor: "color-mix(in oklab, var(--fuchsia-blast) 30%, transparent)",
              color: "var(--fuchsia-blast)",
              background: "color-mix(in oklab, var(--fuchsia-blast) 8%, white)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--fuchsia-blast)" }}
            />
            {TIER_META[tier].label}
          </span>
        )}
        <Link
          href="/facilitator/profile"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white shadow-[0_4px_14px_-4px_rgba(255,17,153,0.55)] ring-2 ring-white transition-transform hover:scale-105"
          style={{ background: "linear-gradient(135deg, var(--fuchsia-blast), var(--neon-pink))" }}
        >
          {initial}
        </Link>
      </div>
    </header>
  );
}
