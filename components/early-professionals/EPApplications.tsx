"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  { title: "Opportunity Analysis", body: "Understand what an employer is actually asking for." },
  { title: "Resume Tailoring", body: "Connect your experience to the specific role instead of sending the same resume everywhere." },
  { title: "Cover Letters", body: "Explain your fit clearly and intentionally." },
  { title: "STAR Stories", body: "Turn your experiences into strong examples for behavioral interviews." },
  { title: "Interview Preparation", body: "Prepare for questions, stories, examples, research, and the questions you will ask." },
  { title: "Professional Follow-Up", body: "Know what to say after interviews, networking conversations, and applications." },
  { title: "Offer Comparison", body: "Evaluate opportunities beyond salary alone." },
];

export function EPApplications() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Turn applications into a skill.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Job searching is something you can learn to do better. FIRSTS
          helps you practice the parts of the job search that often
          determine whether good candidates move forward.
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
          href="/onboarding/independent"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Prepare for Opportunities
        </Link>
      </Reveal>
    </section>
  );
}
