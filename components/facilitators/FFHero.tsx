"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const MOMENTS = [
  "Create the right conversation",
  "Guide an activity",
  "Help them reflect",
  "Notice when they are stuck",
  "Challenge them to go deeper",
];

export function FFHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-mesh-dark px-6 pb-20 pt-32 text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-50 blur-[100px]"
        style={{ background: "var(--fuchsia-blast)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[10%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[100px]"
        style={{ background: "var(--neon-pink)" }}
      />
      <div className="noise-layer" aria-hidden />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={FADE_UP}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--lime-zest)]"
        >
          For Facilitators
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={FADE_UP}
          className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          Help create the environment where development happens.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={FADE_UP}
          className="mt-4 font-display text-xl font-medium text-paper/80 sm:text-2xl"
        >
          People do not always need another lecture. Sometimes they need
          someone who can ask the right question.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={FADE_UP}
          className="mt-6 flex max-w-xl flex-wrap justify-center gap-2"
        >
          {MOMENTS.map((m) => (
            <span
              key={m}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-paper/70 backdrop-blur"
            >
              {m}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={4}
          variants={FADE_UP}
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-paper/65"
        >
          FIRSTS Facilitators help participants engage intentionally with
          their development, one FIRST at a time. You do not need to
          arrive knowing how to facilitate every part of FIRSTS. We train
          you, you practice, you observe experienced facilitators, you
          co-lead, and you specialize.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={5}
          variants={FADE_UP}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/for/facilitators/apply"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(100deg, var(--fuchsia-blast), var(--neon-pink) 60%, var(--berry-burst))",
            }}
          >
            Apply to Become a Facilitator
          </Link>
          <Link
            href="#pathway"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Explore Facilitator Development
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
