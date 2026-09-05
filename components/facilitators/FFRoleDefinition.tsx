"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const HELP_MOMENTS = [
  "Identify what they actually value.",
  "Recognize a strength they have overlooked.",
  "Prepare for their first professional conversation.",
  "Reflect on an experience.",
  "Explore a career they had never considered.",
  "Work through uncertainty.",
  "Practice communicating professionally.",
  "Think differently about a problem.",
  "Turn an intention into a plan.",
  "Follow through on something they have been avoiding.",
  "Recognize what they learned from failure.",
  "Decide what their next FIRST should be.",
];

export function FFRoleDefinition() {
  return (
    <section id="what-facilitators-do" className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          More than running workshops.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Facilitation is developmental work.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          A FIRSTS Facilitator is not simply there to explain an
          activity. Your role is to help participants engage with it
          deeply enough for something meaningful to happen. That might
          mean helping someone:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {HELP_MOMENTS.map((h) => (
          <span
            key={h}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {h}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          You do not tell people who to become.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          You help create the conditions in which they can develop
          intentionally.
        </p>
        <Link
          href="#day-to-day"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Learn About the Facilitator Role
        </Link>
      </Reveal>
    </section>
  );
}
