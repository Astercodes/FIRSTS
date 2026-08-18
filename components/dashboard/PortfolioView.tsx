"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useFirstsWithProgress } from "@/lib/progressStore";
import { CATEGORY_META, MOCK_USER, completionStats } from "@/lib/dashboardData";
import { PORTFOLIO_PIECES, effectiveAnswers } from "@/lib/portfolioContent";

type ResolvedPiece = {
  moduleId: number;
  label: string;
  title: string;
  code: string;
  color: string;
  text: string;
  isPersonalized: boolean;
};

export function PortfolioView() {
  const modules = useFirstsWithProgress();
  const stats = completionStats(modules);
  const [pieces, setPieces] = useState<ResolvedPiece[] | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

  useEffect(() => {
    function sync() {
      const resolved = PORTFOLIO_PIECES.map((piece) => {
        const m = modules.find((mod) => mod.id === piece.moduleId);
        const { answers, isPersonalized } = effectiveAnswers(piece.moduleId);
        return {
          moduleId: piece.moduleId,
          label: piece.label,
          title: m?.title ?? piece.label,
          code: m?.code ?? "",
          color: m ? CATEGORY_META[m.category].color : "var(--ink)",
          text: piece.render(answers).trim(),
          isPersonalized,
        };
      });
      setPieces(resolved);
    }
    sync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCopy() {
    if (!pieces) return;
    const text = [
      `${MOCK_USER.firstName}'s Career Portfolio`,
      `${stats.complete} of ${stats.total} FIRSTS complete`,
      "",
      ...pieces.map((p) => `${p.label}\n${p.text || "Not answered yet."}`),
    ].join("\n\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1800);
    });
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center print:mb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Career Portfolio
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">
            {MOCK_USER.firstName}&apos;s FIRSTS, compiled.
          </h1>
          <p className="mt-2 text-sm text-ink/55">
            {stats.complete} of {stats.total} FIRSTS complete. Auto-compiled from your saved
            answers, filled with example answers wherever a FIRST is still ahead of you.
          </p>
        </div>
        <div className="flex shrink-0 gap-2 print:hidden">
          <button
            onClick={handleCopy}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink/75 transition-colors hover:border-ink/30"
          >
            {copyState === "copied" ? "Copied" : "Copy as text"}
          </button>
          <button
            onClick={() => window.print()}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {(pieces ?? PORTFOLIO_PIECES.map((p) => ({ moduleId: p.moduleId, label: p.label, title: p.label, code: "", color: "var(--ink)", text: "", isPersonalized: false }))).map((p) => (
          <section
            key={p.moduleId}
            className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-7 print:break-inside-avoid print:border-ink/15 print:shadow-none"
            style={{ borderLeft: `4px solid ${p.color}` }}
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
                {p.label}
              </p>
              <span
                className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold print:hidden"
                style={
                  p.isPersonalized
                    ? { color: p.color, background: `color-mix(in oklab, ${p.color} 14%, white)` }
                    : { color: "rgba(11,4,16,0.4)", background: "var(--paper-dim)" }
                }
              >
                {p.isPersonalized ? "Your answer" : "Example answer"}
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-ink/80">
              {p.text || "Not answered yet."}
            </p>
            {p.code && (
              <Link
                href={`/dashboard/stage/${p.moduleId}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-ink/45 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink/70 print:hidden"
              >
                From First {p.code}: {p.title} →
              </Link>
            )}
          </section>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-ink/40 print:mt-6">
        Compiled locally from your FIRSTS answers. Nothing here is shared until you choose to
        share it.
      </p>
    </div>
  );
}
