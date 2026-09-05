"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const MILESTONES = [
  "First Strength Discovery",
  "First Career Conversation",
  "First Mentor",
  "First Networking Event",
  "First Professional Connection",
  "First Career Comparison",
  "First Business Idea",
  "First Customer Conversation",
  "First Professional Project",
  "First Resume",
  "First LinkedIn Profile",
  "First Portfolio",
  "First Internship Application",
  "First Interview",
  "First Internship",
  "First Leadership Responsibility",
  "First Business Experiment",
  "First Professional Presentation",
  "First Job Offer",
];

export function FIMilestones() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Turn activities into developmental milestones.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Students complete hundreds of meaningful first experiences
          during college. Most institutions never capture them as part
          of one developmental story. FIRSTS helps students recognize
          milestones such as:
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {MILESTONES.map((m) => (
          <span
            key={m}
            className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
          >
            {m}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.18} className="mx-auto mt-10 max-w-lg text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          Instead of asking only{" "}
          <strong className="text-ink">&ldquo;Did the student attend?&rdquo;</strong>
        </p>
        <p className="mt-3 font-display text-lg font-semibold text-ink">
          FIRSTS helps you ask, &ldquo;What developmental first did the
          student actually take?&rdquo;
        </p>
        <Link
          href="/dashboard/portfolio"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Explore FIRSTS Milestones
        </Link>
      </Reveal>
    </section>
  );
}
