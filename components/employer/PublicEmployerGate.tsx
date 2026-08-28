"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CATEGORY_META, STAGES, stageForCategory } from "@/lib/dashboardData";
import { loadEmployer, employerSlug, type EmployerProfile } from "@/lib/employerStore";

export function PublicEmployerGate({ slug }: { slug: string }) {
  const [status, setStatus] = useState<"checking" | "available" | "unavailable">("checking");
  const [profile, setProfile] = useState<EmployerProfile | null>(null);

  useEffect(() => {
    function sync() {
      const saved = loadEmployer();
      const ownSlug = saved ? employerSlug(saved.company) : null;
      if (saved && saved.publicProfile && ownSlug === slug) {
        setProfile(saved);
        setStatus("available");
      } else {
        setStatus("unavailable");
      }
    }
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [slug]);

  if (status === "checking") return null;

  if (status === "unavailable" || !profile) {
    return (
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <p className="font-display text-xl font-semibold text-ink">This employer profile isn&apos;t public.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/55">
          Either this link is wrong, or this employer hasn&apos;t turned on their public profile yet.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          Back to FIRSTS
        </Link>
      </div>
    );
  }

  const valuedByStage = STAGES.map((stage) => ({
    stage,
    categories: (profile.valuedCategories ?? []).filter(
      (cat) => stageForCategory(cat as keyof typeof CATEGORY_META) === stage.id
    ),
  })).filter((row) => row.categories.length > 0);

  return (
    <div className="min-h-screen bg-paper-dim px-4 py-14 sm:px-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="rounded-3xl border border-ink/10 bg-white p-8 text-center">
          <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full font-display text-2xl font-bold text-white" style={{ background: "linear-gradient(135deg, var(--pink-grapefruit), var(--berry-burst))" }}>
            {profile.company.charAt(0)}
          </span>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">{profile.company}</h1>
          {profile.tagline && <p className="mt-2 text-[15px] text-ink/60">{profile.tagline}</p>}
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-paper-dim px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/45">
            FIRSTS partner employer
          </p>
        </div>

        {profile.culture && (
          <div className="rounded-3xl border border-ink/10 bg-white p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
              Culture
            </p>
            <p className="text-[15px] leading-relaxed text-ink/75">{profile.culture}</p>
          </div>
        )}

        {(profile.rolesHiredFor?.length ?? 0) > 0 && (
          <div className="rounded-3xl border border-ink/10 bg-white p-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
              Roles they hire for
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.rolesHiredFor!.map((role) => (
                <span key={role} className="rounded-full border border-ink/10 bg-paper-dim px-3.5 py-1.5 text-sm text-ink/70">
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}

        {valuedByStage.length > 0 && (
          <div className="rounded-3xl border border-ink/10 bg-white p-7">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
              What they look for
            </p>
            <p className="mb-4 text-sm text-ink/50">
              These FIRSTS categories matter most for the roles this employer hires for. Worth
              deliberately strengthening if you&apos;re preparing to apply.
            </p>
            <div className="space-y-3">
              {valuedByStage.map(({ stage, categories }) => (
                <div key={stage.id}>
                  <p className="mb-1.5 text-xs font-semibold text-ink/50">{stage.shortLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full px-3 py-1.5 text-xs font-semibold text-white"
                        style={{ background: CATEGORY_META[cat as keyof typeof CATEGORY_META].color }}
                      >
                        {CATEGORY_META[cat as keyof typeof CATEGORY_META].label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-center text-xs text-ink/40">
          This profile is written and controlled by {profile.company}, not FIRSTS.
        </p>
      </div>
    </div>
  );
}
