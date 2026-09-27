"use client";

import { EditorialImage } from "@/components/landing/EditorialImage";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { HeroPeopleBand } from "@/components/illustrations/Scenes";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const MODULE_CARDS = [
  {
    label: "Core Values Audit",
    meta: "First 01 · 30 to 45 min",
    color: "var(--neon-pink)",
    delay: 0.9,
  },
  {
    label: "Industry Insight",
    meta: "First 08 · Live research",
    color: "var(--tropical-mango)",
    delay: 1.05,
  },
  {
    label: "Career SWOT",
    meta: "First 12 · Synthesized",
    color: "var(--lime-zest)",
    delay: 1.0,
  },
  {
    label: "Salary Benchmarking",
    meta: "First 11 · 3 sources cited",
    color: "var(--fuchsia-blast)",
    delay: 1.15,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="marketing-section home-hero relative isolate overflow-hidden bg-ink px-6 text-paper"
    >
      {/* animated blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-60 blur-[90px]"
        style={{ background: "var(--neon-pink)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[10%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-50 blur-[100px]"
        style={{ background: "var(--tropical-mango)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[30%] h-[460px] w-[460px] animate-blob-drift rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--juicy-plum)" }}
      />
      <div className="noise-layer" aria-hidden />

      {/* Module highlights stay readable at every screen size. */}
      <div className="hero-module-rail">
        {MODULE_CARDS.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: c.delay, ease: [0.16, 1, 0.3, 1] as const }}
            className="hero-module-card"
          >
            <div
              className="glass-dark rounded-2xl p-4 shadow-2xl"
            >
              <span
                className="mb-2 inline-block h-2 w-2 rounded-full"
                style={{ background: c.color, boxShadow: `0 0 12px ${c.color}` }}
              />
              <p className="font-display text-sm font-semibold text-paper">
                {c.label}
              </p>
              <p className="mt-1 text-xs text-paper/55">{c.meta}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hero-copy relative z-10 flex flex-col items-start text-left">
        <p className="hero-eyebrow"><span /> Your next chapter starts here</p>
        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={FADE_UP}
          className="hero-title font-display font-semibold"
        >
          Every future is built on{" "}
          <span className="text-gradient-citrus">a series of firsts.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={FADE_UP}
          className="mt-7 max-w-xl text-base leading-relaxed text-paper/70"
        >
          Your first discovery. Your first skill. Your first mentor. Your
          first opportunity. FIRSTS helps you intentionally build the
          knowledge, skills, habits, experiences, relationships, and
          confidence you need for where you&apos;re going, one first at a
          time.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={FADE_UP}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/onboarding"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(100deg, var(--neon-pink), var(--sunshine-orange) 60%, var(--lime-zest))",
            }}
          >
            Start Your Journey
          </Link>
          <a
            href="#pillars"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Explore FIRSTS
          </a>
        </motion.div>
      </div>

      <div className="hero-art"><EditorialImage priority /><div className="hero-art-note"><span className="hero-note-dot" /> A little courage. A new beginning.</div></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        className="hero-people pointer-events-none"
      >
        <HeroPeopleBand />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-[var(--ink)] to-transparent"
      />
    </section>
  );
}
