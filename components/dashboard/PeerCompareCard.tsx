"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/Switch";
import { loadProfile, saveProfile } from "@/lib/profileStore";
import { peerPaceAverage, paceBand } from "@/lib/socialProof";
import { PaceBandPill } from "@/components/dashboard/PaceBandPill";
import type { StageId } from "@/lib/dashboardData";

const GRAD_YEAR_OPTIONS = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate student", "Early professional"];

export function PeerCompareCard({
  stage,
  stageLabel,
  pct,
  primarySignal = false,
}: {
  stage: StageId;
  stageLabel: string;
  pct: number;
  /** True for independent students, who have no school cohort, so this is their only social signal. Reframes the copy accordingly and surfaces the pace band alongside it. */
  primarySignal?: boolean;
}) {
  const band = primarySignal ? paceBand(stage, pct) : null;
  const [optIn, setOptIn] = useState(false);
  const [major, setMajor] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [draftMajor, setDraftMajor] = useState("");
  const [draftGradYear, setDraftGradYear] = useState(GRAD_YEAR_OPTIONS[0]);

  useEffect(() => {
    function sync() {
      const p = loadProfile();
      if (p?.peerCompareOptIn) setOptIn(true);
      if (p?.major) {
        setMajor(p.major);
        setDraftMajor(p.major);
      }
      if (p?.gradYear) {
        setGradYear(p.gradYear);
        setDraftGradYear(p.gradYear);
      }
    }
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function toggleOptIn(v: boolean) {
    setOptIn(v);
    saveProfile({ ...loadProfile(), peerCompareOptIn: v });
  }

  function confirmDetails() {
    setMajor(draftMajor);
    setGradYear(draftGradYear);
    saveProfile({ ...loadProfile(), major: draftMajor, gradYear: draftGradYear, peerCompareOptIn: true });
  }

  const hasDetails = major.trim().length > 0 && gradYear.trim().length > 0;
  const peerAvg = hasDetails ? peerPaceAverage(major, gradYear, stage) : 0;

  return (
    <div className="flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            {primarySignal ? "Students like you, across all of FIRSTS" : "Others like you"}
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            Peer pace comparison
          </h2>
        </div>
        <Switch checked={optIn} onChange={toggleOptIn} label="" />
      </div>

      {primarySignal && (
        <p className="mt-2 text-xs leading-relaxed text-ink/40">
          No school cohort behind your account, so this is the only social signal on your
          dashboard: an anonymized read against everyone on FIRSTS with a similar background,
          not just one school.
        </p>
      )}

      {!optIn && (
        <p className="mt-3 text-sm leading-relaxed text-ink/50">
          Opt in to anonymously compare your pace to students with the same major and grad year.
          Off by default, and nothing is shared unless you turn this on.
        </p>
      )}

      {optIn && !hasDetails && (
        <div className="mt-4 space-y-3">
          <p className="text-sm leading-relaxed text-ink/50">
            Tell us a little about you so the comparison means something. This stays on this
            device.
          </p>
          <input
            value={draftMajor}
            onChange={(e) => setDraftMajor(e.target.value)}
            placeholder="Your major or field"
            className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          />
          <select
            value={draftGradYear}
            onChange={(e) => setDraftGradYear(e.target.value)}
            className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          >
            {GRAD_YEAR_OPTIONS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={confirmDetails}
            disabled={!draftMajor.trim()}
            className="w-full rounded-2xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors disabled:opacity-40"
          >
            Show my comparison
          </button>
        </div>
      )}

      {optIn && hasDetails && (
        <div className="mt-4 flex flex-1 flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs text-ink/45">
              {stageLabel} · {major}, {gradYear.toLowerCase()}
            </p>
            {band && <PaceBandPill band={band} />}
          </div>
          <div className="mt-4 space-y-3">
            <PeerBar label="You" pct={pct} tone="strong" />
            <PeerBar label="Peer average" pct={peerAvg} tone="light" />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink/40">
            {pct >= peerAvg
              ? "You're pacing ahead of students with a similar background. Anonymized and only visible to you."
              : "Peers with a similar background average further along here. Anonymized and only visible to you."}
          </p>
        </div>
      )}
    </div>
  );
}

function PeerBar({ label, pct, tone }: { label: string; pct: number; tone: "light" | "strong" }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-semibold text-ink/55">{label}</span>
        <span className="text-xs font-bold tabular-nums text-ink/70">{pct}%</span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink/6">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.max(pct, pct > 0 ? 3 : 0)}%`,
            background: tone === "strong" ? "var(--berry-burst)" : "color-mix(in oklab, var(--berry-burst) 35%, var(--paper-dim))",
          }}
        />
      </div>
    </div>
  );
}
