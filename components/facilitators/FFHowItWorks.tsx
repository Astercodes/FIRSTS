"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  { title: "Apply", body: "Tell us about your background, experience, why you want to facilitate, the populations you are interested in serving, the stages that interest you, your availability, and your preferred delivery environment." },
  { title: "Complete foundational preparation", body: "Learn the FIRSTS philosophy, facilitator role, boundaries, communication expectations, and core facilitation practices." },
  { title: "Select your development areas", body: "Begin training in the stages, FIRSTS, or programs that align with your capability and interests." },
  { title: "Observe", body: "Shadow experienced facilitators." },
  { title: "Practice", body: "Develop your skills in simulations, practice sessions, or facilitator labs." },
  { title: "Co-Lead", body: "Begin facilitating with experienced support." },
  { title: "Demonstrate Readiness", body: "Receive observation, feedback, and assessment before leading independently." },
  { title: "Facilitate", body: "Lead approved sessions, workshops, cohorts, or program experiences." },
  { title: "Keep Developing", body: "Receive feedback, pursue new specializations, and continue building your facilitator practice." },
  { title: "Lead Others", body: "As your experience grows, progress toward coaching, assessing, mentoring, or training other facilitators." },
];

export function FFHowItWorks() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          How it works.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 max-w-2xl space-y-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={(i % 5) * 0.05}>
            <div className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5">
              <span className="font-display text-lg font-bold text-[var(--fuchsia-blast)]">
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
          href="/for/facilitators/apply"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Start My Facilitator Journey
        </Link>
      </Reveal>
    </section>
  );
}
