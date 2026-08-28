"use client";

import { useState } from "react";
import { proposeSlot, confirmSlot, removeSlot, slotsForCandidate, useInterviewSlots } from "@/lib/schedulingStore";

function formatSlot(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

export function SchedulingPanel({ candidateId, candidateName }: { candidateId: string; candidateName: string }) {
  const allSlots = useInterviewSlots();
  const slots = slotsForCandidate(allSlots, candidateId);
  const [draft, setDraft] = useState("");

  function handlePropose() {
    if (!draft) return;
    proposeSlot(candidateId, draft);
    setDraft("");
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-7">
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
        Interview scheduling
      </p>
      <p className="mb-4 text-sm text-ink/55">
        Propose times here instead of a separate email thread. There&apos;s no live calendar sync
        behind this, so mark a slot confirmed once {candidateName.split(" ")[0]} has actually agreed
        to it out of band.
      </p>

      {slots.length > 0 && (
        <div className="mb-4 space-y-2.5">
          {slots.map((s) => (
            <div key={s.id} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-ink/8 bg-paper-dim p-3.5">
              <div>
                <p className="text-sm font-semibold text-ink/80">{formatSlot(s.proposedAt)}</p>
                {s.confirmed && (
                  <span className="text-xs font-semibold" style={{ color: "var(--berry-burst)" }}>
                    Confirmed
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                {!s.confirmed && (
                  <button
                    type="button"
                    onClick={() => confirmSlot(s.id)}
                    className="text-xs font-semibold text-berry-burst hover:underline"
                  >
                    Mark confirmed
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => removeSlot(s.id)}
                  className="text-xs font-medium text-ink/35 hover:text-ink/70"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <input
          type="datetime-local"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
        />
        <button
          type="button"
          onClick={handlePropose}
          disabled={!draft}
          className="shrink-0 rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Propose time
        </button>
      </div>
    </div>
  );
}
