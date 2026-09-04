"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const USES = [
  "Reflect on what you are learning.",
  "Think through career decisions.",
  "Prepare for professional conversations.",
  "Strengthen your responses.",
  "Identify areas you may need to develop.",
  "Connect lessons across different FIRSTS.",
  "Prepare for interviews.",
  "Think through goals.",
  "Review progress.",
  "Decide what to work on next.",
];

export function ISCoach() {
  return (
    <section className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[15%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--fuchsia-blast)" }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Meet your AI Coach.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-paper/65">
          Development gets easier when you don&apos;t have to figure out
          every next step alone. Your AI Coach uses the context of your
          FIRSTS journey to help you think through your development. Use
          it to:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {USES.map((u) => (
          <span
            key={u}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-paper/80"
          >
            {u}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="relative mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-paper/65">
          The Coach is part of your FIRSTS experience, not a reduced
          version because your school is not a partner.
        </p>
        <Link
          href="/dashboard/coach"
          className="mt-8 inline-flex rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Open My Coach
        </Link>
      </Reveal>
    </section>
  );
}
