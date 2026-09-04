"use client";

import { Reveal } from "@/components/ui/Reveal";

const QUESTIONS = [
  "How do I position myself professionally?",
  "How do I stand out without years of experience?",
  "What do I say in interviews?",
  "How do I build confidence at work?",
  "What skills should I be developing now?",
  "How do I know whether I'm actually growing?",
  "What if I'm already realizing this career may not be right for me?",
];

const AREAS = [
  "Professional identity",
  "Personal brand",
  "Career direction",
  "Resume and LinkedIn presence",
  "Interview readiness",
  "Communication",
  "Networking",
  "Workplace confidence",
  "Productivity and habits",
  "Critical thinking",
  "Leadership",
  "Professional relationships",
  "Financial literacy",
  "Business awareness",
  "Career growth",
  "Personal development",
];

export function EPIntro() {
  return (
    <section className="relative bg-paper px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          You may be asking:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-6 max-w-3xl">
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

      <Reveal delay={0.12} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS gives you a structured place to keep developing after
          school. Not just until you get hired.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          After you get hired too.
        </p>
      </Reveal>

      <Reveal delay={0.16} className="mx-auto mt-16 max-w-2xl border-t border-ink/10 pt-16 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Your development didn&apos;t end when school did.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          FIRSTS wasn&apos;t built only for students deciding what they want
          to become. It was built for the transition into real life and
          work too. Use FIRSTS to strengthen your:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {AREAS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.24} className="mx-auto mt-8 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          You don&apos;t have to restart from the beginning. Start with what
          you need now.
        </p>
      </Reveal>
    </section>
  );
}
