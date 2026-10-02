"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function BusinessCTA() {
  return (
    <section id="get-started" className="marketing-section closing-section relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(120deg, var(--berry-burst), var(--sunshine-orange) 45%, var(--tropical-mango) 80%, var(--citrus-lime))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Your next business first is 30 minutes away.
        </h2>
        <p className="mt-4 max-w-lg text-[15px] text-paper/85">
          No business plan, no credit card. Just one real test, and a
          platform built to help you keep going.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/business/dashboard"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Start Your Journey
          </Link>
          <Link
            href="/business/for/institutions"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            I run an institution
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
