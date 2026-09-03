"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    title: "Discover",
    color: "var(--neon-pink)",
    body: "Understand yourself more deeply: your strengths, values, personality, interests, and potential paths.",
    tagline: "Your first discovery can change your direction.",
  },
  {
    title: "Develop",
    color: "var(--sunshine-orange)",
    body: "Build the habits, mindsets, and technical and soft skills that turn potential into capability.",
    tagline: "Your first attempt becomes your first improvement.",
  },
  {
    title: "Experience",
    color: "var(--citrus-lime)",
    body: "Move beyond knowing into doing, through real activities, projects, and challenges.",
    tagline: "Sometimes you don't know what you're capable of until you try.",
  },
  {
    title: "Connect",
    color: "var(--fuchsia-blast)",
    body: "Build meaningful relationships with mentors, peers, and professionals who see what you're becoming.",
    tagline: "Your first conversation can open an entirely new world.",
  },
  {
    title: "Achieve",
    color: "var(--berry-burst)",
    body: "Set meaningful milestones and celebrate the progress that gets you there.",
    tagline: "Small firsts become significant progress.",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          You don&apos;t have to have everything figured out.
          <br />
          <span className="text-gradient-citrus">
            You just need somewhere to begin.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink/60">
          FIRSTS gives you somewhere to explore, develop, practice, and
          connect, while tracking every step of your progress. Because
          becoming doesn&apos;t happen all at once. It happens one first at a
          time.
        </p>
        <Link
          href="/onboarding"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Discover Your Next First
        </Link>
      </Reveal>

      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          What will your next first be?
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-6">
              <span
                className="mb-4 h-2.5 w-2.5 rounded-full"
                style={{ background: p.color, boxShadow: `0 0 12px ${p.color}` }}
              />
              <h3 className="font-display text-lg font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                {p.body}
              </p>
              <p className="mt-4 text-sm italic leading-snug text-ink/45">
                {p.tagline}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
