"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--berry-burst), var(--neon-pink) 35%, var(--sunshine-orange) 75%, var(--tropical-mango))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Your first FIRST takes 30 minutes.
        </h2>
        <p className="mt-4 max-w-lg text-[15px] text-paper/85">
          No credit card, no commitment to finish all 18 today. Just Core
          Values Audit, and a coach that asks better questions.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/onboarding"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Start free
          </Link>
          <Link
            href="/onboarding#advisor"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            I&apos;m a career center
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
