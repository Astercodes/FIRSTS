"use client";

import { motion, type Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const FLOAT_CARDS = [
  {
    label: "Core Values Audit",
    meta: "First 01 · 30–45 min",
    color: "var(--neon-pink)",
    top: "12%",
    left: "3%",
    rotate: -6,
    delay: 0.9,
    floatDuration: 5.4,
  },
  {
    label: "Industry Insight",
    meta: "First 08 · Live research",
    color: "var(--tropical-mango)",
    top: "62%",
    left: "1%",
    rotate: 4,
    delay: 1.05,
    floatDuration: 6.1,
  },
  {
    label: "Career SWOT",
    meta: "First 12 · Synthesized",
    color: "var(--lime-zest)",
    top: "8%",
    left: "78%",
    rotate: 5,
    delay: 1.0,
    floatDuration: 5.8,
  },
  {
    label: "Salary Benchmarking",
    meta: "First 11 · 3 sources cited",
    color: "var(--fuchsia-blast)",
    top: "66%",
    left: "76%",
    rotate: -4,
    delay: 1.15,
    floatDuration: 6.5,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-mesh-dark px-6 pt-24 pb-16 text-paper"
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

      {/* floating module cards — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {FLOAT_CARDS.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: c.rotate }}
            transition={{ duration: 0.9, delay: c.delay, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ top: c.top, left: c.left }}
            className="absolute w-52"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: c.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={FADE_UP}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-paper/80 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--lime-zest)]" />
          Stage One · Self-Awareness &amp; Career Clarity — 18 guided FIRSTS
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={FADE_UP}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Know yourself
          <br />
          before you{" "}
          <span className="text-gradient-citrus">choose a career.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={FADE_UP}
          className="mt-6 max-w-xl text-balance text-lg text-paper/70"
        >
          FIRSTS turns a career-clarity manual into a living, AI-guided
          practice — values, purpose, strengths, and market research, in one
          place, with a coach that never writes your answers for you.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={FADE_UP}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#get-started"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(100deg, var(--neon-pink), var(--sunshine-orange) 60%, var(--lime-zest))",
            }}
          >
            Start Stage One
          </a>
          <a
            href="#stages"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            See the 18 FIRSTS
          </a>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="show"
          custom={4}
          variants={FADE_UP}
          className="mt-8 text-xs uppercase tracking-[0.2em] text-paper/40"
        >
          For students · early professionals · career centers
        </motion.p>
      </div>
    </section>
  );
}
