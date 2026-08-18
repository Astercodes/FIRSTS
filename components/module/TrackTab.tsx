"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/Switch";
import type { FirstModule } from "@/lib/dashboardData";

export function TrackTab({
  module: m,
  successSignal,
  color,
}: {
  module: FirstModule;
  successSignal: string;
  color: string;
}) {
  const [shared, setShared] = useState(false);
  const isComplete = m.status === "complete";

  const stats = [
    { label: "Completion", value: isComplete ? "100%" : m.status === "in-progress" ? "60%" : "0%" },
    { label: "Time spent", value: isComplete ? "38 min" : m.status === "in-progress" ? "22 min" : "—" },
    { label: "Last updated", value: m.lastUpdated ?? "Not started" },
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-ink/8 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{s.label}</p>
            <p className="mt-1.5 font-display text-2xl font-bold text-ink">{s.value}</p>
          </div>
        ))}
      </section>

      <section
        className="rounded-3xl border p-7 sm:p-8"
        style={{
          borderColor: isComplete ? `color-mix(in oklab, ${color} 35%, transparent)` : "rgba(11,4,16,0.08)",
          background: isComplete ? `color-mix(in oklab, ${color} 8%, white)` : "white",
        }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: isComplete ? color : "rgba(11,4,16,0.45)" }}>
          {isComplete ? "Success signal met" : "Success signal"}
        </p>
        <p className="text-[15px] leading-relaxed text-ink/75">{successSignal}</p>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-ink">Share with my advisor</p>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink/55">
              Off by default. Your advisor always sees your completion
              status — turning this on also shares your written answers for
              this FIRST specifically.
            </p>
          </div>
          <Switch checked={shared} onChange={setShared} label={shared ? "Shared" : "Private"} />
        </div>
      </section>

      <section className="rounded-3xl border border-ink/8 bg-white p-7 sm:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Version history
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-xl bg-paper-dim px-4 py-2.5 text-sm">
            <span className="font-medium text-ink/75">Current version</span>
            <span className="text-ink/45">{m.lastUpdated ?? "—"}</span>
          </div>
          {isComplete && (
            <div className="flex items-center justify-between rounded-xl bg-paper-dim px-4 py-2.5 text-sm">
              <span className="font-medium text-ink/75">First draft</span>
              <span className="text-ink/45">4 months ago</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
