"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function EPClosing() {
  return (
    <section id="get-started" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--berry-burst), var(--sunshine-orange) 45%, var(--neon-pink) 80%, var(--tropical-mango))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Start wherever you actually are.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/85">
          You don&apos;t have to be a freshman. You don&apos;t have to be
          unemployed. You don&apos;t have to know your entire future. You
          don&apos;t have to complete everything. And you don&apos;t have
          to wait for an institution to enroll you.
        </p>
        <p className="mt-5 font-display text-lg font-semibold">
          You just need a next step worth taking.
        </p>
        <p className="mt-2 text-base font-medium text-paper/90">
          Build the professional. Build the person. Keep taking FIRSTS.
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
            Explore All 16 Stages
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
