"use client";

import { useState } from "react";
import Link from "next/link";
import { STAGES, type StageId } from "@/lib/dashboardData";
import {
  stageMatchBySponsorship,
  sponsoredInstitutions,
  candidateInstitutions,
  matchingSharedCandidates,
} from "@/lib/talentPool";

const ACCENT = "var(--pink-grapefruit)";

export function TalentPoolView() {
  const [institution, setInstitution] = useState<string>("all");
  const [selectedStages, setSelectedStages] = useState<StageId[]>([]);

  const institutions = Array.from(new Set([...sponsoredInstitutions(), ...candidateInstitutions()])).sort();

  function toggleStage(stage: StageId) {
    setSelectedStages((prev) => (prev.includes(stage) ? prev.filter((s) => s !== stage) : [...prev, stage]));
  }

  const cohortMatches = stageMatchBySponsorship(selectedStages).filter(
    (m) => institution === "all" || m.institution === institution
  );
  const totalCohortMatches = cohortMatches.reduce((sum, m) => sum + m.matchCount, 0);
  const sharedMatches = matchingSharedCandidates(selectedStages, institution);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Pre-qualified pipeline
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Talent pool
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/50">
          Filter by school and completed stages to see how deep the bench runs. Named results only
          ever show candidates who chose to share their own portfolio with you, everyone else stays
          a count until they opt in.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="grid gap-5 sm:grid-cols-[240px_1fr]">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Institution
            </label>
            <select
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="all">All institutions</option>
              {institutions.map((inst) => (
                <option key={inst} value={inst}>
                  {inst}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Completed stages
            </label>
            <div className="flex flex-wrap gap-2">
              {STAGES.map((s) => {
                const active = selectedStages.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleStage(s.id)}
                    className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                    style={
                      active
                        ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--pink-grapefruit) 14%, white)" }
                        : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                    }
                  >
                    {s.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Candidates you can view directly</h2>
          <span className="text-sm font-semibold text-ink/40">
            {sharedMatches.length} match{sharedMatches.length === 1 ? "" : "es"}
          </span>
        </div>
        <p className="mb-5 text-xs text-ink/45">Shared their portfolio with you directly, opted in</p>

        {sharedMatches.length === 0 ? (
          <p className="rounded-2xl bg-paper-dim p-5 text-sm text-ink/50">
            No shared candidates match this filter yet. Try fewer stages, or check the aggregate view
            below for how many students across your sponsored cohorts are close.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {sharedMatches.map((c) => (
              <Link
                key={c.id}
                href={`/employer/portfolios/${c.id}`}
                className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper-dim p-4 transition-colors hover:border-ink/20"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--berry-burst))" }}
                >
                  {c.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{c.name}</p>
                  <p className="truncate text-xs text-ink/50">{c.school}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Depth across your sponsored cohorts</h2>
          <span className="text-sm font-semibold text-ink/40">
            {totalCohortMatches} student{totalCohortMatches === 1 ? "" : "s"}
          </span>
        </div>
        <p className="mb-5 text-xs text-ink/45">
          Cohort-level counts only, the same policy as Sponsorships: no individual names or worksheet
          content unless a candidate shares their own portfolio with you.
        </p>

        {cohortMatches.length === 0 ? (
          <p className="rounded-2xl bg-paper-dim p-5 text-sm text-ink/50">
            No sponsored cohorts match this institution filter.
          </p>
        ) : (
          <div className="space-y-3">
            {cohortMatches.map((m) => (
              <div key={m.sponsorshipId} className="rounded-2xl border border-ink/8 bg-paper-dim p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-ink/80">{m.cohortName}</p>
                    <p className="text-xs text-ink/45">
                      {m.institution} · {m.tier}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-ink/70">
                    {m.matchCount} of {m.totalStudents} students
                  </p>
                </div>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-ink/8">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${m.matchPct}%`, background: ACCENT }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <Link
          href="/request-demo?for=employer-intro"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-berry-burst"
        >
          Request warm introductions through a career center →
        </Link>
      </div>
    </div>
  );
}
