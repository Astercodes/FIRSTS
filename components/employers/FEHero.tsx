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

const THOUGHT_ON = [
  "Their strengths",
  "Their values",
  "Their professional identity",
  "Their experiences",
  "Their goals",
  "Their communication",
  "Their interview stories",
  "Their career direction",
  "Their workplace readiness",
  "Their development gaps",
];

export function FEHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-mesh-dark px-6 pb-20 pt-32 text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-50 blur-[100px]"
        style={{ background: "var(--sunshine-orange)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[10%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[100px]"
        style={{ background: "var(--pink-grapefruit)" }}
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
          For Employers
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={FADE_UP}
          className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
        >
          Meet people who have already started doing the work.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={FADE_UP}
          className="mt-4 font-display text-xl font-medium text-paper/80 sm:text-2xl"
        >
          Resumes tell you what candidates say they can do. FIRSTS helps
          them build evidence behind those claims.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={FADE_UP}
          className="mt-6 flex max-w-xl flex-wrap justify-center gap-2"
        >
          {THOUGHT_ON.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-paper/70 backdrop-blur"
            >
              {t}
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
          <strong className="text-paper">
            FIRSTS does not replace your hiring process.
          </strong>{" "}
          It helps candidates arrive better prepared for it.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={5}
          variants={FADE_UP}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/request-demo?for=employers"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(100deg, var(--sunshine-orange), var(--tropical-mango) 60%, var(--pink-grapefruit))",
            }}
          >
            Request a Demo
          </Link>
          <Link
            href="#participation"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Explore Employer Partnerships
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
