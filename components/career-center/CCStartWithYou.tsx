"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const QUESTIONS = [
  "What am I interested in?",
  "What am I good at?",
  "What could I become good at?",
  "What kinds of problems do I enjoy solving?",
  "What matters to me?",
  "How do I like to work?",
  "What environments bring out my best?",
  "What kind of impact do I want to make?",
  "What kind of life do I want my career to support?",
  "What have my experiences already taught me about myself?",
];

export function CCStartWithYou() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Start with you
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A career can look good on paper and still be wrong for you.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Before asking only &ldquo;What jobs pay well?&rdquo; or &ldquo;What
          careers are popular?&rdquo;, FIRSTS encourages you to ask deeper
          questions.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
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

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Your answers don&apos;t dictate one perfect career. They give you
          better information for exploring your possibilities.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/onboarding"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Myself
          </Link>
          <Link
            href="/dashboard/profile"
            className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5"
          >
            View My Career Profile
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
