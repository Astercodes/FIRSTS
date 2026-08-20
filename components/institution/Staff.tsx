"use client";

import { useEffect, useState, type FormEvent } from "react";
import { getCohort } from "@/lib/cohortData";
import { staffForInstitution, type StaffRole } from "@/lib/institutionStaff";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";

const ROLES: StaffRole[] = ["Advisor / Mentor", "Institution Admin"];

type PendingInvite = { name: string; email: string; role: StaffRole };

export function Staff() {
  const [advisor, setAdvisor] = useState<AdvisorProfile | null>(null);
  const [showInvite, setShowInvite] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<StaffRole>("Advisor / Mentor");
  const [pending, setPending] = useState<PendingInvite[]>([]);

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
  const staff = staffForInstitution(institution);

  function handleInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setPending((prev) => [...prev, { name, email, role }]);
    setName("");
    setEmail("");
    setRole("Advisor / Mentor");
    setShowInvite(false);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
            {staff.length + pending.length} seats
          </p>
          <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
            Staff
          </h1>
          <p className="mt-1 text-sm text-ink/50">
            Advisors and admins with dashboard access at {institution}.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowInvite((v) => !v)}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          {showInvite ? "Cancel" : "Invite a team member"}
        </button>
      </div>

      {showInvite && (
        <form
          onSubmit={handleInvite}
          className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-7 sm:grid-cols-2"
        >
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/45">Full name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Jordan Blake"
              className="w-full rounded-2xl border border-ink/12 bg-paper-dim px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-ink/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/45">Institution email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="jblake@yourschool.edu"
              className="w-full rounded-2xl border border-ink/12 bg-paper-dim px-4 py-3 text-[15px] text-ink outline-none transition-colors focus:border-ink/30"
            />
          </label>
          <div className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/45">Role</span>
            <div className="flex flex-wrap gap-2">
              {ROLES.map((r) => {
                const active = role === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-berry-burst bg-berry-burst/10 text-berry-burst"
                        : "border-ink/12 text-ink/60 hover:text-ink"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-berry-burst px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color-mix(in_oklab,var(--berry-burst)_85%,black)]"
            >
              Send invite
            </button>
            <p className="mt-2 text-xs text-ink/40">
              Preview only, invites aren&apos;t actually sent in this demo.
            </p>
          </div>
        </form>
      )}

      <div className="rounded-3xl border border-ink/10 bg-white p-2">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Cohorts</th>
                <th className="px-5 py-4">Last active</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s) => (
                <tr key={s.id} className="border-t border-ink/8">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--juicy-plum))" }}
                      >
                        {s.name.charAt(0)}
                      </span>
                      <div>
                        <p className="font-medium text-ink">{s.name}</p>
                        <p className="text-xs text-ink/45">{s.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        s.role === "Institution Admin"
                          ? "bg-[var(--neon-pink)]/12 text-[var(--neon-pink)]"
                          : "bg-ink/8 text-ink/60"
                      }`}
                    >
                      {s.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-ink/60">
                    {s.cohortIds.length === 0
                      ? "All cohorts"
                      : s.cohortIds.map((id) => getCohort(id)?.name ?? id).join(", ")}
                  </td>
                  <td className="px-5 py-4 text-ink/60">{s.lastActive}</td>
                </tr>
              ))}
              {pending.map((p, i) => (
                <tr key={`pending-${i}`} className="border-t border-ink/8">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/8 font-display text-xs font-bold text-ink/50">
                        {p.name.charAt(0)}
                      </span>
                      <div>
                        <p className="font-medium text-ink">{p.name}</p>
                        <p className="text-xs text-ink/45">{p.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-[var(--sunshine-orange)]/12 px-2.5 py-1 text-xs font-semibold text-[var(--sunshine-orange)]">
                      {p.role}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-ink/40">Not yet assigned</td>
                  <td className="px-5 py-4 text-ink/40">Invite pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
