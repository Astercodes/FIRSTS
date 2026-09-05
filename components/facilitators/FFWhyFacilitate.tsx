"use client";

import { Reveal } from "@/components/ui/Reveal";

const SKILLS = [
  "Leadership",
  "Communication",
  "Public speaking",
  "Listening",
  "Group management",
  "Empathy",
  "Questioning",
  "Coaching skills",
  "Conflict navigation",
  "Confidence",
  "Professional judgment",
  "Teaching ability",
  "Reflection",
  "Community leadership",
  "Program delivery",
  "Teamwork",
];

const YOU_GAIN = [
  "Training",
  "Experience",
  "Feedback",
  "A facilitator community",
  "Credentials",
  "Leadership opportunities",
  "A record of impact",
];

export function FFWhyFacilitate() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Why become a facilitator?
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Develop others, and develop yourself.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Facilitation can help you build:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {SKILLS.map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {s}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          You gain:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {YOU_GAIN.map((y) => (
          <span
            key={y}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {y}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          and the opportunity to play a meaningful role in someone&rsquo;s
          development.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          A real exchange, not just an ask for your time.
        </p>
      </Reveal>
    </section>
  );
}
