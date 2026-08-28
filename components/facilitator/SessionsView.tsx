"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STAGES, type StageId } from "@/lib/dashboardData";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";
import {
  useFacilitatorSessions,
  createSession,
  publishSession,
  cancelSession,
  logSessionReport,
  type FacilitatorSession,
  type SessionFormat,
} from "@/lib/facilitatorSessionsStore";

const ACCENT = "var(--fuchsia-blast)";
const FORMATS: SessionFormat[] = ["Online", "In-person"];

const STATUS_META: Record<FacilitatorSession["status"], { label: string; color: string }> = {
  draft: { label: "Draft", color: "rgba(11,4,16,0.4)" },
  published: { label: "Published", color: "var(--fuchsia-blast)" },
  completed: { label: "Completed", color: "var(--citrus-lime)" },
  cancelled: { label: "Cancelled", color: "rgba(11,4,16,0.3)" },
};

export function SessionsView() {
  const { application } = useFacilitatorPortal();
  const sessions = useFacilitatorSessions();
  const [showForm, setShowForm] = useState(false);

  if (!application) return null;

  const stages = STAGES.filter((s) => application.stagesInterested.includes(s.id));

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between"
      >
        <p className="font-display text-lg font-semibold text-ink">Your sessions</p>
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          {showForm ? "Close" : "New session"}
        </button>
      </motion.div>

      <AnimatePresence>
        {showForm && (
          <NewSessionForm stages={stages} onCreated={() => setShowForm(false)} />
        )}
      </AnimatePresence>

      {sessions.length === 0 && !showForm && (
        <div className="rounded-3xl border border-ink/8 bg-white p-7 text-center">
          <p className="text-sm text-ink/50">No sessions yet, create your first one above.</p>
        </div>
      )}

      <div className="space-y-3">
        <AnimatePresence>
          {sessions.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function NewSessionForm({
  stages,
  onCreated,
}: {
  stages: { id: StageId; shortLabel: string }[];
  onCreated: () => void;
}) {
  const [stageId, setStageId] = useState<StageId | null>(stages[0]?.id ?? null);
  const [format, setFormat] = useState<SessionFormat>("Online");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("15");
  const [description, setDescription] = useState("");

  const canSubmit = stageId && date && Number(capacity) > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stageId || !canSubmit) return;
    createSession({ stageId, format, date, capacity: Number(capacity), description: description.trim() });
    onCreated();
  }

  return (
    <motion.form
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-3xl border border-ink/8 bg-white"
    >
      <div className="space-y-4 p-7">
        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Stage
          </span>
          <div className="flex flex-wrap gap-2">
            {stages.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStageId(s.id)}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                style={
                  stageId === s.id
                    ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--fuchsia-blast) 14%, white)" }
                    : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                }
              >
                {s.shortLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
              Format
            </span>
            <div className="flex gap-2">
              {FORMATS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFormat(f)}
                  className="rounded-full border px-3 py-1.5 text-xs font-semibold transition-all"
                  style={
                    format === f
                      ? { borderColor: ACCENT, color: ACCENT, background: "color-mix(in oklab, var(--fuchsia-blast) 14%, white)" }
                      : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                  }
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
              Date
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
              Capacity
            </span>
            <input
              type="number"
              min={1}
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Description
          </span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What students should expect from this session…"
            rows={2}
            className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          style={{ background: ACCENT }}
        >
          Save as draft
        </button>
      </div>
    </motion.form>
  );
}

function SessionCard({ session }: { session: FacilitatorSession }) {
  const [reporting, setReporting] = useState(false);
  const stageLabel = STAGES.find((s) => s.id === session.stageId)?.shortLabel ?? session.stageId;
  const status = STATUS_META[session.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-ink/8 bg-white p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-display text-sm font-semibold text-ink">{stageLabel}</p>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
              style={{ color: status.color, background: `color-mix(in oklab, ${status.color} 16%, white)` }}
            >
              {status.label}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-ink/50">
            {session.date || "No date set"} · {session.format}
          </p>
          {session.description && <p className="mt-2 text-sm text-ink/65">{session.description}</p>}
        </div>
        {session.status === "published" && (
          <div className="shrink-0 text-right">
            <p className="font-display text-lg font-bold text-ink">
              {session.registeredCount}/{session.capacity}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink/35">registered</p>
          </div>
        )}
      </div>

      {session.status === "draft" && (
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => publishSession(session.id)}
            className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Publish
          </button>
        </div>
      )}

      {session.status === "published" && (
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setReporting((v) => !v)}
            className="rounded-full px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}
          >
            {reporting ? "Close" : "Log session report"}
          </button>
          <button
            type="button"
            onClick={() => cancelSession(session.id)}
            className="rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold text-ink/60 transition-colors hover:border-ink/25"
          >
            Cancel session
          </button>
        </div>
      )}

      {session.status === "completed" && session.report && (
        <div className="mt-4 rounded-2xl bg-paper-dim px-4 py-3 text-xs text-ink/60">
          <p>
            <strong className="text-ink/75">{session.report.attendance}</strong> attended, logged{" "}
            {session.report.loggedAt}
          </p>
          {session.report.covered && <p className="mt-1">Covered: {session.report.covered}</p>}
        </div>
      )}

      <AnimatePresence>
        {reporting && (
          <ReportForm
            sessionId={session.id}
            defaultAttendance={session.registeredCount}
            onLogged={() => setReporting(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ReportForm({
  sessionId,
  defaultAttendance,
  onLogged,
}: {
  sessionId: string;
  defaultAttendance: number;
  onLogged: () => void;
}) {
  const [attendance, setAttendance] = useState(String(defaultAttendance));
  const [covered, setCovered] = useState("");
  const [concerns, setConcerns] = useState("");
  const [reflection, setReflection] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    logSessionReport(sessionId, {
      attendance: Number(attendance) || 0,
      covered: covered.trim(),
      concerns: concerns.trim(),
      reflection: reflection.trim(),
    });
    onLogged();
  }

  return (
    <motion.form
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      className="mt-4 space-y-3 overflow-hidden border-t border-ink/8 pt-4"
    >
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/50">
          Attendance
        </span>
        <input
          type="number"
          min={0}
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
          className="w-24 rounded-xl border border-ink/10 bg-paper-dim px-3 py-1.5 text-sm text-ink outline-none focus:border-ink/25"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/50">
          What did you cover?
        </span>
        <textarea
          value={covered}
          onChange={(e) => setCovered(e.target.value)}
          rows={2}
          className="w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/50">
          Any student concerns to flag? (optional, stays private to you and admin)
        </span>
        <textarea
          value={concerns}
          onChange={(e) => setConcerns(e.target.value)}
          rows={2}
          className="w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
        />
      </label>
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink/50">
          Self-reflection, what worked?
        </span>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          rows={2}
          className="w-full resize-none rounded-xl border border-ink/10 bg-paper-dim px-3 py-2 text-sm text-ink outline-none focus:border-ink/25"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-2xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: ACCENT }}
      >
        Submit report
      </button>
    </motion.form>
  );
}
