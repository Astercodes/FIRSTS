"use client";

import { useState } from "react";
import { MOMENTUM_STORIES, storyForIndex } from "@/lib/momentumStories";

export function MomentumStories() {
  const [index, setIndex] = useState(0);
  const story = storyForIndex(index);

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Momentum stories
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            Paths other students have taken
          </h2>
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setIndex((i) => i - 1)}
            aria-label="Previous story"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition-colors hover:border-ink/25 hover:text-ink"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => i + 1)}
            aria-label="Next story"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition-colors hover:border-ink/25 hover:text-ink"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[color-mix(in_oklab,var(--berry-burst)_6%,white)] p-5">
        <p className="text-sm font-semibold text-ink">
          {story.descriptor} completed {story.stageLabel} in {story.timeframe}
        </p>
        <p className="mt-1 text-xs font-medium text-ink/45">By doing {story.cadence}.</p>
        <p className="mt-3 text-[15px] italic leading-relaxed text-ink/75">&ldquo;{story.quote}&rdquo;</p>
      </div>

      <p className="mt-3 text-xs text-ink/35">
        Anonymized examples, not a leaderboard. {MOMENTUM_STORIES.length} stories in rotation.
      </p>
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
      <path
        d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
