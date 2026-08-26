"use client";

import { useEffect, useMemo, useState } from "react";
import { cohortsForInstitution } from "@/lib/cohortData";
import { loadAdvisor, ADVISOR_CHANGE_EVENT, MOCK_ADVISOR, type AdvisorProfile } from "@/lib/advisorStore";
import {
  taggedStudents,
  applyFilters,
  DEFAULT_FILTERS,
  type SegmentFilters,
  type TaggedStudent,
} from "@/lib/segmentation";
import { useCustomCohorts } from "@/lib/customCohortStore";
import { logBroadcast, useBroadcasts, deleteBroadcast } from "@/lib/broadcastStore";
import { addAnnotation, deleteAnnotation, useAnnotations } from "@/lib/annotationStore";
import { FIRSTS } from "@/lib/dashboardData";

const STAGE_LABEL: Record<string, string> = {
  one: "Stage One",
  two: "Stage Two",
  three: "Stage Three",
  four: "Stage Four",
  complete: "Complete",
};

const TRACKED_STAGES = ["one", "two", "three", "four"] as const;
const ANNOTATABLE_FIRSTS = FIRSTS.filter((f) => (TRACKED_STAGES as readonly string[]).includes(f.stage));

const MAILTO_BCC_CAP = 50;
const COLLAPSED_PREVIEW = 8;
const COLLAPSED_HISTORY = 5;

function studentKey(s: TaggedStudent) {
  return `${s.cohortId}-${s.id}`;
}

export function CommunicationView() {
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
  const institution = advisor?.institution || MOCK_ADVISOR.institution;
  const cohorts = useMemo(() => cohortsForInstitution(institution), [institution]);
  const tagged = useMemo(() => taggedStudents(cohorts), [cohorts]);
  const customCohorts = useCustomCohorts();

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">{institution}</p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">Communication</h1>
        <p className="mt-2 text-sm text-ink/55">
          Reach a filtered group directly from here, and leave a note on a specific FIRST for a
          specific student.
        </p>
      </div>

      <BroadcastPanel advisorName={advisorName} tagged={tagged} customCohorts={customCohorts} />
      <AnnotationPanel tagged={tagged} />
    </div>
  );
}

