"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { AudienceConfig } from "@/lib/audienceContent";

export function AudienceHighlight({ config }: { config: AudienceConfig }) {
  const section = config.partnerSection;
  if (!section) return null;

  return (
    <section className="relative bg-paper px-6 py-24">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-ink/10 p-10 sm:p-14">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: config.color }}
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: config.color }}
            >
              {section.kicker}
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/60">
              {section.body}
            </p>
            <Link
              href={section.cta.href}
              className="mt-8 inline-flex rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{ background: config.color }}
            >
              {section.cta.label}
            </Link>
          </div>

          <ul className="space-y-3">
            {section.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-paper-dim p-4 text-[15px] text-ink/75"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: config.color }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
