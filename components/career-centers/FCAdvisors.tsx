"use client";

import { Reveal } from "@/components/ui/Reveal";

const PREPARED_ON = [
  "Strengths",
  "Values",
  "Career interests",
  "Professional identity",
  "Career comparisons",
  "Networking",
  "Resume development",
  "Interview preparation",
  "Goals",
  "Experiences",
];

const CONVERSATION_MOVES = [
  "Interpretation",
  "Decision-making",
  "Strategy",
  "Problem-solving",
  "Encouragement",
  "Accountability",
  "Next steps",
];

export function FCAdvisors() {
  return (
    <section className="relative bg-paper px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Give advisors better conversations.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          Imagine an appointment that does not begin with{" "}
          <span className="italic">&ldquo;So... what do you want to
          talk about?&rdquo;</span>
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Before meeting with an advisor, students may already have
          completed FIRSTS related to:
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {PREPARED_ON.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
          >
            {item}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-[15px] leading-relaxed text-ink/60">
          When students choose to share relevant outputs, advisors can
          enter the conversation with more context. That allows limited
          appointment time to move faster toward:
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
        {CONVERSATION_MOVES.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-paper-dim px-4 py-2 text-sm font-medium text-ink/70"
          >
            {item}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.25} className="mx-auto mt-10 max-w-lg text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Let FIRSTS prepare the student for the conversation. Let your
          professionals make the conversation valuable.
        </p>
      </Reveal>
    </section>
  );
}