function BroadcastPanel({
  advisorName,
  tagged,
  customCohorts,
}: {
  advisorName: string;
  tagged: TaggedStudent[];
  customCohorts: ReturnType<typeof useCustomCohorts>;
}) {
  const majors = useMemo(() => Array.from(new Set(tagged.map((s) => s.major))).sort(), [tagged]);
  const gradYears = useMemo(() => Array.from(new Set(tagged.map((s) => s.gradYear))).sort(), [tagged]);

  const [source, setSource] = useState<"filters" | "custom">("filters");
  const [filters, setFilters] = useState<SegmentFilters>(DEFAULT_FILTERS);
  const [customCohortId, setCustomCohortId] = useState<string>("");

  const filteredRecipients = useMemo(() => applyFilters(tagged, filters), [tagged, filters]);
  const customRecipients = useMemo(() => {
    const cohort = customCohorts.find((c) => c.id === customCohortId);
    if (!cohort) return [];
    const keys = new Set(cohort.studentKeys);
    return tagged.filter((s) => keys.has(studentKey(s)));
  }, [customCohorts, customCohortId, tagged]);

  const recipients = source === "filters" ? filteredRecipients : customRecipients;
  const filterSummary =
    source === "filters"
      ? `Major: ${filters.major}, Grad year: ${filters.gradYear}, Not started: ${filters.notStartedStage}${
          filters.firstGen || filters.athlete || filters.international
            ? `, Tags: ${[filters.firstGen && "First-gen", filters.athlete && "Athlete", filters.international && "International"].filter(Boolean).join(", ")}`
            : ""
        }`
      : `Custom cohort: ${customCohorts.find((c) => c.id === customCohortId)?.name ?? "None selected"}`;

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  const broadcasts = useBroadcasts();
  const [showAllHistory, setShowAllHistory] = useState(false);
  const visibleHistory = showAllHistory ? broadcasts : broadcasts.slice(0, COLLAPSED_HISTORY);

  function sendBroadcast() {
    if (!subject.trim() || !body.trim() || recipients.length === 0) return;
    const bccList = recipients.slice(0, MAILTO_BCC_CAP).map((s) => s.email);
    const mailto = `mailto:?bcc=${encodeURIComponent(bccList.join(","))}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    logBroadcast(subject.trim(), body.trim(), recipients.length, filterSummary);
    setSubject("");
    setBody("");
  }

  async function copyAllEmails() {
    try {
      await navigator.clipboard.writeText(recipients.map((s) => s.email).join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-7">
      <h2 className="mb-1 font-display text-lg font-semibold text-ink">Broadcast a message</h2>
      <p className="mb-5 text-xs text-ink/45">
        Target a filtered group the same way Segmentation does, or one of your saved custom
        cohorts. Sending opens your own mail client with recipients BCC&apos;d, capped at{" "}
        {MAILTO_BCC_CAP} for larger groups, since some mail clients choke on a longer address list.
      </p>

      <div className="mb-4 flex gap-1.5">
        <button
          type="button"
          onClick={() => setSource("filters")}
          className="rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors"
          style={
            source === "filters"
              ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 12%, white)" }
              : { borderColor: "rgba(11,4,16,0.12)", color: "rgba(11,4,16,0.55)" }
          }
        >
          Filter students
        </button>
        <button
          type="button"
          onClick={() => setSource("custom")}
          className="rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors"
          style={
            source === "custom"
              ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 12%, white)" }
              : { borderColor: "rgba(11,4,16,0.12)", color: "rgba(11,4,16,0.55)" }
          }
        >
          Use a custom cohort
        </button>
      </div>

      {source === "filters" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field label="Major">
            <select
              value={filters.major}
              onChange={(e) => setFilters((f) => ({ ...f, major: e.target.value }))}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="all">All majors</option>
              {majors.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </Field>
          <Field label="Grad year">
            <select
              value={filters.gradYear}
              onChange={(e) => setFilters((f) => ({ ...f, gradYear: e.target.value }))}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="all">All grad years</option>
              {gradYears.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </Field>
          <Field label="Hasn't started">
            <select
              value={filters.notStartedStage}
              onChange={(e) => setFilters((f) => ({ ...f, notStartedStage: e.target.value as SegmentFilters["notStartedStage"] }))}
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="any">Any stage</option>
              <option value="one">Stage One</option>
              <option value="two">Stage Two</option>
              <option value="three">Stage Three</option>
              <option value="four">Stage Four</option>
            </select>
          </Field>
          <Field label="Tags">
            <div className="flex flex-wrap gap-1.5">
              <TagToggle label="First-gen" active={filters.firstGen} onClick={() => setFilters((f) => ({ ...f, firstGen: !f.firstGen }))} />
              <TagToggle label="Athlete" active={filters.athlete} onClick={() => setFilters((f) => ({ ...f, athlete: !f.athlete }))} />
              <TagToggle label="International" active={filters.international} onClick={() => setFilters((f) => ({ ...f, international: !f.international }))} />
            </div>
          </Field>
        </div>
      ) : (
        <Field label="Custom cohort">
          <select
            value={customCohortId}
            onChange={(e) => setCustomCohortId(e.target.value)}
            className="w-full max-w-sm rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
          >
            <option value="">Choose a saved cohort</option>
            {customCohorts.map((c) => (
              <option key={c.id} value={c.id}>{c.name} ({c.studentKeys.length})</option>
            ))}
          </select>
          {customCohorts.length === 0 && (
            <p className="mt-2 text-xs text-ink/40">
              No custom cohorts yet. Save one from the Segmentation page first.
            </p>
          )}
        </Field>
      )}

      <div className="mt-5 rounded-2xl bg-paper-dim px-4 py-3">
        <p className="text-sm text-ink/70">
          <span className="font-semibold text-ink">{recipients.length}</span> student{recipients.length === 1 ? "" : "s"} match
        </p>
        {recipients.length > 0 && (
          <p className="mt-1 text-xs text-ink/50">
            {recipients.slice(0, COLLAPSED_PREVIEW).map((s) => s.name).join(", ")}
            {recipients.length > COLLAPSED_PREVIEW && ` +${recipients.length - COLLAPSED_PREVIEW} more`}
          </p>
        )}
      </div>

      <div className="mt-5 space-y-3">
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={`Hi everyone,\n\nA quick nudge about...\n\nBest,\n${advisorName}`}
          rows={5}
          className="w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={sendBroadcast}
          disabled={!subject.trim() || !body.trim() || recipients.length === 0}
          className="rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Send broadcast
        </button>
        {recipients.length > MAILTO_BCC_CAP && (
          <button
            type="button"
            onClick={copyAllEmails}
            className="rounded-xl border border-ink/15 px-4 py-2.5 text-sm font-semibold text-ink/75 transition-colors hover:border-ink/30"
          >
            {copied ? "Copied!" : `Copy all ${recipients.length} emails`}
          </button>
        )}
      </div>
      {recipients.length > MAILTO_BCC_CAP && (
        <p className="mt-2 text-xs text-ink/40">
          Your mail client will open with the first {MAILTO_BCC_CAP} BCC&apos;d. Copy the full list
          to reach everyone else.
        </p>
      )}

      {broadcasts.length > 0 && (
        <div className="mt-6 border-t border-ink/8 pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/40">Sent broadcasts</p>
          <div className="space-y-2.5">
            {visibleHistory.map((b) => (
              <div key={b.id} className="flex items-start justify-between gap-3 rounded-xl bg-paper-dim px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{b.subject}</p>
                  <p className="mt-0.5 text-xs text-ink/45">
                    {b.recipientCount} recipient{b.recipientCount === 1 ? "" : "s"} · {b.filterSummary}
                  </p>
                  <p className="text-xs text-ink/35">{new Date(b.sentAt).toLocaleString()}</p>
                </div>
                <button
                  type="button"
                  onClick={() => deleteBroadcast(b.id)}
                  className="shrink-0 text-xs font-medium text-ink/30 hover:text-[#c92f3f]"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          {broadcasts.length > COLLAPSED_HISTORY && (
            <button
              type="button"
              onClick={() => setShowAllHistory((v) => !v)}
              className="mt-3 text-xs font-semibold text-berry-burst hover:underline"
            >
              {showAllHistory ? "Show less" : `See all ${broadcasts.length} →`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function AnnotationPanel({ tagged }: { tagged: TaggedStudent[] }) {
  const [query, setQuery] = useState("");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [firstId, setFirstId] = useState<number>(ANNOTATABLE_FIRSTS[0]?.id ?? 0);
  const [text, setText] = useState("");

  const matches = useMemo(() => {
    if (!query.trim() || selectedKey) return [];
    const q = query.trim().toLowerCase();
    return tagged.filter((s) => s.name.toLowerCase().includes(q)).slice(0, 8);
  }, [query, selectedKey, tagged]);

  const selectedStudent = useMemo(
    () => (selectedKey ? tagged.find((s) => studentKey(s) === selectedKey) ?? null : null),
    [selectedKey, tagged]
  );

  const allAnnotations = useAnnotations();
  const studentAnnotations = useMemo(
    () => (selectedKey ? allAnnotations.filter((a) => a.studentKey === selectedKey) : []),
    [allAnnotations, selectedKey]
  );

  function selectStudent(s: TaggedStudent) {
    setSelectedKey(studentKey(s));
    setQuery(s.name);
  }

  function clearStudent() {
    setSelectedKey(null);
    setQuery("");
  }

  function submitAnnotation() {
    if (!selectedStudent || !text.trim()) return;
    const first = ANNOTATABLE_FIRSTS.find((f) => f.id === firstId);
    if (!first) return;
    addAnnotation(studentKey(selectedStudent), selectedStudent.name, first.id, first.code, first.title, text.trim());
    setText("");
  }

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-7">
      <h2 className="mb-1 font-display text-lg font-semibold text-ink">Annotate a FIRST</h2>
      <p className="mb-5 text-xs text-ink/45">
        Leave a note tied to a specific student and a specific FIRST, so context travels with the
        work instead of living only in your head.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Student">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedKey(null);
              }}
              placeholder="Search by name"
              className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            />
            {selectedStudent && (
              <button
                type="button"
                onClick={clearStudent}
                className="mt-1.5 text-xs font-medium text-ink/40 underline decoration-ink/20 underline-offset-4 hover:text-ink"
              >
                Change student
              </button>
            )}
            {matches.length > 0 && (
              <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-ink/10 bg-white shadow-lg">
                {matches.map((s) => (
                  <button
                    key={studentKey(s)}
                    type="button"
                    onClick={() => selectStudent(s)}
                    className="block w-full px-3 py-2 text-left text-sm text-ink/75 hover:bg-paper-dim"
                  >
                    {s.name} <span className="text-xs text-ink/40">· {s.cohortName}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </Field>

        <Field label="FIRST">
          <select
            value={firstId}
            onChange={(e) => setFirstId(Number(e.target.value))}
            className="w-full rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
          >
            {TRACKED_STAGES.map((stage) => (
              <optgroup key={stage} label={STAGE_LABEL[stage]}>
                {ANNOTATABLE_FIRSTS.filter((f) => f.stage === stage).map((f) => (
                  <option key={f.id} value={f.id}>{f.code} {f.title}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What should the next person looking at this student's work know?"
        rows={3}
        className="mt-4 w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
      />
      <button
        type="button"
        onClick={submitAnnotation}
        disabled={!selectedStudent || !text.trim()}
        className="mt-3 rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
      >
        Add annotation
      </button>

      {selectedStudent && (
        <div className="mt-6 border-t border-ink/8 pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/40">
            {selectedStudent.name}&apos;s annotations ({studentAnnotations.length})
          </p>
          {studentAnnotations.length === 0 ? (
            <p className="text-sm text-ink/45">No annotations yet for this student.</p>
          ) : (
            <div className="space-y-2.5">
              {studentAnnotations.map((a) => (
                <div key={a.id} className="rounded-xl bg-paper-dim p-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs font-semibold text-ink/60">
                      {a.firstCode} {a.firstTitle} · {a.createdAt}
                    </p>
                    <button
                      type="button"
                      onClick={() => deleteAnnotation(a.id)}
                      className="shrink-0 text-xs text-ink/30 hover:text-[#c92f3f]"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-ink/75">{a.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/40">
        {label}
      </label>
      {children}
    </div>
  );
}

function TagToggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors"
      style={
        active
          ? { borderColor: "var(--berry-burst)", color: "var(--berry-burst)", background: "color-mix(in oklab, var(--berry-burst) 12%, white)" }
          : { borderColor: "rgba(11,4,16,0.12)", color: "rgba(11,4,16,0.55)" }
      }
    >
      {label}
    </button>
  );
}
