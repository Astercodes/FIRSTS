"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { cohortsForInstitution, stalledStudents, type StalledStudent } from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import { myCaseload, weakCategoriesForStudent, type CaseloadStudent } from "@/lib/caseload";
import { markContacted, unmarkContacted, useContactedMap } from "@/lib/outreachStore";
import { useSessionLogs, addSessionLog, deleteSessionLog } from "@/lib/sessionLogStore";
import { FIRSTS } from "@/lib/dashboardData";

const STAGE_LABEL: Record<string, string> = {
  one: "Stage One",
  two: "Stage Two",
  three: "Stage Three",
  four: "Stage Four",
  complete: "Complete",
};

function studentKey(cohortId: string, id: number) {
  return `${cohortId}-${id}`;
}

const COLLAPSED_QUEUE = 10;
const COLLAPSED_ROSTER = 50;

export function WorkloadView() {
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

  const advisorName = advisor?.name || MOCK_ADVISOR.name;
  const advisorEmail = advisor?.email || MOCK_ADVISOR.email;
  const institution = advisor?.institution || MOCK_ADVISOR.institution;

  const cohorts = useMemo(() => cohortsForInstitution(institution), [institution]);
  const caseload = useMemo(() => myCaseload(advisorEmail, cohorts), [advisorEmail, cohorts]);
  const caseloadKeys = useMemo(() => new Set(caseload.map((s) => studentKey(s.cohortId, s.id))), [caseload]);

  const stalledInInstitution = useMemo(() => stalledStudents(cohorts), [cohorts]);
  const stalledInCaseload = useMemo(
    () => stalledInInstitution.filter((s) => caseloadKeys.has(studentKey(s.cohortId, s.id))),
    [stalledInInstitution, caseloadKeys]
  );

  const contactedMap = useContactedMap();
  const outreachQueue = stalledInCaseload.filter((s) => !contactedMap[studentKey(s.cohortId, s.id)]);
  const contactedList = stalledInCaseload.filter((s) => contactedMap[studentKey(s.cohortId, s.id)]);

  const [showAllQueue, setShowAllQueue] = useState(false);
  const [showContacted, setShowContacted] = useState(false);
  const visibleQueue = showAllQueue ? outreachQueue : outreachQueue.slice(0, COLLAPSED_QUEUE);

  const [showAllRoster, setShowAllRoster] = useState(false);
  const visibleRoster = showAllRoster ? caseload : caseload.slice(0, COLLAPSED_ROSTER);

  const [expanded, setExpanded] = useState<string | null>(null);
  const allLogs = useSessionLogs();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          {institution}
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Workload
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Your own slice of the institution: the students assigned to you, who needs outreach
          today, and meeting prep for each one.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="My caseload" value={String(caseload.length)} color="var(--juicy-plum)" />
        <StatCard label="Need outreach" value={String(outreachQueue.length)} color="#c92f3f" />
        <StatCard label="Contacted" value={String(contactedList.length)} color="#1a8f3c" />
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <h2 className="mb-1 font-display text-lg font-semibold text-ink">Outreach queue</h2>
        <p className="mb-5 text-xs text-ink/45">
          Stalled students from your caseload, ranked by risk. Email opens a pre-filled message in
          your own mail client; marking contacted moves them off the queue.
        </p>

        {outreachQueue.length === 0 ? (
          <p className="text-sm text-ink/45">Nobody in your caseload needs outreach right now.</p>
        ) : (
          <div className="space-y-2.5">
            {visibleQueue.map((s) => (
              <OutreachRow key={studentKey(s.cohortId, s.id)} student={s} advisorName={advisorName} />
            ))}
          </div>
        )}

        {outreachQueue.length > COLLAPSED_QUEUE && (
          <button
            type="button"
            onClick={() => setShowAllQueue((v) => !v)}
            className="mt-3 text-xs font-semibold text-berry-burst hover:underline"
          >
            {showAllQueue ? "Show less" : `See all ${outreachQueue.length} →`}
          </button>
        )}

        {contactedList.length > 0 && (
          <div className="mt-5 border-t border-ink/8 pt-4">
            <button
              type="button"
              onClick={() => setShowContacted((v) => !v)}
              className="text-xs font-semibold text-ink/45 hover:text-ink"
            >
              {showContacted ? "Hide" : "Show"} {contactedList.length} contacted
            </button>
            {showContacted && (
              <div className="mt-3 space-y-2">
                {contactedList.map((s) => {
                  const key = studentKey(s.cohortId, s.id);
                  return (
                    <div key={key} className="flex items-center justify-between rounded-xl bg-paper-dim px-4 py-2.5">
                      <div>
                        <p className="text-sm font-medium text-ink/70">{s.name}</p>
                        <p className="text-xs text-ink/40">Contacted {contactedMap[key]}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => unmarkContacted(key)}
                        className="text-xs font-medium text-ink/40 underline decoration-ink/20 underline-offset-4 hover:text-ink"
                      >
                        Undo
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 pt-5">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">My students</h2>
            <p className="mt-1 text-xs text-ink/45">
              Your full caseload. Open a student for meeting prep and to log what you cover.
            </p>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-ink/40">
                <th className="px-5 py-4">Student</th>
                <th className="px-5 py-4">Cohort</th>
                <th className="px-5 py-4">Current stage</th>
                <th className="px-5 py-4">Last active</th>
                <th className="px-5 py-4" />
              </tr>
            </thead>
            <tbody>
              {visibleRoster.map((s) => {
                const key = studentKey(s.cohortId, s.id);
                const isExpanded = expanded === key;
                return (
                  <Fragment key={key}>
                    <tr className="border-t border-ink/8">
                      <td className="px-5 py-4">
                        <p className="font-medium text-ink">{s.name}</p>
                        <p className="text-xs text-ink/40">{s.email}</p>
                      </td>
                      <td className="px-5 py-4">
                        <Link href={`/advisor/cohorts/${s.cohortId}`} className="text-ink/70 hover:text-berry-burst hover:underline">
                          {s.cohortName}
                        </Link>
                      </td>
                      <td className="px-5 py-4 text-ink/70">
                        {STAGE_LABEL[s.currentStage]}
                        {s.currentStage !== "complete" && (
                          <span className="ml-1 text-xs text-ink/40">({s.overallPct}% overall)</span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-ink/60">
                        {s.daysInactive === 0 ? "Today" : `${s.daysInactive}d ago`}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() => setExpanded(isExpanded ? null : key)}
                          className="text-xs font-semibold text-berry-burst hover:underline"
                        >
                          {isExpanded ? "Close" : "Prep"}
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr key={`${key}-panel`} className="border-t border-ink/8 bg-paper-dim">
                        <td colSpan={5} className="px-5 py-5">
                          <MeetingPrepPanel
                            student={s}
                            studentKey={key}
                            logs={allLogs.filter((l) => l.studentKey === key)}
                          />
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {caseload.length === 0 && (
          <p className="px-5 py-8 text-center text-sm text-ink/45">No students in your caseload.</p>
        )}
        {caseload.length > COLLAPSED_ROSTER && (
          <div className="px-5 pb-4 pt-3">
            <button
              type="button"
              onClick={() => setShowAllRoster((v) => !v)}
              className="text-xs font-semibold text-berry-burst hover:underline"
            >
              {showAllRoster ? "Show less" : `See all ${caseload.length} →`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function OutreachRow({ student: s, advisorName }: { student: StalledStudent; advisorName: string }) {
  const key = studentKey(s.cohortId, s.id);
  const firstName = s.name.split(" ")[0];
  const subject = "Checking in on your FIRSTS progress";
  const body = `Hi ${firstName},\n\nI noticed things have stalled a bit on your end (${s.reasonLabel.toLowerCase()}). Do you have 15 minutes this week to talk through what's in the way and get you moving again?\n\nBest,\n${advisorName}`;
  const mailto = `mailto:${s.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink/8 px-4 py-3">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-ink">{s.name}</p>
        <p className="text-xs text-ink/45">
          {s.cohortName} · {s.reasonLabel}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <a
          href={mailto}
          className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-semibold text-ink/75 transition-colors hover:border-ink/30"
        >
          Email
        </a>
        <button
          type="button"
          onClick={() => markContacted(key)}
          className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-paper transition-colors hover:bg-ink/85"
        >
          Mark contacted
        </button>
      </div>
    </div>
  );
}

function MeetingPrepPanel({
  student: s,
  studentKey: key,
  logs,
}: {
  student: CaseloadStudent;
  studentKey: string;
  logs: import("@/lib/sessionLogStore").SessionLog[];
}) {
  const weakCategories = useMemo(() => weakCategoriesForStudent(s), [s]);
  const currentStageFirsts = useMemo(
    () => (s.currentStage === "complete" ? [] : FIRSTS.filter((f) => f.stage === s.currentStage)),
    [s]
  );

  const [selectedFirsts, setSelectedFirsts] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState("");

  function toggleFirst(code: string) {
    setSelectedFirsts((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  }

  function submitLog() {
    if (selectedFirsts.size === 0 && !notes.trim()) return;
    addSessionLog(key, Array.from(selectedFirsts), notes.trim());
    setSelectedFirsts(new Set());
    setNotes("");
  }

  const stageOrder: (keyof typeof s.stagePct)[] = ["one", "two", "three", "four"];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">Where they are</p>
        <div className="space-y-2">
          {stageOrder.map((stage) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="w-20 shrink-0 text-xs text-ink/55">{STAGE_LABEL[stage]}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/8">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${s.stagePct[stage]}%`, background: "var(--berry-burst)" }}
                />
              </div>
              <span className="w-8 shrink-0 text-right text-xs tabular-nums text-ink/45">{s.stagePct[stage]}%</span>
            </div>
          ))}
        </div>

        <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-ink/40">Recent activity</p>
        <p className="text-sm text-ink/70">
          {s.daysInactive === 0 ? "Active today." : `Last active ${s.daysInactive} day${s.daysInactive === 1 ? "" : "s"} ago.`}
        </p>

        <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-ink/40">Weak categories</p>
        {weakCategories.length > 0 ? (
          <div className="space-y-1.5">
            {weakCategories.map((c) => (
              <div key={c.category} className="flex items-center justify-between text-sm">
                <span className="text-ink/70">{c.label}</span>
                <span className="font-semibold text-ink/50">{c.pct}%</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-ink/40">Not enough data yet.</p>
        )}
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">Log this session</p>
        {currentStageFirsts.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {currentStageFirsts.map((f) => {
              const active = selectedFirsts.has(f.code);
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => toggleFirst(f.code)}
                  className="rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors"
                  style={
                    active
                      ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 12%, white)" }
                      : { borderColor: "rgba(11,4,16,0.12)", color: "rgba(11,4,16,0.55)" }
                  }
                >
                  {f.code} {f.title}
                </button>
              );
            })}
          </div>
        )}
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What did you cover, and what's the next step?"
          rows={2}
          className="w-full resize-none rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
        />
        <button
          type="button"
          onClick={submitLog}
          disabled={selectedFirsts.size === 0 && !notes.trim()}
          className="mt-2 rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Log session
        </button>

        {logs.length > 0 && (
          <div className="mt-5 border-t border-ink/8 pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/40">
              Session history ({logs.length})
            </p>
            <div className="space-y-2.5">
              {logs.map((l) => (
                <div key={l.id} className="rounded-xl bg-white p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-semibold text-ink/60">{l.date}</p>
                    <button
                      type="button"
                      onClick={() => deleteSessionLog(l.id)}
                      className="text-xs text-ink/30 hover:text-[#c92f3f]"
                    >
                      Delete
                    </button>
                  </div>
                  {l.firstsCovered.length > 0 && (
                    <p className="mt-1 text-xs text-ink/55">Covered: {l.firstsCovered.join(", ")}</p>
                  )}
                  {l.notes && <p className="mt-1 text-sm text-ink/75">{l.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
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
