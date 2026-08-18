"use client";

import { Reveal } from "@/components/ui/Reveal";

const FIRSTS = [
  "Core Values Audit",
  "Career Vision",
  "Personal Purpose Awareness",
  "Personal Brand Narrative",
  "Strength Inventory",
  "Weakness Awareness",
  "Passion Alignment",
  "Industry Insight",
  "Career Path",
  "Role Research",
  "Salary Benchmarking",
  "Career SWOT Analysis",
  "Skill Growth Plan",
  "Personality Assessment",
  "Work Style Awareness",
  "Thinking & Decision-Making",
  "Learning Style Awareness",
  "Productivity & Focus System",
];

const CATEGORIES = [
  {
    label: "A. Self-Discovery & Values",
    range: "01–07",
    color: "var(--neon-pink)",
    items: [
      "Core Values Audit",
      "Career Vision",
      "Personal Purpose Awareness",
      "Personal Brand Narrative",
      "Strength Inventory",
      "Weakness Awareness",
      "Passion Alignment",
    ],
  },
  {
    label: "B. Market & Role Research",
    range: "08–11",
    color: "var(--sunshine-orange)",
    items: ["Industry Insight", "Career Path", "Role Research", "Salary Benchmarking"],
  },
  {
    label: "C. Synthesis & Growth",
    range: "12–13",
    color: "var(--citrus-lime)",
    items: ["Career SWOT Analysis", "Skill Growth Plan"],
  },
  {
    label: "D. Style & Systems",
    range: "14–18",
    color: "var(--fuchsia-blast)",
    items: [
      "Personality Assessment",
      "Work Style Awareness",
      "Thinking & Decision-Making",
      "Learning Style Awareness",
      "Productivity & Focus System",
    ],
  },
];

export function StagesPreview() {
  return (
    <section id="stages" className="relative overflow-hidden bg-paper-dim py-28">
      <Reveal className="mx-auto mb-14 max-w-2xl px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-berry-burst">
          Stage One · Self-Awareness &amp; Career Clarity
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          18 FIRSTS, laid out so clarity actually compounds.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
          Each module unlocks the next — values inform vision, vision informs
          SWOT, SWOT informs your growth plan. Or switch on Free Explore Mode
          and jump around.
        </p>
      </Reveal>

      {/* marquee */}
      <div className="relative mb-16 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-3 pr-3">
          {[...FIRSTS, ...FIRSTS].map((f, i) => (
            <span
              key={`${f}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70 shadow-sm"
            >
              <span className="text-xs font-bold text-neon-pink">
                {String((i % 18) + 1).padStart(2, "0")}
              </span>
              {f}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2">
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.label} delay={i * 0.1}>
            <div className="h-full rounded-3xl border border-ink/10 bg-white p-7">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {cat.label}
                </h3>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    color: cat.color,
                    background: `color-mix(in oklab, ${cat.color} 14%, white)`,
                  }}
                >
                  {cat.range}
                </span>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-ink/70"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: cat.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
