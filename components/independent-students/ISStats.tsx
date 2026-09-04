"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { FIRSTS, STAGES } from "@/lib/dashboardData";

export function ISStats() {
  const stats = [
    { value: `${FIRSTS.length} Guided FIRSTS`, body: "Access the same guided FIRSTS available across the platform." },
    { value: `${STAGES.length} Development Stages`, body: "Move through them in sequence or explore what is most relevant to you." },
    { value: "Independent Access", body: "No .edu email address, partner-school account, or invitation code required." },
    { value: "Your Own Portfolio", body: "Keep your work, progress, reflections, and evidence connected to you, not to an institution." },
  ];

  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          The same FIRSTS. Your own account.
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-white p-6 text-center">
              <p className="font-display text-lg font-bold text-gradient-citrus">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {s.body}
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
          Explore the {STAGES.length} Stages
        </Link>
      </Reveal>
    </section>
  );
}
