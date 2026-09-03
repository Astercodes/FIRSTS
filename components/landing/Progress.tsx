"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const TRACKED = [
  "Firsts completed",
  "Development areas explored",
  "Skills being built",
  "Goals and milestones",
  "Projects completed",
  "Experiences gained",
  "Mentor interactions",
  "Reflections and lessons",
  "Achievements and evidence",
  "Your next first",
];

const MOCK_ROWS = [
  { name: "Firsts completed", pct: 42, color: "var(--neon-pink)" },
  { name: "Development areas explored", pct: 68, color: "var(--sunshine-orange)" },
  { name: "Skills being built", pct: 55, color: "var(--citrus-lime)" },
  { name: "Goals and milestones", pct: 30, color: "var(--fuchsia-blast)" },
];

export function Progress() {
  return (
    <section id="progress" className="relative bg-paper px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Your progress, visible
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            See how far you&apos;ve come.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/60">
            Every first you take gets tracked in one place, so progress is
            never just a feeling. It&apos;s something you can see.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-ink/10 pt-8">
            {TRACKED.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-ink/65"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-berry-burst" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/dashboard/profile"
            className="mt-9 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            View My Progress
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-ink/10 bg-white p-2 shadow-xl">
            <div className="rounded-2xl bg-paper-dim p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-display text-sm font-semibold text-ink">
                  Your FIRSTS
                </p>
                <span className="rounded-full bg-citrus-lime/20 px-2.5 py-1 text-xs font-bold text-berry-burst">
                  On track
                </span>
              </div>
              {MOCK_ROWS.map((row) => (
                <div key={row.name} className="mb-4 last:mb-0">
                  <div className="mb-1.5 flex justify-between text-xs text-ink/60">
                    <span>{row.name}</span>
                    <span className="font-semibold text-ink">{row.pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-ink/10">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${row.pct}%`, background: row.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
