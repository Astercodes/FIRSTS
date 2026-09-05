"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PROBLEMS = [
  "Students lack exposure.",
  "People choose paths without understanding them.",
  "Skills develop without connection to real work.",
  "Candidates struggle to communicate what they can do.",
  "Employers enter the journey at the very end.",
];

export function FEClosing() {
  return (
    <section id="get-started" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, var(--sunshine-orange), var(--tropical-mango) 45%, var(--pink-grapefruit) 80%, var(--neon-pink))",
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Build the workforce before you hire from it.
        </h2>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/85">
          The talent challenges employers experience today often begin
          years before a job opening appears.
        </p>
        <div className="mt-5 space-y-1.5">
          {PROBLEMS.map((p) => (
            <p key={p} className="text-sm text-paper/70">
              {p}
            </p>
          ))}
        </div>
        <p className="mt-6 font-display text-lg font-semibold">
          Help people discover the work. Help them prepare for it. Give
          them opportunities to experience it. Help validate what
          readiness looks like. Then hire from a pipeline you helped
          develop.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-demo?for=employer-sponsor"
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Become an Employer Partner
          </Link>
          <Link
            href="/employer/sponsorships"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Sponsor a Cohort
          </Link>
          <Link
            href="/request-demo?for=employers"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Request a Demo
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
