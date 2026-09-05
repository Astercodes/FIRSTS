"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  "Professional identity",
  "Communication",
  "Mindset and habits",
  "Productivity",
  "Thinking",
  "Leadership",
  "Teamwork",
  "Relationships",
  "Business acumen",
  "Professional ethics",
  "Career growth",
  "Financial literacy",
];

const POPULATIONS = [
  "Interns",
  "Apprentices",
  "Graduate hires",
  "Early-career employees",
  "Emerging leaders",
  "Career-transition employees",
  "Employee-resource-group initiatives",
];

export function FEWorkforce() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Bring FIRSTS to your own workforce.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Development does not end when someone becomes an employee.
          FIRSTS can also support early professionals already inside your
          organization. Employees can work on:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {AREAS.map((a) => (
          <span
            key={a}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {a}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          This can support populations such as:
        </p>
      </Reveal>

      <Reveal delay={0.22} className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {POPULATIONS.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.3} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          FIRSTS can help develop the people entering your company and
          the people already inside it.
        </p>
        <Link
          href="/for/professionals"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore FIRSTS for Employees
        </Link>
      </Reveal>
    </section>
  );
}
