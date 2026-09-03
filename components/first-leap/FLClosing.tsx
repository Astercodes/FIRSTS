"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FLClosing() {
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

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Your future is too important to choose only from what you already
          know.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-paper/85">
          There are strengths you haven&apos;t fully discovered. Careers
          you haven&apos;t heard of. Problems you haven&apos;t encountered.
          People you haven&apos;t met. Skills you haven&apos;t tried.
          Businesses you haven&apos;t imagined. Environments you&apos;ve
          never entered. Questions you&apos;ve never been asked. And
          versions of yourself you&apos;ve never had the opportunity to
          meet.
        </p>
        <p className="mt-5 font-display text-lg font-semibold">
          That&apos;s why you explore. That&apos;s why you experience.
          That&apos;s why you take the First Leap.
        </p>
        <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-paper/90">
          Discover who you are. Explore what is possible. Experience before
          you decide. Choose your direction. Take your First Leap.
        </p>
        <Link
          href="/onboarding"
          className="mt-9 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
        >
          Take My First Leap
        </Link>
      </Reveal>
    </section>
  );
}
