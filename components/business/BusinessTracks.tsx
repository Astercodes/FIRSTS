"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS_TRACKS } from "@/lib/businessData";

export function BusinessTracks() {
  return (
    <section id="tracks" className="marketing-section relative bg-paper px-6 py-28">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          You don&apos;t need a business plan.
          <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(100deg, var(--sunshine-orange), var(--berry-burst))" }}>
            You just need somewhere to begin.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink/60">
          FIRSTS Business gives you {BUSINESS_TRACKS.length} tracks, from validating
          a problem to pitching what you&apos;ve built, each one grounded in a real
          action, not just theory.
        </p>
        <Link
          href="#get-started"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Start With Track One
        </Link>
      </Reveal>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BUSINESS_TRACKS.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.06}>
            <div className="design-card flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6">
              <span
                className="pillar-marker mb-5 flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg text-ink"
                style={{ background: `color-mix(in oklab, ${t.color} 20%, var(--paper))` }}
              >
                0{t.order}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{t.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{t.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.focusAreas.map((f) => (
                  <span key={f} className="rounded-full bg-paper-dim px-2.5 py-1 text-[11px] font-medium text-ink/55">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
