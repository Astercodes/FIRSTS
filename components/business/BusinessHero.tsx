"use client";

import Link from "next/link";
import { EditorialImage } from "@/components/landing/EditorialImage";
import { motion, type Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function BusinessHero() {
  return (
    <section
      id="top"
      className="marketing-section audience-hero relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-mesh-dark px-6 pt-24 pb-16 text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[-10%] h-[420px] w-[420px] animate-blob-drift rounded-full opacity-60 blur-[90px]"
        style={{ background: "var(--sunshine-orange)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[10%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-50 blur-[100px]"
        style={{ background: "var(--tropical-mango)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[30%] h-[460px] w-[460px] animate-blob-drift rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--berry-burst)" }}
      />
      <div className="noise-layer" aria-hidden />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial="hidden"
          animate="show"
          custom={0}
          variants={FADE_UP}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--tropical-mango)]"
        >
          FIRSTS Business
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={1}
          variants={FADE_UP}
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Every business is built on{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(100deg, var(--sunshine-orange), var(--tropical-mango) 55%, var(--citrus-lime))" }}>
            a series of firsts.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={2}
          variants={FADE_UP}
          className="mt-6 max-w-xl text-balance text-base text-paper/70"
        >
          Your first customer conversation. Your first prototype. Your first
          sale. Your first pitch. FIRSTS Business gives you a structured path
          from a raw idea to real evidence that it works, one first at a time.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={3}
          variants={FADE_UP}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#get-started"
            className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{ background: "linear-gradient(100deg, var(--sunshine-orange), var(--tropical-mango) 60%, var(--citrus-lime))" }}
          >
            Start Your Business Journey
          </Link>
          <a
            href="#tracks"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Explore the Tracks
          </a>
        </motion.div>
      </div>

      <EditorialImage kind="experiment" className="audience-art" priority />
    </section>
  );
}
