"use client";

import { Reveal } from "@/components/ui/Reveal";
import type { AudienceConfig } from "@/lib/audienceContent";

export function AudienceScenario({ config }: { config: AudienceConfig }) {
  return (
    <section className="relative bg-paper-dim px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: config.color }}
          >
            How it works
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {config.scenarioTitle}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60">
            {config.scenarioBody}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <ol className="space-y-5">
            {config.steps.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: config.color }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-[15px] font-semibold text-ink">
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
