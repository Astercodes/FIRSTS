"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const COLUMNS = [
  {
    title: "Your Firsts",
    body: "Every module you complete becomes part of your permanent record of growth.",
  },
  {
    title: "Your Growth",
    body: "Track how your skills, mindset, and confidence evolve over time.",
  },
  {
    title: "Your Evidence",
    body: "Build a portfolio of real proof, not just a list of completed activities.",
  },
  {
    title: "Your Journey",
    body: "See the full path from where you started to where you're going.",
  },
];

export function Profile() {
  return (
    <section className="relative overflow-hidden bg-mesh-dark px-6 py-28 text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] bottom-[-15%] h-[380px] w-[380px] animate-blob-drift-slow rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--lime-zest)" }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto mb-14 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Don&apos;t just complete activities.
          <br />
          Collect your FIRSTS.
        </h2>
      </Reveal>

      <div className="relative mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {COLUMNS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="relative mt-12 flex justify-center">
        <Link
          href="/dashboard/portfolio"
          className="rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          View My FIRSTS
        </Link>
      </Reveal>
    </section>
  );
}
