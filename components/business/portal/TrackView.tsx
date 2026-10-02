import type { BusinessTrack } from "@/lib/businessData";

export function TrackView({ track }: { track: BusinessTrack }) {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="surface-card overflow-hidden rounded-3xl">
        <div className="h-3" style={{ background: track.color }} />
        <div className="p-7">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-ink"
              style={{ background: `color-mix(in oklab, ${track.color} 20%, var(--paper))` }}
            >
              0{track.order}
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">{track.shortLabel}</p>
              <h1 className="font-display text-xl font-semibold text-ink">{track.title}</h1>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink/65">{track.blurb}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {track.focusAreas.map((f) => (
              <span key={f} className="rounded-full bg-paper-dim px-3 py-1 text-xs font-medium text-ink/60">
                {f}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-paper-dim px-4 py-3">
            <span className="mb-1 inline-block rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink/50">
              Coming soon
            </span>
            <p className="text-sm text-ink/65">
              The real exercises, worksheets, and guidance for this track will
              go here once the FIRSTS Business curriculum documents are in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
