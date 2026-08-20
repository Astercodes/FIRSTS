"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  cohortsForInstitution,
  cohortAvgCompletion,
  cohortAtRiskCount,
  cohortActiveCount,
  cohortWatchCount,
  institutionWeeklyTrend,
} from "@/lib/cohortData";
import { staffForInstitution } from "@/lib/institutionStaff";
import { findInstitutionByDomain, getInstitutionByName } from "@/lib/institutions";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import { HBarChart } from "@/components/charts/HBarChart";
import { TrendChart } from "@/components/charts/TrendChart";
import { StatusBar } from "@/components/charts/StatusBar";

const WEEK_LABELS = ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7", "Wk 8"];

export function InstitutionOverview() {
  const [advisor, setAdvisor] = useState<AdvisorProfile | null>(null);

  useEffect(() => {
    const sync = () => setAdvisor(loadAdvisor());
    sync();
    window.addEventListener(ADVISOR_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(ADVISOR_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const institution = advisor?.institution || MOCK_ADVISOR.institution;
  const cohorts = cohortsForInstitution(institution);
  const staff = staffForInstitution(institution);
  const sso = findInstitutionByDomain(advisor?.email || MOCK_ADVISOR.email)?.sso ?? false;
  const allStudents = cohorts.flatMap((c) => c.students);
  const totalAtRisk = cohorts.reduce((sum, c) => sum + cohortAtRiskCount(c), 0);
  const totalWatch = cohorts.reduce((sum, c) => sum + cohortWatchCount(c), 0);
  const totalActive = cohorts.reduce((sum, c) => sum + cohortActiveCount(c), 0);
  const avgCompletion = cohorts.length
    ? Math.round(cohorts.reduce((sum, c) => sum + cohortAvgCompletion(c), 0) / cohorts.length)
    : 0;
  const trend = institutionWeeklyTrend(institution);
  const departments = Array.from(new Set(cohorts.map((c) => c.focus)));
  const enrollment = getInstitutionByName(institution)?.enrollment;
  const penetration = enrollment ? Math.max(1, Math.round((allStudents.length / enrollment) * 1000) / 10) : null;

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            Campus-wide overview
          </p>
          <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
            {institution}
          </h1>
          <p className="mt-1 text-sm text-ink/50">
            {allStudents.length.toLocaleString()} students across {departments.length} departments and{" "}
            {cohorts.length} cohorts
            {enrollment && (
              <>
                , out of roughly {enrollment.toLocaleString()} enrolled campus-wide ({penetration}%)
              </>
            )}
            . Rolling out department by department, expanding each semester.
          </p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${
            sso ? "bg-[#1a8f3c]/12 text-[#1a8f3c]" : "bg-ink/8 text-ink/50"
          }`}
        >
          {sso ? "SSO connected" : "SSO not yet connected"}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard label="Departments" value={String(departments.length)} color="var(--fuchsia-blast)" />
        <StatCard label="Cohorts running" value={String(cohorts.length)} color="var(--berry-burst)" />
        <StatCard label="Total students" value={String(allStudents.length)} color="var(--juicy-plum)" />
        <StatCard label="Staff seats" value={String(staff.length)} color="var(--sunshine-orange)" />
        <StatCard label="Average completion" value={`${avgCompletion}%`} color="var(--neon-pink)" />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-ink/10 bg-white p-7 lg:col-span-3">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">Engagement trend</h2>
          <p className="mb-5 text-xs text-ink/45">Institution-wide average completion, last 8 weeks</p>
          {trend.length > 0 ? (
            <TrendChart values={trend} labels={WEEK_LABELS} color="var(--neon-pink)" seriesName="Average completion" />
          ) : (
            <p className="text-sm text-ink/45">No cohorts yet.</p>
          )}
        </div>

        <div className="rounded-3xl border border-ink/10 bg-white p-7 lg:col-span-2">
          <h2 className="mb-1 font-display text-lg font-semibold text-ink">Engagement status</h2>
          <p className="mb-5 text-xs text-ink/45">Institution-wide, every cohort</p>
          <StatusBar active={totalActive} watch={totalWatch} atRisk={totalAtRisk} />
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Completion by department</h2>
          <Link href="/institution/departments" className="text-sm font-semibold text-berry-burst">
            See all →
          </Link>
        </div>
        <p className="mb-6 text-xs text-ink/45">Weighted average across all six stages</p>
        {cohorts.length > 0 ? (
          <HBarChart
            color="var(--berry-burst)"
            data={cohorts.map((c) => ({
              key: c.id,
              label: c.name,
              value: cohortAvgCompletion(c),
              href: `/institution/departments/${c.id}`,
              sublabel: `${c.focus} · ${c.students.length} students`,
            }))}
          />
        ) : (
          <p className="text-sm text-ink/45">No cohorts yet.</p>
        )}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Staff</h2>
          <Link href="/institution/staff" className="text-sm font-semibold text-berry-burst">
            Manage staff →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {staff.slice(0, 4).map((s) => (
            <div key={s.id} className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper-dim p-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--juicy-plum))" }}
              >
                {s.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">{s.name}</p>
                <p className="truncate text-xs text-ink/50">{s.title}</p>
              </div>
              <span className="ml-auto shrink-0 text-xs text-ink/40">{s.lastActive}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          This view rolls up completion status only, the same privacy rule
          applies at the institution level as it does per cohort: nobody
          outside a student&apos;s own account sees their actual worksheet
          answers unless the student shares them.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-6">
      <p className="font-display text-3xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="mt-1.5 text-xs leading-snug text-ink/50">{label}</p>
    </div>
  );
}
