"use client";

import { useEffect, useState } from "react";
import { cohortsForInstitution } from "@/lib/cohortData";
import { staffForInstitution } from "@/lib/institutionStaff";
import { findInstitutionByDomain, getInstitutionByName } from "@/lib/institutions";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";

export function Settings() {
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
  const email = advisor?.email || MOCK_ADVISOR.email;
  const name = advisor?.name || MOCK_ADVISOR.name;
  const match = findInstitutionByDomain(email);
  const cohorts = cohortsForInstitution(institution);
  const staff = staffForInstitution(institution);
  const sso = match?.sso ?? false;
  const plan = sso ? "Campus-wide" : "Department pilot";
  const seatsIncluded = sso ? 40 : 10;
  const enrollment = getInstitutionByName(institution)?.enrollment;
  const studentsInFirsts = cohorts.reduce((sum, c) => sum + c.students.length, 0);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Institution settings
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          {institution}
        </h1>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-5 font-display text-lg font-semibold text-ink">Institution profile</h2>
        <dl className="grid gap-5 sm:grid-cols-2">
          <SettingRow label="Institution name" value={institution} />
          <SettingRow label="Domain" value={match?.domain ?? "Not verified"} />
          <SettingRow label="Primary admin" value={name} />
          <SettingRow label="Admin email" value={email} />
          {enrollment && (
            <SettingRow label="Total enrollment (approx)" value={enrollment.toLocaleString()} />
          )}
          <SettingRow label="Students in FIRSTS cohorts" value={studentsInFirsts.toLocaleString()} />
        </dl>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-5 font-display text-lg font-semibold text-ink">Single sign-on</h2>
        <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-paper-dim p-5">
          <div>
            <p className="text-sm font-semibold text-ink">
              {sso ? "SSO connected" : "SSO not connected"}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ink/50">
              {sso
                ? "Students and staff sign in with your institution's existing identity provider. No separate FIRSTS password to manage."
                : "Staff and students currently sign in with an institution-email match. Ask your account team to enable SSO for your identity provider."}
            </p>
          </div>
          <span
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${
              sso ? "bg-[#1a8f3c]/12 text-[#1a8f3c]" : "bg-ink/8 text-ink/50"
            }`}
          >
            {sso ? "Active" : "Off"}
          </span>
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-5 font-display text-lg font-semibold text-ink">Plan & seats</h2>
        <dl className="grid gap-5 sm:grid-cols-3">
          <SettingRow label="Plan" value={plan} />
          <SettingRow label="Staff seats used" value={`${staff.length} of ${seatsIncluded}`} />
          <SettingRow label="Cohorts running" value={String(cohorts.length)} />
        </dl>
        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full"
            style={{ width: `${Math.min(100, (staff.length / seatsIncluded) * 100)}%`, background: "var(--berry-burst)" }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-paper-dim p-7">
        <p className="text-sm leading-relaxed text-ink/60">
          This settings page reflects the demo account for {institution}.
          Changing plan tier, rotating SSO credentials, or adding seats
          happens through your FIRSTS account team while the self-serve
          version of this page is being built.
        </p>
      </div>
    </div>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}
