"use client";

import Link from "next/link";
import { EditorialShot } from "@/components/landing/EditorialShot";
import { motion, type Variants } from "framer-motion";

const WORDS = ["Experiments.", "Customers.", "Prototypes.", "Lessons.", "Offers.", "Pitches."];

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function BusinessIntro() {
  return (
    <section className="marketing-section relative overflow-hidden bg-ink px-6 py-28 text-paper">
      <div className="noise-layer" aria-hidden />

      <div className="pointer-events-none absolute bottom-0 left-[4%] hidden opacity-90 lg:block">
        <EditorialShot kind="making" className="section-photograph" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <motion.p
          custom={0}
          variants={FADE_UP}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--citrus-lime)]"
        >
          A founder development platform
        </motion.p>

        <motion.h2
          custom={1}
          variants={FADE_UP}
          className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          Your business won&apos;t arrive fully formed.
        </motion.h2>
        <motion.p custom={2} variants={FADE_UP} className="mt-3 text-lg text-paper/70">
          It will be built through small, tested attempts.
        </motion.p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {WORDS.map((w, i) => (
            <motion.span
              key={w}
              custom={i + 3}
              variants={FADE_UP}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-paper/85"
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.p custom={WORDS.length + 3} variants={FADE_UP} className="mt-8 text-lg text-paper/70">
          And a lot of firsts.
        </motion.p>

        <motion.h3
          custom={WORDS.length + 4}
          variants={FADE_UP}
          className="mt-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Start somewhere.
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(100deg, var(--sunshine-orange), var(--tropical-mango))" }}>
            Start with your next first.
          </span>
        </motion.h3>

        <motion.div custom={WORDS.length + 5} variants={FADE_UP} className="mt-9">
          <Link
            href="#get-started"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: "linear-gradient(100deg, var(--sunshine-orange), var(--tropical-mango) 60%, var(--citrus-lime))" }}
          >
            Start My Business Journey
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
