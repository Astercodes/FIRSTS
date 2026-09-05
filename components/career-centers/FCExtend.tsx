"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const ROLES = [
  "Students can work through FIRSTS on their own.",
  "Your staff can see where engagement is happening.",
  "Facilitators can support cohorts.",
  "Mentors can provide real-world perspective.",
  "Advisors can step in when a student needs deeper help.",
];

export function FCExtend() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Extend the reach of your team.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Your staff should not have to personally deliver every
          developmental touchpoint. FIRSTS gives students guided
          activities they can complete independently while allowing your
          career center to focus human attention where it creates the
          greatest value.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl">
        <div className="space-y-2.5">
          {ROLES.map((r) => (
            <p
              key={r}
              className="rounded-2xl border border-ink/10 bg-paper-dim px-5 py-3.5 text-sm font-medium text-ink/70"
            >
              {r}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Technology handles structure.
        </p>
        <p className="mt-1 font-display text-lg font-semibold text-ink">
          People provide judgment, context, encouragement, and care.
        </p>
        <Link
          href="/for/institutions"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See How Institutions Use FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
