"use client";

import { useState } from "react";
import { TEAM_ROLES, useTeam, addTeamMember, removeTeamMember, setTeamMemberRole, type TeamRole } from "@/lib/teamStore";
import { sponsoredInstitutions, candidateInstitutions } from "@/lib/talentPool";
import { requestAccess, useAccessRequests } from "@/lib/accessRequestStore";

const ACCENT = "var(--pink-grapefruit)";

export function AccountView() {
  const team = useTeam();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<TeamRole>("Recruiter");

  const sponsored = sponsoredInstitutions();
  const candidateOnly = candidateInstitutions().filter((inst) => !sponsored.includes(inst));
  const accessRequests = useAccessRequests();
  const [requestSchool, setRequestSchool] = useState("");
  const [requestNote, setRequestNote] = useState("");

  function handleAddMember() {
    if (!name.trim() || !email.trim()) return;
    addTeamMember({ name: name.trim(), email: email.trim(), role });
    setName("");
    setEmail("");
  }

  function handleRequestAccess() {
    if (!requestSchool.trim()) return;
    requestAccess(requestSchool.trim(), requestNote.trim());
    setRequestSchool("");
    setRequestNote("");
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Account
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Team & access
        </h1>
      </div>

      <section className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Team
        </p>
        <p className="mb-4 text-sm text-ink/55">
          Everyone listed here shares this same account view. There&apos;s no separate login per
          person yet, so role is a label for now, not an enforced permission.
        </p>
        <div className="space-y-2.5">
          {team.map((member) => (
            <div key={member.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-ink/8 bg-paper-dim p-3.5">
              <div>
                <p className="text-sm font-semibold text-ink/80">{member.name}</p>
                <p className="text-xs text-ink/45">{member.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={member.role}
                  onChange={(e) => setTeamMemberRole(member.id, e.target.value as TeamRole)}
                  className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink outline-none focus:border-ink/25"
                >
                  {TEAM_ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeTeamMember(member.id)}
                  className="text-xs font-medium text-ink/35 hover:text-ink/70"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as TeamRole)}
            className="rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
          >
            {TEAM_ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleAddMember}
          disabled={!name.trim() || !email.trim()}
          className="mt-3 rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Add teammate
        </button>
      </section>

      <section className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          School access
        </p>
        <p className="mb-4 text-sm text-ink/55">
          You only see candidate and cohort data from schools you have a formal relationship with,
          not blanket access to every partner school on FIRSTS.
        </p>
        <div className="space-y-2">
          {sponsored.map((inst) => (
            <div key={inst} className="flex items-center justify-between rounded-2xl border border-ink/8 bg-paper-dim p-3.5">
              <span className="text-sm font-medium text-ink/75">{inst}</span>
              <span className="rounded-full px-2.5 py-1 text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                Sponsored
              </span>
            </div>
          ))}
          {candidateOnly.map((inst) => (
            <div key={inst} className="flex items-center justify-between rounded-2xl border border-ink/8 bg-paper-dim p-3.5">
              <span className="text-sm font-medium text-ink/75">{inst}</span>
              <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[11px] font-semibold text-ink/50">
                Candidate-shared only
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-ink/8 pt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
            Request access to another school
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <input
              value={requestSchool}
              onChange={(e) => setRequestSchool(e.target.value)}
              placeholder="School name"
              className="rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            />
            <input
              value={requestNote}
              onChange={(e) => setRequestNote(e.target.value)}
              placeholder="Note (optional)"
              className="rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            />
          </div>
          <button
            type="button"
            onClick={handleRequestAccess}
            disabled={!requestSchool.trim()}
            className="mt-3 rounded-2xl border border-ink/10 px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/25 disabled:opacity-40"
          >
            Send request
          </button>

          {accessRequests.length > 0 && (
            <div className="mt-4 space-y-2">
              {accessRequests.map((r) => (
                <div key={r.id} className="flex items-center justify-between rounded-xl bg-paper-dim px-3.5 py-2 text-xs text-ink/55">
                  <span>{r.schoolName}{r.note ? `, ${r.note}` : ""}</span>
                  <span className="font-semibold uppercase tracking-wide text-ink/35">Pending</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
