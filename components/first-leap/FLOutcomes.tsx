"use client";

import { Reveal } from "@/components/ui/Reveal";

const OUTCOMES = [
  {
    title: "Greater Self-Awareness",
    body: "A clearer understanding of your strengths, interests, values, abilities, preferences, motivations, and areas for growth.",
  },
  {
    title: "Broader Exposure",
    body: "Knowledge of careers, businesses, industries, professionals, and possibilities you may not have encountered before.",
  },
  {
    title: "Real Experiences",
    body: "Activities and experiences that give you more than theoretical information about potential directions.",
  },
  {
    title: "Meaningful Relationships",
    body: "Connections with mentors, facilitators, peers, professionals, entrepreneurs, and others encountered throughout your journey.",
  },
  {
    title: "Development Evidence",
    body: "A record of meaningful firsts, reflections, activities, projects, experiences, and accomplishments within FIRSTS.",
  },
  {
    title: "Clearer Direction",
    body: "A more informed understanding of the career or business direction you want to pursue next.",
  },
  {
    title: "Your First Leap Roadmap",
    body: "A practical picture of what you need to do next to move toward that direction.",
  },
];

export function FLOutcomes() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          What will you leave First Leap with?
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          First Leap is designed to produce more than inspiration. By the
          end of your journey, you should have built a stronger foundation
          across several areas.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {OUTCOMES.map((o, i) => (
          <Reveal key={o.title} delay={(i % 6) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {o.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mx-auto mt-12 max-w-xl text-center">
        <p className="font-display text-lg font-semibold leading-relaxed text-ink">
          You entered exploring possibilities. You leave prepared to pursue
          one more intentionally.
        </p>
      </Reveal>
    </section>
  );
}
