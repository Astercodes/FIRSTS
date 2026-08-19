"use client";

import { Reveal } from "@/components/ui/Reveal";
import type { AudienceConfig } from "@/lib/audienceContent";

export function AudienceFeatures({ config }: { config: AudienceConfig }) {
  return (
    <section className="relative bg-paper px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 max-w-2xl">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: config.color }}
          >
            What you get
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built around how you&apos;ll actually use it.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {config.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-15 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-25"
                  style={{ background: config.color }}
                  aria-hidden
                />
                <h3 className="font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink/60">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
