"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const AUDIENCES = [
  {
    tag: "Path A",
    title: "I want to start something of my own",
    body: "Sign up, start at Track One, and move through validating a problem, building, and pitching at your own pace.",
    color: "var(--sunshine-orange)",
    href: "/business/for/founders",
  },
  {
    tag: "Path B",
    title: "I run an institution or incubator",
    body: "Give your students or members a structured, trackable path to building, alongside or instead of a career track.",
    color: "var(--berry-burst)",
    href: "/business/for/institutions",
  },
  {
    tag: "Path C",
    title: "I want to mentor or invest in founders",
    body: "Meet founders who've already validated a problem and tested an offer, so your time goes toward real feedback.",
    color: "var(--fuchsia-blast)",
    href: "/business/for/mentors",
  },
];

export function BusinessAudiences() {
  return (
    <section className="marketing-section relative bg-paper-dim px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
            Built for three kinds of people
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            One framework, three doors in.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.12}>
              <Link
                href={a.href}
                className="design-card group relative block h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-25"
                  style={{ background: a.color }}
                  aria-hidden
                />
                <span
                  className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{ color: a.color, background: `color-mix(in oklab, ${a.color} 14%, white)` }}
                >
                  {a.tag}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">{a.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{a.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: a.color }}>
                  Learn more
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
