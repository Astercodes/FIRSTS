"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const TRACKED = [
  { title: "Careers I'm Exploring", body: "Your saved roles and career possibilities." },
  { title: "Industries I'm Exploring", body: "Industries you're learning about." },
  { title: "My Career Experiences", body: "Projects, conversations, job shadows, events, internships, challenges, and other exposure." },
  { title: "My Career FIRSTS", body: "Milestones you've completed." },
  { title: "My Skills", body: "Capabilities you're developing and evidence connected to them." },
  { title: "My Network", body: "Mentors, professionals, peers, and relationships you've built." },
  { title: "My Career Documents", body: "Resumes, cover letters, portfolios, introductions, and other materials." },
  { title: "My Opportunities", body: "Opportunities you're exploring, preparing for, or applying to." },
  { title: "My Career Goals", body: "What you're currently working toward." },
  { title: "My Next First", body: "The next meaningful action in your journey." },
];

export function CCMyCareer() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          My Career
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Track your career journey.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Keep the important pieces of your career development in one
          place.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TRACKED.map((t, i) => (
          <Reveal key={t.title} delay={(i % 6) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <h3 className="font-display text-[15px] font-semibold text-ink">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                {t.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-12 flex justify-center">
        <Link
          href="/dashboard/portfolio"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Open My Career Dashboard
        </Link>
      </Reveal>
    </section>
  );
}
