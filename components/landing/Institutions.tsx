"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "18", label: "guided FIRSTS in Stage One" },
  { value: "3", label: "sources cross-checked per salary figure" },
  { value: "21d", label: "inactivity flags an at-risk student" },
];

export function Institutions() {
  return (
    <section id="institutions" className="relative bg-paper px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            For career centers &amp; institutions
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            See who&apos;s engaged, stuck, or ready for outreach.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/60">
            Roster sync, SSO, cohort dashboards, and advisor tools, all without
            ever exposing a student&apos;s raw reflection. Advisors see
            completion status by default; students opt in per module to
            share more.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  <span className="text-gradient-citrus">{s.value}</span>
                </p>
                <p className="mt-1 text-xs leading-snug text-ink/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/for/career-centers"
              className="text-sm font-semibold text-berry-burst underline decoration-berry-burst/30 underline-offset-4 transition-colors hover:decoration-berry-burst"
            >
              See it for career centers →
            </Link>
            <Link
              href="/for/institutions"
              className="text-sm font-semibold text-berry-burst underline decoration-berry-burst/30 underline-offset-4 transition-colors hover:decoration-berry-burst"
            >
              See it for institutions →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-ink/10 bg-white p-2 shadow-xl">
            <div className="rounded-2xl bg-paper-dim p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-display text-sm font-semibold text-ink">
                  Marketing · Class of 2027
                </p>
                <span className="rounded-full bg-citrus-lime/20 px-2.5 py-1 text-xs font-bold text-berry-burst">
                  84% active
                </span>
              </div>
              {[
                { name: "Core Values Audit", pct: 100, color: "var(--neon-pink)" },
                { name: "Strength Inventory", pct: 76, color: "var(--sunshine-orange)" },
                { name: "Industry Insight", pct: 52, color: "var(--citrus-lime)" },
                { name: "Career SWOT Analysis", pct: 18, color: "var(--fuchsia-blast)" },
              ].map((row) => (
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
