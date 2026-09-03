"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function DAClosing() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
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
          You don&apos;t have to build every part of you at once.
        </h2>
        <p className="mt-4 max-w-lg text-[15px] text-paper/85">
          Start with one area, move at your own pace, and let each stage
          build on the last.
        </p>
        <Link
          href="/onboarding"
          className="mt-9 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
        >
          Start Your Journey
        </Link>
      </Reveal>
    </section>
  );
}
