"use client";

import { Reveal } from "@/components/ui/Reveal";

const SITUATIONS = [
  "Some do not know what they want to pursue.",
  "Some know the destination but not how to get there.",
  "Some need professional skills.",
  "Some need their first meaningful experience.",
  "Some want to build careers.",
  "Some want to build businesses.",
  "Some are already highly motivated but lack structure.",
  "Others do not know where to begin.",
];

export function FIIntro() {
  return (
    <section className="relative bg-paper px-6 py-24">
      <Reveal className="mx-auto max-w-2xl">
        <div className="grid gap-2.5 sm:grid-cols-2">
          {SITUATIONS.map((s) => (
            <p
              key={s}
              className="rounded-2xl border border-ink/10 bg-white px-5 py-3.5 text-sm font-medium text-ink/70"
            >
              {s}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-lg font-medium leading-relaxed text-ink">
          FIRSTS gives institutions a shared development infrastructure
          that helps students intentionally build the knowledge, skills,
          habits, experiences, relationships, confidence, and evidence
          they need for where they are going.
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-ink/60">
          From discovery to direction. From development to experience.
          From first year through graduation, and beyond.
        </p>
      </Reveal>
    </section>
  );
}
