"use client";

import { Reveal } from "@/components/ui/Reveal";

export function FLNextStage() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          And then?
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Clarity tells you where to go. Capability prepares you to operate
          there.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Suppose First Leap helps you discover: &ldquo;I want to become a
          Business Analyst.&rdquo; That is a major milestone. But knowing
          your direction and being capable of performing in that direction
          are two different things.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          You may now need to learn how business analysts actually work,
          how to gather requirements, analyze processes, work with
          stakeholders, use professional tools, document findings, solve
          business problems, communicate recommendations, complete real
          projects, and demonstrate your capability to an employer.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          That is a different stage of development.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl">
        <div className="rounded-3xl border border-dashed border-ink/15 bg-white p-8 text-center">
          <span className="inline-flex rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
            Coming next
          </span>
          <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
            IPFS
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            The next-stage professional formation and capability-building
            program for people ready to develop the knowledge, skills,
            tools, behaviors, experiences, and evidence required for their
            chosen direction.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            First Leap helps you answer &ldquo;Where am I going?&rdquo;
            IPFS helps you answer &ldquo;What must I become capable of
            doing to succeed there?&rdquo;
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/45">
            Delivered through its own digital platform, ROBUST. Details on
            the way.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
