"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { STAGES } from "@/lib/dashboardData";

const STATS = [
  { value: String(STAGES.length), title: "development stages across career, work, business, and life" },
  { value: "Your pace", title: "No requirement to complete everything in order" },
  { value: "Your evidence", title: "Build real outputs, reflections, projects, and development records as you go" },
  { value: "No institution required", title: "Create your own account and use FIRSTS independently" },
];

export function EPStats() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {STAGES.length} stages. Use the ones that meet you where you are.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 text-center">
              <p className="font-display text-2xl font-bold text-gradient-citrus">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {s.title}
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
          View the {STAGES.length} Stages
        </Link>
      </Reveal>
    </section>
  );
}
