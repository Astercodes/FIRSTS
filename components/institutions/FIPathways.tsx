"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const POPULATIONS = [
  { title: "First-Year Students", body: "Self-discovery, values, strengths, habits, relationships, exploration, and early exposure." },
  { title: "Sophomores", body: "Career and business exploration, communication, networking, experience-building, and direction." },
  { title: "Juniors", body: "Professional identity, internships, projects, workplace readiness, mentorship, and deeper development." },
  { title: "Seniors", body: "Applications, interviews, portfolios, transition planning, career readiness, and business launch preparation." },
  { title: "Graduate Students", body: "Professional positioning, leadership, career transition, business development, and advanced workplace preparation." },
  { title: "Recent Graduates", body: "Job search, professional identity, career growth, workplace effectiveness, leadership, and continued development." },
  { title: "Career Changers", body: "Rediscovery, transferable skills, career exploration, professional repositioning, and transition planning." },
  { title: "Aspiring Entrepreneurs", body: "Opportunity discovery, customer understanding, experimentation, business models, and venture development." },
];

export function FIPathways() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          One framework. Many pathways.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Students do not all need the same journey. FIRSTS can support
          different populations without forcing everyone into one
          identical sequence.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {POPULATIONS.map((p, i) => (
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

      <Reveal delay={0.15} className="mt-10 flex justify-center">
        <Link
          href="/development-areas"
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore Student Pathways
        </Link>
      </Reveal>
    </section>
  );
}
