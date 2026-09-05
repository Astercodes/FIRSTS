"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AREAS = [
  { title: "Career Clarity", body: "Who am I, what am I interested in, and what directions should I explore?" },
  { title: "Professional Identity", body: "How do I communicate who I am becoming?" },
  { title: "Career Exploration", body: "What careers, industries, and roles exist?" },
  { title: "Networking", body: "How do I build genuine professional relationships?" },
  { title: "Experience", body: "What can I do before someone gives me a full-time job?" },
  { title: "Application Readiness", body: "How do I communicate my fit for an opportunity?" },
  { title: "Workplace Readiness", body: "How do I operate effectively after I am hired?" },
  { title: "Career Growth", body: "How do I keep developing beyond entry?" },
];

export function FCCareerReadiness() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give students more than job-search help.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Career readiness is broader than a resume and interview. FIRSTS
          supports development before, during, and after the application
          stage.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {AREAS.map((a, i) => (
          <Reveal key={a.title} delay={(i % 4) * 0.06}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-5">
              <h3 className="font-display text-sm font-semibold text-ink">
                {a.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {a.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Link
          href="/first-leap#career"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore the Career Center
        </Link>
      </Reveal>
    </section>
  );
}
