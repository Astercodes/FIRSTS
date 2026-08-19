"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { AudienceConfig } from "@/lib/audienceContent";

export function AudienceCTA({ config }: { config: AudienceConfig }) {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(120deg, ${config.colorSecondary}, ${config.color} 60%, var(--sunshine-orange))`,
        }}
      />
      <div className="noise-layer" aria-hidden />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center text-paper">
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {config.ctaHeadline}
        </h2>
        <p className="mt-4 max-w-lg text-[15px] text-paper/85">{config.ctaBody}</p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href={config.primaryCta.href}
            className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            {config.primaryCta.label}
          </Link>
          <Link
            href="/"
            className="rounded-full border border-paper/40 px-8 py-3.5 text-sm font-semibold text-paper backdrop-blur transition-colors hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
