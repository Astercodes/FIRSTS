"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  { title: "Communication", body: "Write clearly. Speak confidently. Listen carefully. Present effectively." },
  { title: "Workplace Readiness", body: "Understand expectations, professionalism, meetings, accountability, etiquette, and workplace judgment." },
  { title: "Relationships", body: "Learn to build relationships with peers, managers, mentors, stakeholders, and professionals." },
  { title: "Collaboration", body: "Contribute to teams, manage disagreement, give and receive feedback, and work across different personalities." },
  { title: "Business Acumen", body: "Understand how organizations create value, make decisions, use resources, and measure performance." },
  { title: "Leadership", body: "Learn to lead yourself before you're ever given a leadership title." },
  { title: "Thinking", body: "Strengthen problem-solving, critical thinking, reasoning, decision-making, and mental models." },
];

export function EPWorkWorks() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Learn how work actually works.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Professional success requires more than technical ability.
          FIRSTS helps you intentionally develop the capabilities that are
          often learned only through trial and error.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AREAS.map((a, i) => (
          <Reveal key={a.title} delay={(i % 6) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {a.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Link
          href="/development-areas"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Professional Development
        </Link>
      </Reveal>
    </section>
  );
}
