"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS_TRACKS, MOCK_BUSINESS_USER } from "@/lib/businessData";

const BANNER = "linear-gradient(120deg, var(--sunshine-orange), var(--tropical-mango) 60%, var(--berry-burst))";

export function BusinessOverview() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="surface-card overflow-hidden rounded-3xl"
      >
        <div className="relative h-28" style={{ background: BANNER }}>
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white,transparent_35%),radial-gradient(circle_at_80%_70%,white,transparent_30%)]" />
          <div className="noise-layer" />
        </div>

        <div className="px-7 pb-7">
          <div className="flex items-end gap-4">
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="flex h-20 w-20 shrink-0 -translate-y-8 items-center justify-center rounded-full font-display text-2xl font-bold text-white ring-4 ring-white"
              style={{ background: "linear-gradient(135deg, var(--sunshine-orange), var(--tropical-mango))" }}
            >
              {MOCK_BUSINESS_USER.firstName.charAt(0)}
            </motion.span>
            <div className="-mt-3">
              <h1 className="font-display text-xl font-semibold tracking-tight text-ink">
                {MOCK_BUSINESS_USER.firstName}&apos;s business journey
              </h1>
              <p className="text-sm text-ink/55">Track 1 of {BUSINESS_TRACKS.length} · not started yet</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-paper-dim px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">Where this is at</p>
            <p className="mt-0.5 text-sm text-ink/70">
              This portal is scaffolded and ready to go. Real tracks, exercises, and
              coach guidance will populate here once the FIRSTS Business curriculum
              documents are in.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-4 font-display text-base font-semibold text-ink">Your tracks</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {BUSINESS_TRACKS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/business/dashboard/track/${t.id}`}
                className="surface-card surface-card-interactive flex h-full flex-col rounded-2xl p-5"
              >
                <span
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl font-display text-sm font-bold text-ink"
                  style={{ background: `color-mix(in oklab, ${t.color} 20%, var(--paper))` }}
                >
                  0{t.order}
                </span>
                <p className="font-display text-sm font-semibold text-ink">{t.title}</p>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink/55">{t.blurb}</p>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/35">
                  Not started
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
