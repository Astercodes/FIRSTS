"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { title: "Define the population", body: "Start with one course, one academic program, one college, one class year, one special initiative, or your entire institution." },
  { title: "Choose the experience", body: "Decide whether students will use the full FIRSTS framework, selected stages, the Career Center, the Business Center, First Leap, a custom pathway, or a combination." },
  { title: "Connect your systems", body: "Set up supported authentication, roster, cohort, and administrative access." },
  { title: "Prepare your people", body: "Identify administrators, advisors, facilitators, faculty, mentors, program managers, and other authorized users, and prepare them for their role." },
  { title: "Launch students", body: "Students begin engaging with FIRSTS individually, through classes, programs, cohorts, or institution-wide access." },
  { title: "Monitor", body: "Review engagement, completion, cohort activity, and developmental patterns." },
  { title: "Support", body: "Use institutional staff, facilitators, mentors, programming, and other resources where human intervention adds value." },
  { title: "Learn", body: "Study what students are engaging with, where they struggle, and what programming produces stronger participation." },
  { title: "Improve", body: "Adjust pathways, interventions, partnerships, programming, and implementation based on evidence." },
  { title: "Expand", body: "Move from a successful pilot to additional programs, colleges, cohorts, or institution-wide adoption." },
];

export function FIImplementation() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          What implementation can look like.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 max-w-2xl space-y-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={(i % 5) * 0.05}>
            <div className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5">
              <span className="font-display text-lg font-bold text-[var(--berry-burst)]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">
                  {s.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <Link
          href="/request-demo?for=institutions"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Talk to Us About Implementation
        </Link>
      </Reveal>
    </section>
  );
}
