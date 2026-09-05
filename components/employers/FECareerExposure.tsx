"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const DISCOVER = [
  "What your industry actually does",
  "What problems your teams solve",
  "What different roles look like",
  "What capabilities matter",
  "What entry routes exist",
  "What new graduates often misunderstand",
  "What your work environment is like",
  "How careers progress",
  "What is changing in your industry",
  "What opportunities are emerging",
];

export function FECareerExposure() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give students a view inside your industry.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Exposure changes what people believe is possible. Many
          students choose careers based only on the roles and industries
          they already know. Your organization can help them discover:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {DISCOVER.map((d) => (
          <span
            key={d}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {d}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          This can happen through the FIRSTS Career Center, First Leap
          programming, employer events, mentoring, and experiential
          opportunities.
        </p>
        <p className="mt-3 font-display text-lg font-semibold text-ink">
          Help someone discover a profession before asking them to apply
          for one.
        </p>
        <Link
          href="/employer/events"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Create Career Exposure
        </Link>
      </Reveal>
    </section>
  );
}
