"use client";

import { Reveal } from "@/components/ui/Reveal";

export function FIEcosystem() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          And when students have direction?
        </h2>
        <p className="mt-5 font-display text-xl font-medium text-ink/80">
          Development can go deeper.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          FIRSTS and First Leap help students discover, explore, build
          foundational capabilities, and move toward direction. Once a
          participant knows the professional or business direction they
          want to pursue, the next developmental question changes from
          &ldquo;Where should I go?&rdquo; to{" "}
          <strong className="text-ink">
            &ldquo;What must I become capable of doing to succeed
            there?&rdquo;
          </strong>
        </p>
      </Reveal>

      <Reveal delay={0.12} className="mx-auto mt-10 max-w-xl rounded-2xl border border-dashed border-ink/15 bg-paper-dim/60 p-6 text-center">
        <span className="inline-flex rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
          Coming next
        </span>
        <p className="mt-4 text-sm leading-relaxed text-ink/60">
          That is the role of IPFS, the deeper professional formation and
          capability-building program delivered through the Robust
          digital platform. It will eventually connect institutional
          development to role-specific preparation, projects, assessment,
          professional mentoring, experience, and evidence.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          FIRSTS develops broadly. First Leap creates direction. IPFS
          builds deeper capability.
        </p>
      </Reveal>
    </section>
  );
}
