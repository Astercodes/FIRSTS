"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const FIRSTS = [
  "Your first career decision.",
  "Your first mentor.",
  "Your first project.",
  "Your first professional connection.",
  "Your first workplace.",
  "Your first interview.",
  "Your first opportunity.",
  "Your first failure.",
  "Your first breakthrough.",
  "Your first promotion.",
  "Your first leadership responsibility.",
  "Your first career change.",
];

export function CCClosing() {
  return (
    <section id="get-started" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--sunshine-orange), var(--neon-pink) 45%, var(--berry-burst) 80%, var(--fuchsia-blast))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Your career will be filled with firsts.
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
          {FIRSTS.join(" ")} And eventually, firsts you can&apos;t even
          imagine yet.
        </p>
        <p className="mt-6 font-display text-lg font-semibold">
          Don&apos;t wait for your career to happen to you.
        </p>
        <p className="mt-2 text-base font-medium text-paper/90">
          Build it intentionally, one first at a time.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/onboarding"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Explore Careers
          </Link>
          <Link
            href="/onboarding"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Find My Next First
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
