"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CANDIDATE_PORTFOLIOS } from "@/lib/sponsorData";
import { ROLE_TEMPLATES, scoreCandidatesForRole, type RoleFitResult, type RoleTemplate } from "@/lib/roleFit";
import { loadEmployer, MOCK_EMPLOYER } from "@/lib/employerStore";
import { sendRoleFeedback, roleFeedbackForCandidate, useRoleFeedback } from "@/lib/roleFeedbackStore";

const ACCENT = "var(--pink-grapefruit)";

function fitLabel(score: number): string {
  if (score >= 80) return "Strong fit";
  if (score >= 60) return "Solid fit";
  if (score >= 40) return "Partial fit";
  return "Early fit";
}

export function RoleFitView() {
  const [customRole, setCustomRole] = useState<RoleTemplate | null>(null);

  useEffect(() => {
    function sync() {
      const employer = loadEmployer() ?? MOCK_EMPLOYER;
      if (employer.valuedCategories && employer.valuedCategories.length > 0) {
        setCustomRole({
          id: "custom",
          title: `${employer.company}'s priorities`,
          description: "Built from what you tagged as important on your company profile.",
          requirements: employer.valuedCategories.map((category) => ({
            category: category as RoleTemplate["requirements"][number]["category"],
            weight: 1,
          })),
        });
      }
    }
    sync();
  }, []);

  const roles = customRole ? [customRole, ...ROLE_TEMPLATES] : ROLE_TEMPLATES;
  const [roleId, setRoleId] = useState(ROLE_TEMPLATES[0].id);
  const role = roles.find((r) => r.id === roleId) ?? roles[0];
  const results = scoreCandidatesForRole(CANDIDATE_PORTFOLIOS, role);

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Auto-generated fit
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Role fit
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/50">
          Pick a role shape to see how each candidate who&apos;s shared their portfolio with you maps
          against it, category by category, not a single verified checkmark.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/40">
          Role
        </label>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => {
            const active = r.id === roleId;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setRoleId(r.id)}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                style={
                  active
                    ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--pink-grapefruit) 14%, white)" }
                    : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                }
              >
                {r.title}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-ink/50">{role.description}</p>
      </div>

      <div className="space-y-4">
        {results.map((r) => (
          <CandidateFitRow key={r.candidate.id} result={r} roleTitle={role.title} />
        ))}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          Fit is computed from category-level FIRSTS completion against the role&apos;s key skill
          areas, weighted by how central each is to the role. It&apos;s a conversation starter for
          your own interview process, not a replacement for it, and it only ever runs against
          candidates who chose to share their portfolio with you.
        </p>
      </div>
    </div>
  );
}

function CandidateFitRow({ result, roleTitle }: { result: RoleFitResult; roleTitle: string }) {
  const { candidate, fitScore, breakdown, strongest, gaps } = result;
  const allRoleFeedback = useRoleFeedback();
  const alreadySent = roleFeedbackForCandidate(allRoleFeedback, candidate.id).some((f) => f.roleTitle === roleTitle);
  const [note, setNote] = useState("");
  const [composing, setComposing] = useState(false);

  function handleSend() {
    const employer = loadEmployer() ?? MOCK_EMPLOYER;
    sendRoleFeedback({
      candidateId: candidate.id,
      candidateName: candidate.name,
      company: employer.company,
      roleTitle,
      strengths: strongest ? [strongest.label] : [],
      gaps: gaps.map((g) => g.label),
      note: note.trim(),
    });
    setComposing(false);
    setNote("");
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <Link href={`/employer/portfolios/${candidate.id}`} className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white"
            style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--berry-burst))" }}
          >
            {candidate.name.charAt(0)}
          </span>
          <div>
            <p className="font-display text-base font-semibold text-ink hover:underline">{candidate.name}</p>
            <p className="text-xs text-ink/50">{candidate.school}</p>
          </div>
        </Link>
        <div className="text-right">
          <p className="font-display text-2xl font-bold text-ink">{fitScore}%</p>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: ACCENT }}>
            {fitLabel(fitScore)}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {breakdown.map((b) => (
          <span
            key={b.category}
            className="rounded-full border border-ink/8 bg-paper-dim px-2.5 py-1 text-[11px] text-ink/55"
          >
            {b.label} {b.pct}%
          </span>
        ))}
      </div>

      <div className="mt-4 grid gap-3 border-t border-ink/8 pt-4 sm:grid-cols-2">
        {strongest && (
          <p className="text-xs text-ink/50">
            <span className="font-semibold text-ink/70">Strongest: </span>
            {strongest.label} ({strongest.pct}%)
          </p>
        )}
        <p className="text-xs text-ink/50">
          <span className="font-semibold text-ink/70">Room to grow: </span>
          {gaps.length > 0 ? gaps.map((g) => `${g.label} (${g.pct}%)`).join(", ") : "No notable gaps for this role"}
        </p>
      </div>

      <div className="mt-4 border-t border-ink/8 pt-4">
        {alreadySent ? (
          <p className="text-xs font-medium text-ink/40">
            Structured feedback sent to {candidate.name.split(" ")[0]} for this role.
          </p>
        ) : composing ? (
          <div className="space-y-2.5">
            <p className="text-xs leading-relaxed text-ink/50">
              Shares the strongest area and gaps above, plus your note, as constructive feedback,
              a meaningfully different signal than a silent pass.
            </p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Optional: anything else worth adding?"
              rows={2}
              className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-3.5 py-2.5 text-xs text-ink outline-none focus:border-ink/25"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleSend}
                className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-paper transition-opacity hover:opacity-90"
              >
                Send feedback
              </button>
              <button
                type="button"
                onClick={() => setComposing(false)}
                className="text-xs font-medium text-ink/40 hover:text-ink"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setComposing(true)}
            className="text-xs font-semibold text-berry-burst hover:underline"
          >
            Send this as feedback →
          </button>
        )}
      </div>
    </div>
  );
}
