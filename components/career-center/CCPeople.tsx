"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const LEARN_ITEMS = [
  "How they chose their field",
  "How they entered it",
  "What their work actually involves",
  "What surprised them",
  "What they struggled with",
  "What they wish they knew earlier",
  "What capabilities matter most",
  "How their careers have changed",
  "What advice they would give someone exploring the profession",
];

export function CCPeople() {
  return (
    <section className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[15%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--fuchsia-blast)" }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Meet people who have gone before you.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-paper/65">
          Careers make more sense when you can see the people inside them.
          Discover professionals across different careers, industries,
          backgrounds, organizations, and stages of their journeys. Learn:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {LEARN_ITEMS.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-paper/80"
          >
            {item}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="relative mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-paper/65">
          Then move beyond reading. Attend a conversation. Ask a question.
          Join an event. Request a mentoring experience where available.
          Make your first professional connection.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/for/facilitators"
            className="rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Meet Professionals
          </Link>
          <Link
            href="/for/facilitators"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper/90 backdrop-blur transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Find a Mentor
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
