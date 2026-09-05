"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function FENoSetup() {
  return (
    <section className="relative bg-paper-dim px-6 py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Nothing for you to set up just to review a portfolio.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          If a candidate shares a FIRSTS portfolio with you, review it
          like any other candidate-provided material. No employer
          account is required simply to consider the evidence a
          participant chooses to share.
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
          For organizations that want deeper engagement, employer
          partnerships can unlock a broader relationship across
          mentoring, experience, sponsorship, talent pipelines, and
          capability development.
        </p>
        <Link
          href="/request-demo?for=employers"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          Request a Demo
        </Link>
      </Reveal>
    </section>
  );
}
