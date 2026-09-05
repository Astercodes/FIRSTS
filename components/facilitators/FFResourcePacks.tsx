"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const RESOURCES = [
  "Facilitator guide",
  "Session objectives",
  "Suggested agenda",
  "Timing guide",
  "Presentation slides",
  "Participant worksheets",
  "Discussion prompts",
  "Reflection questions",
  "Activity instructions",
  "Group exercises",
  "Case examples",
  "Preparation checklist",
  "Materials checklist",
  "Virtual-delivery guidance",
  "In-person delivery guidance",
  "Accessibility considerations",
  "Common participant questions",
  "Common facilitation challenges",
  "Closing prompts",
  "Follow-up activities",
  "Feedback tools",
];

export function FFResourcePacks() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Everything you need to lead.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          You should spend your energy facilitating, not rebuilding the
          curriculum.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Each approved FIRST can include a facilitator resource pack
          such as:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {RESOURCES.map((r) => (
          <span
            key={r}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {r}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          The framework is provided.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          You bring the human experience.
        </p>
        <Link
          href="/facilitator/resources"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Facilitator Resources
        </Link>
      </Reveal>
    </section>
  );
}
