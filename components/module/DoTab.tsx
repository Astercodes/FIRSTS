"use client";

import { useEffect, useRef, useState } from "react";
import { MarkCompleteButton } from "@/components/module/MarkCompleteButton";

const VALUE_BANK = [
  "Achievement", "Autonomy", "Stability", "Wealth", "Recognition", "Impact", "Service", "Faith",
  "Creativity", "Innovation", "Security", "Adventure", "Learning", "Family", "Flexibility",
  "Influence", "Integrity", "Excellence", "Community", "Freedom", "Prestige", "Leadership",
  "Balance", "Spiritual Growth", "Justice", "Collaboration", "Independence", "Mastery", "Legacy",
];

const SEED_TOP5 = ["Integrity", "Autonomy", "Balance", "Impact", "Family"];
const SEED_TOP3 = ["Integrity", "Autonomy", "Balance"];

type ValueFilter = {
  looksLike: string;
  violates: string;
  warningSigns: string;
  recentDecision: string;
};

const SEED_FILTERS: Record<string, ValueFilter> = {
  Integrity: {
    looksLike: "Being able to say what actually happened, even when it's inconvenient.",
    violates: "Being asked to spin numbers, or watching someone take credit for my work without correction.",
    warningSigns: "A manager who says one thing in meetings and does another privately.",
    recentDecision: "Reflected it when I flagged an error in a group project instead of letting it slide. Ignored it when I stayed quiet about unequal credit once.",
  },
  Autonomy: {
    looksLike: "Being trusted to make a call without every decision needing sign-off.",
    violates: "A manager who reviews every decision before I'm allowed to act, even on things I'm demonstrably good at.",
    warningSigns: "Being asked to CC someone on every small decision \"just to be safe.\"",
    recentDecision: "Reflected it when I pushed to own a feature end-to-end. Ignored it when I asked permission for something I didn't need to.",
  },
  Balance: {
    looksLike: "Evenings and weekends that are actually mine, most of the time.",
    violates: "A culture where staying late is treated as the default, not the exception.",
    warningSigns: "Job postings that describe the team as \"like a family\" or brag about \"hustle culture.\"",
    recentDecision: "Reflected it when I left on time for a friend's event. Ignored it when I answered work messages at midnight out of guilt.",
  },
};

const SEED_INDUSTRY = "Fintech / fraud analytics";

