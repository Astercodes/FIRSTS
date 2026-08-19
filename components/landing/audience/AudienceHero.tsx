"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { AudienceConfig } from "@/lib/audienceContent";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function AudienceHero({ config }: { config: AudienceConfig }) {
  return (
    <section className="relative isolate flex min-h-[70svh] w-full flex-col items-center justify-center overflow-hidden bg-mesh-dark px-6 pb-16 pt-32 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-50 blur-[100px]"
        style={{ background: config.color }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[10%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
        style={{ background: config.colorSecondary }}
      />
      <div className="noise-layer" aria-hidden />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={FADE_UP}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.25em]"
          style={{ color: config.color }}
        >
          {config.kicker}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={FADE_UP}
          className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          {config.headline}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(100deg, ${config.color}, ${config.colorSecondary})`,
            }}
          >
            {config.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={FADE_UP}
          className="mt-6 max-w-xl text-balance text-lg text-paper/70"
        >
          {config.subheadline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={FADE_UP}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href={config.primaryCta.href}
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: `linear-gradient(100deg, ${config.color}, ${config.colorSecondary})`,
            }}
          >
            {config.primaryCta.label}
          </Link>
          <Link
            href={config.secondaryCta.href}
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            {config.secondaryCta.label}
          </Link>
        </motion.div>

        {config.tertiaryCta && (
          <motion.div initial="hidden" animate="show" custom={3.5} variants={FADE_UP}>
            <Link
              href={config.tertiaryCta.href}
              className="mt-5 inline-block text-sm font-semibold text-paper/60 underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper hover:decoration-paper/60"
            >
              {config.tertiaryCta.label} →
            </Link>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          animate="show"
          custom={4}
          variants={FADE_UP}
          className="mt-14 grid w-full grid-cols-3 gap-6 border-t border-white/10 pt-8"
        >
          {config.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl font-bold sm:text-3xl" style={{ color: config.color }}>
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-paper/50">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
