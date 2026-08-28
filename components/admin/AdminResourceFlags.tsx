"use client";

import { STAGES } from "@/lib/dashboardData";
import { workshopKit } from "@/lib/facilitatorResourceStore";
import type { AdminFacilitatorRecord } from "@/lib/adminFacilitatorData";

export function AdminResourceFlags({ roster }: { roster: AdminFacilitatorRecord[] }) {
  const flagged = roster.filter((f) => f.staleResourceStages.length > 0);

  return (
    <section className="rounded-3xl border border-ink/8 bg-white p-6">
      <p className="mb-1 font-display text-base font-semibold text-ink">Outdated materials</p>
      <p className="mb-5 text-xs text-ink/45">
        Facilitators certified on a stage kit before it was last revised.
      </p>

      {flagged.length === 0 ? (
        <p className="text-sm text-ink/45">Everyone&apos;s on the current kit version.</p>
      ) : (
        <div className="space-y-2">
          {flagged.map((f) => (
            <div
              key={f.id}
              className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-paper-dim px-4 py-3"
            >
              <span className="text-sm font-medium text-ink/80">
                {f.name}
                {f.isYou && <span className="ml-1.5 text-xs text-ink/40">(you)</span>}
              </span>
              <span className="text-xs text-ink/50">
                {f.staleResourceStages
                  .map((s) => {
                    const label = STAGES.find((st) => st.id === s)?.shortLabel ?? s;
                    return `${label} kit v${workshopKit(s).version - 1} of v${workshopKit(s).version}`;
                  })
                  .join(", ")}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
