"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/Switch";
import { ModuleCard } from "@/components/dashboard/ModuleCard";
import { CATEGORY_META, type FirstModule } from "@/lib/dashboardData";

export function FirstsList({ modules }: { modules: FirstModule[] }) {
  const [freeExplore, setFreeExplore] = useState(false);

  const byCategory = (Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>).map(
    (key) => ({
      key,
      meta: CATEGORY_META[key],
      items: modules.filter((m) => m.category === key),
    })
  );

  return (
    <div className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Stage One
          </p>
          <h2 className="mt-1 font-display text-xl font-semibold text-ink">
            All 18 FIRSTS
          </h2>
        </div>
        <Switch checked={freeExplore} onChange={setFreeExplore} label="Free Explore Mode" />
      </div>

      <div className="space-y-8">
        {byCategory.map(({ key, meta, items }) => (
          <div key={key}>
            <div className="mb-3 flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: meta.color }}
              />
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                {meta.label}
              </p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {items.map((m) => (
                <ModuleCard key={m.id} module={m} unlocked={freeExplore} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
