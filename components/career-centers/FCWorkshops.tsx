"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const EXISTING_PROGRAMMING = [
  "Resume workshops",
  "Career fairs",
  "Interview sessions",
  "Networking events",
  "Employer panels",
  "Internship preparation",
  "LinkedIn workshops",
  "Career exploration events",
  "Alumni panels",
  "Professional etiquette programs",
];

export function FCWorkshops() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Make workshops part of a journey.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Stop letting valuable programming become isolated events. A
          career center may already run:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {EXISTING_PROGRAMMING.map((p) => (
          <span
            key={p}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {p}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl">
        <p className="text-center text-[15px] leading-relaxed text-ink/60">
          FIRSTS can connect those experiences to a larger developmental
          pathway. For example:
        </p>
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl border border-ink/10 bg-white px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              Before a networking event
            </p>
            <p className="mt-1 text-sm text-ink/70">
              Students complete their First Professional Introduction.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              At the event
            </p>
            <p className="mt-1 text-sm text-ink/70">
              They make their First Professional Connection.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              After the event
            </p>
            <p className="mt-1 text-sm text-ink/70">
              They complete their First Follow-Up and reflection.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Suddenly the event is not an isolated activity.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          It becomes part of a developmental sequence.
        </p>
        <Link
          href="/advisor/programming"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          See Program Integration Ideas
        </Link>
      </Reveal>
    </section>
  );
}
