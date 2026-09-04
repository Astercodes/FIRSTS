"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function ISClosing() {
  return (
    <section id="get-started" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--berry-burst), var(--citrus-lime) 45%, var(--sunshine-orange) 80%, var(--lime-zest))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          You don&apos;t need permission to begin developing intentionally.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/85">
          You can start before your school signs an agreement. Before
          someone sends you an invitation. Before your career center
          recommends it. Before graduation gets close. Before your first
          internship. Before you know exactly where you are going.
        </p>
        <p className="mt-5 font-display text-lg font-semibold">
          Start with the access you have. Start with the question you
          have. Start with the FIRST you need next.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/onboarding/independent"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Start Free
          </Link>
          <Link
            href="/development-areas"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Explore FIRSTS
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
