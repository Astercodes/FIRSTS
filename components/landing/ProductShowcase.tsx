"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const VIEWS = [
  { id: "dashboard", label: "Your growth", title: "See your next step. And the bigger picture.", description: "Your stages, momentum, and next first come together in one personal workspace.", href: "/dashboard" },
  { id: "portfolio", label: "Your evidence", title: "Make your progress something you can show.", description: "Bring your completed firsts, reflections, and achievements into your portfolio.", href: "/dashboard/portfolio" },
  { id: "advisor", label: "Your community", title: "A clearer view for the people in your corner.", description: "Give advisors a focused workspace for cohorts, engagement, and the next conversation.", href: "/advisor" },
];

export function ProductShowcase() {
  const [selected, setSelected] = useState(0);
  const view = VIEWS[selected];
  return (
    <section className="marketing-section product-showcase bg-paper px-6 py-24" id="platform-preview">
      <div className="mx-auto max-w-6xl">
        <Reveal className="showcase-heading">
          <div>
            <p className="eyebrow">A look inside FIRSTS</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Your future.<br />A little more in focus.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">From your first reflection to a portfolio of real progress. A connected space for everything you&apos;re becoming.</p>
        </Reveal>
        <div className="showcase-tabs" role="group" aria-label="Choose a platform preview">
          {VIEWS.map((item, index) => (
            <button key={item.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={selected === index ? "is-selected" : ""}>
              <span className="tab-number">0{index + 1}</span>{item.label}
            </button>
          ))}
        </div>
        <div className="product-browser" aria-live="polite">
          <div className="browser-toolbar"><span className="browser-dots" aria-hidden="true">● ● ●</span><span>FIRSTS / {view.label}</span><span className="text-ink/50">Product preview</span></div>
          <div className="product-screenshot" key={view.id}>
            <Image src={`/images/preview-${view.id}.webp`} alt={`FIRSTS ${view.id} screenshot showing the actual platform with example data`} width={1440} height={1000} sizes="(max-width: 1200px) 95vw, 1152px" className="h-auto w-full" />
          </div>
        </div>
        <div className="showcase-caption">
          <div><h3 className="font-display text-xl font-semibold">{view.title}</h3><p className="mt-2 text-sm text-ink/60">{view.description}</p><p className="mt-2 text-xs text-ink/45">Actual platform screens. Example data shown.</p></div>
          <Link className="inline-flex shrink-0 items-center gap-3 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold hover:bg-ink hover:text-paper" href={view.href}>Explore the workspace <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
