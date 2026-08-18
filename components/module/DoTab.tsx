"use client";

import { useEffect, useRef, useState } from "react";

const SEED_VALUES = [
  "Honesty",
  "Autonomy",
  "Growth",
  "Balance",
  "Impact",
  "Security",
  "Creativity",
  "Fairness",
];

const SEED_TOP5 = ["Honesty", "Autonomy", "Balance", "Impact", "Fairness"];
const SEED_TOP3 = ["Honesty", "Autonomy", "Balance"];

const SEED_VIOLATIONS: Record<string, string> = {
  Honesty: "Being asked to spin numbers in a report, or watching a teammate get credit for my work without correction.",
  Autonomy: "A manager who reviews every decision before I'm allowed to act, even on things I'm demonstrably good at.",
  Balance: "A culture where staying late is treated as the default, not the exception.",
};

export function DoTab({ color }: { color: string }) {
  const [values, setValues] = useState<string[]>(SEED_VALUES);
  const [draft, setDraft] = useState("");
  const [top5, setTop5] = useState<string[]>(SEED_TOP5);
  const [top3, setTop3] = useState<string[]>(SEED_TOP3);
  const [violations, setViolations] = useState<Record<string, string>>(SEED_VIOLATIONS);
  const [ethicalBoundaries, setEthicalBoundaries] = useState(
    "I won't misrepresent data to a client, and I won't ask someone to work unpaid overtime to cover for understaffing."
  );
  const [conflictAwareness, setConflictAwareness] = useState(
    "Autonomy and Balance can conflict — full autonomy sometimes means more hours, not fewer. When they clash, Balance wins; I'd rather have less control than no evenings."
  );

  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved">("saved");
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setSaveState("saving");
    const t = setTimeout(() => setSaveState("saved"), 700);
    return () => clearTimeout(t);
  }, [values, top5, top3, violations, ethicalBoundaries, conflictAwareness]);

  function addValue() {
    const v = draft.trim();
    if (!v || values.includes(v)) return;
    setValues((prev) => [...prev, v]);
    setDraft("");
  }

  function removeValue(v: string) {
    setValues((prev) => prev.filter((x) => x !== v));
    setTop5((prev) => prev.filter((x) => x !== v));
    setTop3((prev) => prev.filter((x) => x !== v));
  }

  function toggleTop5(v: string) {
    setTop5((prev) => {
      if (prev.includes(v)) {
        setTop3((t3) => t3.filter((x) => x !== v));
        return prev.filter((x) => x !== v);
      }
      if (prev.length >= 5) return prev;
      return [...prev, v];
    });
  }

  function toggleTop3(v: string) {
    setTop3((prev) => {
      if (prev.includes(v)) return prev.filter((x) => x !== v);
      if (prev.length >= 3) return prev;
      return [...prev, v];
    });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink/40">
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              saveState === "saving" ? "bg-[var(--tropical-mango)]" : "bg-[var(--citrus-lime)]"
            }`}
          />
          {saveState === "saving" ? "Saving…" : "Saved"}
        </span>
      </div>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Step 1 · Brainstorm
        </p>
        <p className="mb-4 text-sm text-ink/55">
          Write down every value that comes to mind. No editing yet.
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {values.map((v) => (
            <span
              key={v}
              className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm font-medium text-ink/75"
            >
              {v}
              <button
                onClick={() => removeValue(v)}
                aria-label={`Remove ${v}`}
                className="text-ink/30 transition-colors hover:text-ink/70"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addValue())}
            placeholder="Add a value…"
            className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          />
          <button
            onClick={addValue}
            className="rounded-2xl px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: color }}
          >
            Add
          </button>
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Step 2 · Narrow to your top 5
        </p>
        <p className="mb-4 text-sm text-ink/55">
          Tap up to 5 — the ones you&apos;d defend even when inconvenient. ({top5.length}/5)
        </p>
        <div className="flex flex-wrap gap-2">
          {values.map((v) => {
            const active = top5.includes(v);
            return (
              <button
                key={v}
                onClick={() => toggleTop5(v)}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                style={
                  active
                    ? { borderColor: color, color, background: `color-mix(in oklab, ${color} 14%, white)` }
                    : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                }
              >
                {v}
              </button>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Step 3 · Narrow to your top 3 non-negotiables
        </p>
        <p className="mb-4 text-sm text-ink/55">
          From your top 5, the ones a job would have to violate before you&apos;d leave. ({top3.length}/3)
        </p>
        <div className="flex flex-wrap gap-2">
          {top5.map((v) => {
            const active = top3.includes(v);
            return (
              <button
                key={v}
                onClick={() => toggleTop3(v)}
                className="rounded-full px-3.5 py-1.5 text-sm font-semibold transition-all"
                style={
                  active
                    ? { background: color, color: "white" }
                    : { background: "var(--paper-dim)", color: "rgba(11,4,16,0.55)" }
                }
              >
                {v}
              </button>
            );
          })}
          {top5.length === 0 && (
            <p className="text-sm text-ink/40">Select your top 5 first.</p>
          )}
        </div>
      </section>

      {top3.length > 0 && (
        <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Step 4 · What would a violation look like?
          </p>
          <p className="mb-4 text-sm text-ink/55">
            Be specific — day-to-day, not abstract.
          </p>
          <div className="space-y-4">
            {top3.map((v) => (
              <label key={v} className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">{v}</span>
                <textarea
                  value={violations[v] ?? ""}
                  onChange={(e) => setViolations((prev) => ({ ...prev, [v]: e.target.value }))}
                  rows={2}
                  placeholder={`What would violate ${v}, specifically?`}
                  className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
                />
              </label>
            ))}
          </div>
        </section>
      )}

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Step 5 · Ethical boundaries
        </p>
        <p className="mb-3 text-sm text-ink/55">The lines you won&apos;t cross, regardless of incentive.</p>
        <textarea
          value={ethicalBoundaries}
          onChange={(e) => setEthicalBoundaries(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
        />
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Step 6 · Conflict awareness
        </p>
        <p className="mb-3 text-sm text-ink/55">Where might your own values collide with each other?</p>
        <textarea
          value={conflictAwareness}
          onChange={(e) => setConflictAwareness(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
        />
      </section>
    </div>
  );
}
