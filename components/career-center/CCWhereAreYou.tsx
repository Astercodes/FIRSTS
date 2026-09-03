"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const PATHS = [
  {
    quote: "I have no idea what I want to do.",
    body: "Start with self-discovery and career exploration.",
    cta: "Start Discovering",
    href: "/onboarding",
  },
  {
    quote: "I have a few careers in mind.",
    body: "Research, compare, connect with professionals, and try them.",
    cta: "Compare My Options",
    href: "/onboarding",
  },
  {
    quote: "I think I know what I want, but I'm not sure.",
    body: "Get deeper exposure before making the decision.",
    cta: "Try a Career",
    href: "/onboarding",
  },
  {
    quote: "I need structured help figuring it out.",
    body: "Join First Leap: Career.",
    cta: "Explore First Leap",
    href: "/first-leap#career",
  },
  {
    quote: "I know exactly what profession I want.",
    body: "Begin building role-specific capability through IPFS.",
    cta: "Explore IPFS",
    href: "#ipfs",
  },
  {
    quote: "I'm preparing for an internship or job.",
    body: "Use the Career Toolkit and Opportunity Center.",
    cta: "Get Career Ready",
    href: "/onboarding",
  },
  {
    quote: "I'm actively looking for opportunities.",
    body: "Explore available experiences and opportunities.",
    cta: "Find Opportunities",
    href: "/onboarding",
  },
];

export function CCWhereAreYou() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Where are you right now?
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PATHS.map((p, i) => (
          <Reveal key={p.quote} delay={(i % 6) * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6">
              <p className="font-display text-[15px] font-semibold italic text-ink">
                &ldquo;{p.quote}&rdquo;
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                {p.body}
              </p>
              <Link
                href={p.href}
                className="mt-5 text-sm font-semibold text-berry-burst underline decoration-berry-burst/30 underline-offset-4 transition-colors hover:decoration-berry-burst"
              >
                {p.cta} &rarr;
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
