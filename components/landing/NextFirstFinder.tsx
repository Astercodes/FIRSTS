"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const STARTS = [
  { label: "Understand myself", eyebrow: "Start with what matters", title: "What makes something feel worth doing?", prompt: "Think of a moment you felt proud of your work. What mattered most: the impact, the creativity, the independence, or the people?", steps: ["Name the moment.", "Notice the value behind it.", "Explore where that value could take you."], module: "Core Values Audit", href: "/dashboard/stage/1", color: "var(--neon-pink)" },
  { label: "Explore a direction", eyebrow: "Turn curiosity into clarity", title: "What would you like to know about a different kind of work?", prompt: "Choose an industry that catches your attention. Look beyond job titles: what problems do people solve there, and which ones interest you?", steps: ["Choose one field to explore.", "Find out what the work involves.", "Capture what you want to investigate next."], module: "Industry Insight", href: "/dashboard/stage/8", color: "var(--sunshine-orange)" },
  { label: "Make a plan", eyebrow: "Give your next step a purpose", title: "What can you build on, and what could help you move forward?", prompt: "Start with one strength you can use today. Then identify an opportunity to practice it and one obstacle you can prepare for.", steps: ["Recognize your strengths.", "Look at the opportunities around you.", "Choose one practical next step."], module: "Career SWOT Analysis", href: "/dashboard/stage/12", color: "var(--lime-zest)" },
] as const;

export function NextFirstFinder() {
  const [selected, setSelected] = useState(0);
  const start = STARTS[selected];
  return (
    <section className="marketing-section next-first-finder bg-paper px-6" id="find-your-first" aria-labelledby="finder-heading">
      <div className="mx-auto max-w-6xl">
        <Reveal className="showcase-heading">
          <div><p className="eyebrow">Find your next first</p><h2 id="finder-heading" className="font-display text-4xl font-semibold sm:text-5xl">A little curiosity.<br />A place to begin.</h2></div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">You don&apos;t need the whole plan. Choose what would help you today, and start with one good question.</p>
        </Reveal>
        <div className="showcase-tabs" role="group" aria-label="What would help you today?">
          {STARTS.map((item, index) => <button key={item.label} type="button" aria-pressed={selected === index} aria-controls="first-suggestion" onClick={() => setSelected(index)} className={selected === index ? "is-selected" : ""}><span className="tab-number">0{index + 1}</span>{item.label}</button>)}
        </div>
        <div id="first-suggestion" className="finder-panel" style={{ "--finder-accent": start.color } as CSSProperties} aria-live="polite" aria-atomic="true">
          <div className="finder-question" key={start.label}>
            <div className="finder-orbit" aria-hidden="true"><span /><span /><span /></div>
            <p className="finder-kicker">{start.eyebrow}</p>
            <h3 className="font-display">{start.title}</h3>
            <p className="finder-prompt">{start.prompt}</p>
          </div>
          <div className="finder-action">
            <p className="eyebrow">Try this first</p>
            <ol>{start.steps.map((step, index) => <li key={step}><span aria-hidden="true">0{index + 1}</span>{step}</li>)}</ol>
            <Link href={start.href} className="finder-link">Explore {start.module}<span aria-hidden="true">↗</span></Link>
            <p className="finder-footnote">A starting point for reflection. Your direction is yours to choose.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
