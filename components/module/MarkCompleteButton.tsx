"use client";

import { markComplete, markIncomplete, useModuleProgress } from "@/lib/progressStore";

export function MarkCompleteButton({ moduleId, color }: { moduleId: number; color: string }) {
  const firstModule = useModuleProgress(moduleId);
  const isComplete = firstModule.status === "complete";

  if (isComplete) {
    return (
      <div className="flex items-center justify-between rounded-2xl border border-ink/8 bg-white px-5 py-4">
        <span className="flex items-center gap-2.5 text-sm font-semibold text-ink">
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ background: color }}
          >
            ✓
          </span>
          Marked complete
        </span>
        <button
          onClick={() => markIncomplete(moduleId)}
          className="shrink-0 text-xs font-medium text-ink/40 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink/70"
        >
          Undo
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => markComplete(moduleId)}
      className="w-full rounded-2xl px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
      style={{ background: color }}
    >
      Mark this FIRST as complete
    </button>
  );
}
