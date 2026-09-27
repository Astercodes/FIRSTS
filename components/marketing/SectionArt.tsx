import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SECTION_ART } from "@/lib/sectionArt";

export function SectionArt({ id }: { id: keyof typeof SECTION_ART }) {
  const art = SECTION_ART[id];
  return (
    <Reveal className={`story-art story-art-${art.kind}`}>
      <figure className={`section-art craft-${art.kind}`} style={{ "--craft-accent": art.color } as CSSProperties}>
        {art.kind === "photo" ? (
          <div className="section-art-photo"><Image src={`/images/stories/${art.image}.webp`} alt={art.alt ?? art.title} fill sizes="(max-width: 767px) 90vw, 560px" className="object-cover" /></div>
        ) : (
          <div className="craft-composition">
            <div className="craft-heading"><span>{art.title}</span><span aria-hidden="true">↗</span></div>
            {art.kind === "network" && <div className="craft-hub">{art.center ?? "You"}</div>}
            {art.kind === "loop" && <div className="craft-loop-arrow" aria-hidden="true">↻</div>}
            <ol className="craft-items">{art.items?.map((item, index) => <li key={item}><span className="craft-index" aria-hidden="true">0{index + 1}</span><span>{item}</span></li>)}</ol>
            {art.kind === "privacy" && <div className="craft-boundary"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="6" y="10" width="12" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg><span>{art.center ?? "Sharing stays intentional"}</span></div>}
          </div>
        )}
        <figcaption><span>{art.caption}</span><span className="art-caption-line" aria-hidden="true" /></figcaption>
      </figure>
    </Reveal>
  );
}

export function ClosingSteps({ steps }: { steps: readonly string[] }) {
  return <div className="closing-steps" aria-label="Your next steps">{steps.map((step, i) => <span key={step}><b aria-hidden="true">0{i + 1}</b>{step}</span>)}</div>;
}
