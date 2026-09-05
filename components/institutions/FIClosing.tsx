"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FIClosing() {
  return (
    <section id="get-started" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--berry-burst), var(--juicy-plum) 45%, var(--neon-pink) 80%, var(--fuchsia-blast))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Build development into the infrastructure of the student
          experience.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/85">
          Give students a path. Give them opportunities to act, milestones
          worth reaching, experiences to reflect on, and evidence to
          carry forward. Give your people better ways to support them,
          and give your institution visibility into whether development
          is actually happening.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-demo?for=institutions"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Request a Demo
          </Link>
          <Link
            href="/onboarding/advisor"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Verify Your Institution
          </Link>
          <Link
            href="/request-demo?for=institutions"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Talk to Our Team
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