export function DoTab({ color, moduleId }: { color: string; moduleId: number }) {
  const [values, setValues] = useState<string[]>([...SEED_TOP5, "Excellence", "Learning"]);
  const [draft, setDraft] = useState("");
  const [top5, setTop5] = useState<string[]>(SEED_TOP5);
  const [top3, setTop3] = useState<string[]>(SEED_TOP3);
  const [filters, setFilters] = useState<Record<string, ValueFilter>>(SEED_FILTERS);

  const [neverIndustry, setNeverIndustry] = useState("Industries that profit from misleading customers about what they're actually paying for.");
  const [neverCompromise, setNeverCompromise] = useState("Honesty with my team, even if paid more to stay quiet.");
  const [leaveImmediately, setLeaveImmediately] = useState("I'm asked to do something illegal or knowingly deceive a customer.");
  const [successWithout, setSuccessWithout] = useState("Integrity is failure to me, no matter the title or pay.");

  const [alignmentIndustry, setAlignmentIndustry] = useState(SEED_INDUSTRY);
  const [alignmentSupports, setAlignmentSupports] = useState("Impact and Autonomy — the work is analytical and largely self-directed.");
  const [alignmentStrained, setAlignmentStrained] = useState("Balance, since fraud teams sometimes run lean during incident spikes.");
  const [alignmentTension, setAlignmentTension] = useState("Temporary — a growth season, not a permanent pattern, based on what alumni told me.");

  const [conflictPair, setConflictPair] = useState("Autonomy vs. Balance");
  const [conflictPriority, setConflictPriority] = useState("Balance");
  const [conflictWhy, setConflictWhy] = useState("Full autonomy sometimes means more hours, not fewer — I'd rather have less control than no evenings.");

  const [saveState, setSaveState] = useState<"saving" | "saved">("saved");
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setSaveState("saving");
    const t = setTimeout(() => setSaveState("saved"), 700);
    return () => clearTimeout(t);
  }, [values, top5, top3, filters, neverIndustry, neverCompromise, leaveImmediately, successWithout, alignmentIndustry, alignmentSupports, alignmentStrained, alignmentTension, conflictPair, conflictPriority, conflictWhy]);

  function toggleValue(v: string) {
    setValues((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));
  }

  function addCustomValue() {
    const v = draft.trim();
    if (!v || values.includes(v)) return;
    setValues((prev) => [...prev, v]);
    setDraft("");
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

  function updateFilter(value: string, field: keyof ValueFilter, text: string) {
    setFilters((prev) => ({
      ...prev,
      [value]: { ...(prev[value] ?? { looksLike: "", violates: "", warningSigns: "", recentDecision: "" }), [field]: text },
    }));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-end">
        <span className="flex items-center gap-1.5 text-xs font-medium text-ink/40">
          <span className={`h-1.5 w-1.5 rounded-full transition-colors ${saveState === "saving" ? "bg-[var(--tropical-mango)]" : "bg-[var(--citrus-lime)]"}`} />
          {saveState === "saving" ? "Saving…" : "Saved"}
        </span>
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/35">Section 1 · Values discovery exercise</p>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-sm font-semibold text-ink">Initial value brainstorm</p>
        <p className="mb-4 text-sm text-ink/55">Circle or highlight the words below that resonate with you, then add your own.</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {VALUE_BANK.map((v) => {
            const active = values.includes(v);
            return (
              <button
                key={v}
                onClick={() => toggleValue(v)}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                style={active ? { borderColor: color, color, background: `color-mix(in oklab, ${color} 14%, white)` } : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }}
              >
                {v}
              </button>
            );
          })}
          {values.filter((v) => !VALUE_BANK.includes(v)).map((v) => (
            <span key={v} className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium" style={{ color, background: `color-mix(in oklab, ${color} 14%, white)` }}>
              {v}
              <button onClick={() => toggleValue(v)} className="opacity-50 hover:opacity-100">×</button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCustomValue())}
            placeholder="Add your own…"
            className="flex-1 rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          />
          <button onClick={addCustomValue} className="rounded-2xl px-5 py-2.5 text-sm font-semibold text-white" style={{ background: color }}>Add</button>
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-sm font-semibold text-ink">Narrow to your top 5 core values</p>
        <p className="mb-4 text-sm text-ink/55">({top5.length}/5)</p>
        <div className="flex flex-wrap gap-2">
          {values.map((v) => {
            const active = top5.includes(v);
            return (
              <button
                key={v}
                onClick={() => toggleTop5(v)}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                style={active ? { borderColor: color, color, background: `color-mix(in oklab, ${color} 14%, white)` } : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }}
              >
                {v}
              </button>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-1 text-sm font-semibold text-ink">Now reduce to your top 3 non-negotiables</p>
        <p className="mb-4 text-sm text-ink/55">({top3.length}/3)</p>
        <div className="flex flex-wrap gap-2">
          {top5.map((v) => {
            const active = top3.includes(v);
            return (
              <button
                key={v}
                onClick={() => toggleTop3(v)}
                className="rounded-full px-3.5 py-1.5 text-sm font-semibold transition-all"
                style={active ? { background: color, color: "white" } : { background: "var(--paper-dim)", color: "rgba(11,4,16,0.55)" }}
              >
                {v}
              </button>
            );
          })}
          {top5.length === 0 && <p className="text-sm text-ink/40">Select your top 5 first.</p>}
        </div>
      </section>

      {top3.length > 0 && (
        <>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/35">Section 2 · Non-negotiable filter</p>
          {top3.map((v) => {
            const f = filters[v] ?? { looksLike: "", violates: "", warningSigns: "", recentDecision: "" };
            return (
              <section key={v} className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
                <p className="mb-4 text-sm font-semibold text-ink">Value: {v}</p>
                <div className="space-y-3">
                  <label className="block">
                    <span className="mb-1 block text-xs font-medium text-ink/50">What does this look like in a job?</span>
                    <textarea value={f.looksLike} onChange={(e) => updateFilter(v, "looksLike", e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-medium text-ink/50">What violates this value?</span>
                    <textarea value={f.violates} onChange={(e) => updateFilter(v, "violates", e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-medium text-ink/50">What warning signs should I watch for?</span>
                    <textarea value={f.warningSigns} onChange={(e) => updateFilter(v, "warningSigns", e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-medium text-ink/50">What recent decision reflected this value? Which decision ignored it?</span>
                    <textarea value={f.recentDecision} onChange={(e) => updateFilter(v, "recentDecision", e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
                  </label>
                </div>
              </section>
            );
          })}
        </>
      )}

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/35">Section 3 · Ethical boundaries</p>
      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8 space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">I will never work in an industry that…</span>
          <textarea value={neverIndustry} onChange={(e) => setNeverIndustry(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">I will not compromise on … even if paid more</span>
          <textarea value={neverCompromise} onChange={(e) => setNeverCompromise(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">I would leave a job immediately if…</span>
          <textarea value={leaveImmediately} onChange={(e) => setLeaveImmediately(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">Success without … is failure to me</span>
          <textarea value={successWithout} onChange={(e) => setSuccessWithout(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
      </section>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/35">Section 4 · Values vs. career alignment check</p>
      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8 space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">Career or industry I&apos;m considering</span>
          <input value={alignmentIndustry} onChange={(e) => setAlignmentIndustry(e.target.value)} className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">Which of my top 3 values does this support?</span>
          <textarea value={alignmentSupports} onChange={(e) => setAlignmentSupports(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">Which value might be strained?</span>
          <textarea value={alignmentStrained} onChange={(e) => setAlignmentStrained(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">Is the tension temporary (a growth season) or permanent (a misalignment)?</span>
          <textarea value={alignmentTension} onChange={(e) => setAlignmentTension(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
      </section>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/35">Section 5 · Conflict awareness</p>
      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8 space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">My top value conflict is</span>
          <input value={conflictPair} onChange={(e) => setConflictPair(e.target.value)} className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">If forced to choose, I would prioritize</span>
          <input value={conflictPriority} onChange={(e) => setConflictPriority(e.target.value)} className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">Why</span>
          <textarea value={conflictWhy} onChange={(e) => setConflictWhy(e.target.value)} rows={2} className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25" />
        </label>
      </section>

      <MarkCompleteButton moduleId={moduleId} color={color} />
    </div>
  );
}
