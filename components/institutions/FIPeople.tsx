"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PEOPLE = [
  { title: "Advisors", body: "Help students interpret choices, solve problems, and make decisions." },
  { title: "First Leap Facilitators", body: "Guide structured discovery experiences, activities, reflection, and cohort progression." },
  { title: "Mentors", body: "Bring real-world perspective, professional exposure, questions, encouragement, and lived experience." },
  { title: "Faculty", body: "Connect academic learning to professional, personal, and business development." },
  { title: "Alumni", body: "Turn experience into exposure for students who have not reached those firsts yet." },
  { title: "Employers", body: "Provide professional insights, projects, challenges, workplace exposure, and opportunities." },
  { title: "Entrepreneurs", body: "Help aspiring builders understand the realities of creating and operating businesses." },
];

export function FIPeople() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Add people to the platform.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Development works differently when students have both
          structure and human support. FIRSTS is not designed around the
          idea that software should replace people. It is designed to
          help people support students more effectively.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PEOPLE.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <h3 className="font-display text-sm font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.16} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Technology provides structure. People make development human.
        </p>
        <Link
          href="/for/facilitators"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Mentorship & Facilitation
        </Link>
      </Reveal>
    </section>
  );
}
