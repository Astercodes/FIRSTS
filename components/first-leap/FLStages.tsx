"use client";

import { Reveal } from "@/components/ui/Reveal";

const STAGES = [
  {
    number: "01",
    title: "Discover Yourself",
    color: "var(--neon-pink)",
    intro: "Before choosing where to go, understand who is going.",
    listLabel: "Explore your:",
    items: [
      "Strengths",
      "Interests",
      "Values",
      "Personality",
      "Natural abilities",
      "Skills",
      "Motivations",
      "Curiosities",
      "Experiences",
      "Preferences",
      "Aspirations",
      "Working style",
      "Goals",
      "Areas for growth",
    ],
    closing:
      "You begin building a clearer picture of who you are and who you could become.",
  },
  {
    number: "02",
    title: "Explore Possibilities",
    color: "var(--sunshine-orange)",
    intro: "Your future should not be limited to what you already know exists.",
    listLabel: "Explore:",
    items: [
      "Careers",
      "Professions",
      "Industries",
      "Roles",
      "Businesses",
      "Entrepreneurship",
      "Problems worth solving",
      "Emerging opportunities",
      "Different ways of working",
      "Different ways of creating value",
    ],
    extra:
      "Meet people. Ask questions. Explore unfamiliar possibilities. Challenge assumptions. Discover paths you may never have considered.",
    closing:
      "You cannot intentionally choose what you have never had the opportunity to discover.",
  },
  {
    number: "03",
    title: "Experience Before You Decide",
    color: "var(--citrus-lime)",
    intro: "Reading about something and experiencing it are not the same.",
    quote: {
      before: "That sounds interesting.",
      after: "I've tried something connected to it.",
    },
    extra:
      "Through activities, challenges, projects, conversations, simulations, observations, exposure experiences, and real-world encounters, you begin testing your interests against experience.",
    listLabel: "You might discover:",
    items: [
      "I really enjoy this.",
      "I'm good at this.",
      "I thought I would like this, but I don't.",
      "I never knew this existed.",
      "I want to learn more.",
      "This could actually be for me.",
    ],
    closing: "Every discovery gives you better information for your next decision.",
  },
  {
    number: "04",
    title: "Choose Your Direction",
    color: "var(--fuchsia-blast)",
    intro: "Eventually, exploration should lead somewhere.",
    extra:
      "First Leap helps you bring together what you have discovered about yourself and what you have discovered about the world around you.",
    listLabel: "",
    items: [
      "You reflect.",
      "You compare.",
      "You investigate.",
      "You seek counsel.",
      "You test possibilities.",
      "You identify gaps.",
    ],
    closing:
      "And then you begin making an intentional choice about the direction you want to pursue. Not necessarily a decision about the rest of your life. A decision about your next meaningful direction. That is your First Leap.",
  },
];

export function FLStages() {
  return (
    <section id="what-is-first-leap" className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          What is First Leap?
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          A guided program delivered through FIRSTS.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          It is designed to help you move through four important stages.
        </p>
      </Reveal>

      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        {STAGES.map((stage, i) => (
          <Reveal key={stage.title} delay={i * 0.08}>
            <div className="rounded-3xl border border-ink/10 bg-white p-8">
              <div className="flex items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    color: stage.color,
                    background: `color-mix(in oklab, ${stage.color} 14%, white)`,
                  }}
                >
                  {stage.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {stage.title}
                </h3>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                {stage.intro}
              </p>

              {stage.quote && (
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                  First Leap gives you opportunities to move from{" "}
                  <span className="italic text-ink/80">
                    &ldquo;{stage.quote.before}&rdquo;
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-ink">
                    &ldquo;{stage.quote.after}&rdquo;
                  </span>
                  .
                </p>
              )}

              {stage.extra && (
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                  {stage.extra}
                </p>
              )}

              {stage.listLabel && (
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
                  {stage.listLabel}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {stage.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm text-ink/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 border-t border-ink/10 pt-5 text-[15px] font-medium leading-relaxed text-ink/80">
                {stage.closing}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
