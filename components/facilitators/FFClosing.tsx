"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const MOMENTS = [
  "The question you asked.",
  "The moment you gave them room to think.",
  "The conversation where something finally made sense.",
  "The experience that made them realize there was another possibility.",
  "The first time they said something out loud they had only been thinking.",
  "The moment they decided to act.",
];

export function FFClosing() {
  return (
    <section id="get-started" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--fuchsia-blast), var(--neon-pink) 45%, var(--berry-burst) 80%, var(--juicy-plum))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Lead a session. Build a practice. Help someone take a FIRST.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/85">
          Some participants will remember the activity. Others will
          remember:
        </p>
        <div className="mt-5 space-y-1.5">
          {MOMENTS.map((m) => (
            <p key={m} className="text-sm text-paper/70">
              {m}
            </p>
          ))}
        </div>
        <p className="mt-6 font-display text-lg font-semibold">
          You are not there to write their story. You are there to help
          create the space where they can begin writing it
          intentionally.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/for/facilitators/apply"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Apply to Become a Facilitator
          </Link>
          <Link
            href="/facilitator/training"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Explore Facilitator Training
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
