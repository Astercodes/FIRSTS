"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const EXCHANGES = [
  "One person's answer makes someone else think differently.",
  "One person's experience gives another person exposure.",
  "One person's question opens a discussion no one expected.",
  "One person's failure gives another person permission to be honest.",
];

export function FFGroupFacilitation() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Facilitate individuals without making everything individual.
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Good facilitation creates learning between participants too.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          A powerful FIRSTS session is not always facilitator to
          participant. Sometimes it is participant to participant:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 max-w-2xl space-y-2.5">
        {EXCHANGES.map((e) => (
          <p
            key={e}
            className="rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm text-ink/70"
          >
            {e}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Your job is to help create a space where those exchanges can
          happen constructively.
        </p>
        <Link
          href="/facilitator/training"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Learn About Group Facilitation
        </Link>
      </Reveal>
    </section>
  );
}
