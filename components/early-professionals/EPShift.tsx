"use client";

import { Reveal } from "@/components/ui/Reveal";

const QUESTIONS = [
  "How do I become credible in it?",
  "How do I communicate what I can do?",
  "How do I get someone to give me a chance?",
  "How do I become effective once they do?",
  "How do I keep developing instead of becoming stagnant?",
];

export function EPShift() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Built for the stage after &ldquo;What do I want to be?&rdquo;
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Because the questions change after graduation.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
          Before graduation, you may ask
        </p>
        <p className="mt-3 font-display text-xl font-semibold text-ink">
          What career should I choose?
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-2xl">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
          After graduation, the questions often become
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {QUESTIONS.map((q) => (
            <div
              key={q}
              className="rounded-2xl border border-ink/10 bg-white px-5 py-4 text-sm font-semibold text-ink"
            >
              {q}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          FIRSTS helps you keep moving as those questions change.
        </p>
      </Reveal>
    </section>
  );
}
