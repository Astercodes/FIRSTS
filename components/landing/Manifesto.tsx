"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const WORDS = [
  "Experiences.",
  "Relationships.",
  "Attempts.",
  "Lessons.",
  "Skills.",
  "Opportunities.",
];

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-paper">
      <div className="noise-layer" aria-hidden />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.h2
          custom={0}
          variants={FADE_UP}
          className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          Your future won&apos;t arrive all at once.
        </motion.h2>
        <motion.p custom={1} variants={FADE_UP} className="mt-3 text-lg text-paper/70">
          It will be built through decisions.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {WORDS.map((w, i) => (
            <motion.span
              key={w}
              custom={i + 2}
              variants={FADE_UP}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-paper/85"
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.p
          custom={WORDS.length + 2}
          variants={FADE_UP}
          className="mt-8 text-lg text-paper/70"
        >
          And a lot of firsts.
        </motion.p>

        <motion.h3
          custom={WORDS.length + 3}
          variants={FADE_UP}
          className="mt-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Start somewhere.
          <br />
          <span className="text-gradient-citrus">Start with your next FIRST.</span>
        </motion.h3>

        <motion.div custom={WORDS.length + 4} variants={FADE_UP} className="mt-9">
          <Link
            href="/onboarding"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(100deg, var(--neon-pink), var(--sunshine-orange) 60%, var(--lime-zest))",
            }}
          >
            Start My FIRSTS Journey
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
