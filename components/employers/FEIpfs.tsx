"use client";

import { Reveal } from "@/components/ui/Reveal";

export function FEIpfs() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          From direction to deeper capability.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          A participant may use FIRSTS and First Leap to discover{" "}
          <strong className="text-ink">
            &ldquo;I want to become a Business Analyst,&rdquo;
          </strong>{" "}
          <strong className="text-ink">
            &ldquo;I want to work in Cybersecurity,&rdquo;
          </strong>{" "}
          or{" "}
          <strong className="text-ink">
            &ldquo;I want to build in Marketing.&rdquo;
          </strong>{" "}
          That creates direction. But employers ultimately need something
          deeper: can this person actually perform?
        </p>
      </Reveal>

      <Reveal delay={0.12} className="mx-auto mt-10 max-w-xl rounded-2xl border border-dashed border-ink/15 bg-paper-dim/60 p-6 text-center">
        <span className="inline-flex rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
          Coming next
        </span>
        <p className="mt-4 text-sm leading-relaxed text-ink/60">
          That is where IPFS fits: the professional formation and
          capability-building program designed to help participants
          develop the knowledge, skills, tools, behaviors, experiences,
          and evidence required for a chosen direction, delivered
          through the Robust platform. Employers will eventually
          participate by helping validate role-specific capability
          frameworks, contribute projects, provide mentors, review
          participant work, offer workplace experiences, assess
          readiness, and connect qualified participants to
          opportunities.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          First Leap helps people choose a direction. IPFS helps build
          capability for it.
        </p>
        <p className="mt-2 font-display text-lg font-semibold text-ink">
          Employers help keep that capability connected to reality.
        </p>
      </Reveal>
    </section>
  );
}
