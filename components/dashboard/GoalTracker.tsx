"use client";

import { useEffect, useState } from "react";
import { STAGES, type StageId, type StageProgress } from "@/lib/dashboardData";
import { loadGoal, saveGoal, clearGoal, GOAL_CHANGE_EVENT, type Goal } from "@/lib/goalStore";

function toDateOnly(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function formatDate(iso: string): string {
  return toDateOnly(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

export function GoalTracker({ stages, weeklyAvg }: { stages: StageProgress[]; weeklyAvg: number }) {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [editing, setEditing] = useState(false);

  const firstUnfinished = stages.find((s) => s.pct < 100)?.stage ?? stages[stages.length - 1].stage;
  const [draftStage, setDraftStage] = useState<StageId>(firstUnfinished);
  const [draftDate, setDraftDate] = useState("");

  useEffect(() => {
    function sync() {
      setGoal(loadGoal());
    }
    sync();
    window.addEventListener(GOAL_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(GOAL_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function startEditing() {
    setDraftStage(goal?.targetStage ?? firstUnfinished);
    setDraftDate(goal?.targetDate ?? "");
    setEditing(true);
  }

  function submitGoal() {
    if (!draftDate) return;
    saveGoal(draftStage, draftDate);
    setEditing(false);
  }

  if (!goal || editing) {
    return (
      <div className="rounded-3xl border border-ink/8 bg-white p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your own deadline
        </p>
        <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
          Set a target date
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/50">
          No career fair or graduation forcing a deadline. Set your own, and we&apos;ll show you
          the pace it takes to hit it.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Finish by
            </label>
            <select
              value={draftStage}
              onChange={(e) => setDraftStage(e.target.value as StageId)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            >
              {STAGES.map((s) => (
                <option key={s.id} value={s.id}>{s.shortLabel}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
              Target date
            </label>
            <input
              type="date"
              value={draftDate}
              min={todayIso()}
              onChange={(e) => setDraftDate(e.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={submitGoal}
            disabled={!draftDate}
            className="rounded-2xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
          >
            Set my goal
          </button>
          {goal && editing && (
            <>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="text-xs font-medium text-ink/45 underline decoration-ink/20 underline-offset-4 hover:text-ink"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  clearGoal();
                  setEditing(false);
                }}
                className="text-xs font-medium text-ink/35 underline decoration-ink/20 underline-offset-4 hover:text-[#c92f3f]"
              >
                Clear goal
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  const targetIndex = STAGES.findIndex((s) => s.id === goal.targetStage);
  const targetLabel = STAGES[targetIndex]?.shortLabel ?? goal.targetStage;
  const remaining = stages.slice(0, targetIndex + 1).reduce((sum, s) => sum + (s.total - s.complete), 0);
  const daysLeft = Math.ceil((toDateOnly(goal.targetDate).getTime() - toDateOnly(todayIso()).getTime()) / (1000 * 60 * 60 * 24));

  if (remaining === 0) {
    return (
      <div className="rounded-3xl border border-ink/8 bg-white p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Your own deadline
        </p>
        <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
          {targetLabel}, done
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/50">
          You finished everything through {targetLabel} ahead of your {formatDate(goal.targetDate)} target.
        </p>
        <button
          type="button"
          onClick={startEditing}
          className="mt-4 text-xs font-semibold text-berry-burst hover:underline"
        >
          Set a new goal →
        </button>
      </div>
    );
  }

  const weeksLeft = Math.max(daysLeft / 7, daysLeft > 0 ? 0.5 : 0);
  const neededPace = daysLeft > 0 ? remaining / weeksLeft : Infinity;
  const pastDue = daysLeft <= 0;
  const onTrack = !pastDue && weeklyAvg >= neededPace * 0.9;
  const maxBar = Math.max(weeklyAvg, Number.isFinite(neededPace) ? neededPace : 0, 1);

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Your own deadline
          </p>
          <h2 className="mt-1.5 font-display text-lg font-semibold text-ink">
            {targetLabel} by {formatDate(goal.targetDate)}
          </h2>
        </div>
        <button
          type="button"
          onClick={startEditing}
          className="shrink-0 text-xs font-medium text-ink/40 underline decoration-ink/20 underline-offset-4 hover:text-ink"
        >
          Edit
        </button>
      </div>

      {pastDue ? (
        <p className="mt-3 text-sm leading-relaxed text-ink/50">
          That target date has passed, with {remaining} FIRSTS still left through {targetLabel}.
          Set a new date whenever you&apos;re ready.
        </p>
      ) : (
        <>
          <p className="mt-3 text-sm leading-relaxed text-ink/50">
            {remaining} FIRSTS left through {targetLabel}, {daysLeft} day{daysLeft === 1 ? "" : "s"} to go.
          </p>
          <div className="mt-4 space-y-3">
            <RateBar label="Needed pace" value={neededPace} max={maxBar} tone="light" />
            <RateBar label="Your pace" value={weeklyAvg} max={maxBar} tone="strong" />
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink/40">
            {onTrack
              ? "You're pacing ahead of what it takes to hit this date."
              : "Pick up the pace a little to hit this date comfortably."}
          </p>
        </>
      )}
    </div>
  );
}

function RateBar({ label, value, max, tone }: { label: string; value: number; max: number; tone: "light" | "strong" }) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-semibold text-ink/55">{label}</span>
        <span className="text-xs font-bold tabular-nums text-ink/70">{value.toFixed(1)}/wk</span>
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
