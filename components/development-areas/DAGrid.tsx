"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { FIRSTS as ALL_FIRSTS, STAGES } from "@/lib/dashboardData";

const BLURBS: Record<string, string> = {
  one: "Understand who you are, what you value, and where you're headed.",
  two: "Shape how you present yourself, online and in person.",
  three: "Learn to apply, interview, and stand out for the right reasons.",
  four: "Build the habits and mindset that make consistency possible.",
  five: "Sharpen how you think, decide, and solve problems.",
  six: "Speak, read, and write with clarity and confidence.",
  seven: "Build the technical skills your field actually runs on.",
  eight: "Develop the interpersonal skills that make you easy to work with.",
  nine: "Expand the vocabulary that sharpens every conversation you have.",
  ten: "Build the relationships and mentorships that open doors.",
  eleven: "Get fluent with the tools and technology your work depends on.",
  twelve: "Learn to lead, even before you have the title.",
  thirteen: "Work well with others toward a shared goal.",
  fourteen: "Plan, organize, and deliver work that actually gets done.",
  fifteen: "Understand how organizations actually work and make decisions.",
  sixteen: "Show up with the professionalism and integrity workplaces expect.",
};

const COLORS = [
  "var(--neon-pink)",
  "var(--sunshine-orange)",
  "var(--citrus-lime)",
  "var(--fuchsia-blast)",
];

export function DAGrid() {
  return (
    <section className="relative bg-paper px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {STAGES.map((stage, i) => {
          const title = stage.label.split(" · ")[1] ?? stage.label;
          const count = ALL_FIRSTS.filter((m) => m.stage === stage.id).length;
          const color = COLORS[i % COLORS.length];
          return (
            <Reveal key={stage.id} delay={(i % 6) * 0.06}>
              <Link href={stage.href} className="group block h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-colors group-hover:border-ink/25">
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        color,
                        background: `color-mix(in oklab, ${color} 14%, white)`,
                      }}
                    >
                      {stage.shortLabel}
                    </span>
                    <span className="text-xs font-semibold text-ink/40">
                      {count} FIRSTS
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">
                    {BLURBS[stage.id]}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-ink/70 transition-colors group-hover:text-ink">
                    Explore {stage.shortLabel} &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
