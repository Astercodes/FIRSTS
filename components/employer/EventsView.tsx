"use client";

import { useState } from "react";
import {
  createEvent,
  removeEvent,
  useRecruitingEvents,
  useEventRsvps,
  attendeeCount,
  type EventType,
  type EventFormat,
} from "@/lib/eventsStore";
import { sponsoredInstitutions } from "@/lib/talentPool";
import { loadEmployer, MOCK_EMPLOYER } from "@/lib/employerStore";

const EVENT_TYPES: EventType[] = ["Career fair", "Info session", "Office hours"];
const FORMATS: EventFormat[] = ["Virtual", "In-person"];
const ACCENT = "var(--pink-grapefruit)";

export function EventsView() {
  const events = useRecruitingEvents();
  const rsvps = useEventRsvps();
  const institutions = sponsoredInstitutions();

  const [title, setTitle] = useState("");
  const [type, setType] = useState<EventType>("Info session");
  const [format, setFormat] = useState<EventFormat>("Virtual");
  const [institution, setInstitution] = useState<string>("all");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  function handleCreate() {
    if (!title.trim() || !date) return;
    const employer = loadEmployer() ?? MOCK_EMPLOYER;
    createEvent({
      title: title.trim(),
      type,
      format,
      institution,
      date,
      description: description.trim(),
      company: employer.company,
    });
    setTitle("");
    setDate("");
    setDescription("");
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Soft-touch presence
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Events & recruiting
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-ink/50">
          Career fairs, info sessions, and office hours, visible to students at the schools you
          sponsor without leaving FIRSTS.
        </p>
      </div>

      <div className="rounded-3xl border border-ink/10 bg-white p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-ink/45">
          Host an event
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <LabeledInput label="Title" value={title} onChange={setTitle} placeholder="e.g. Case Interview Workshop" />
          <div>
            <span className="mb-1.5 block text-xs font-medium text-ink/50">Date & time</span>
            <input
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            />
          </div>
          <div>
            <span className="mb-1.5 block text-xs font-medium text-ink/50">Type</span>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as EventType)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            >
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <span className="mb-1.5 block text-xs font-medium text-ink/50">Format</span>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as EventFormat)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            >
              {FORMATS.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-ink/50">Open to</span>
            <select
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
            >
              <option value="all">All schools</option>
              {institutions.map((inst) => (
                <option key={inst} value={inst}>{inst}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <span className="mb-1.5 block text-xs font-medium text-ink/50">Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What should students expect?"
              rows={2}
              className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleCreate}
          disabled={!title.trim() || !date}
          className="mt-4 rounded-2xl bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-opacity disabled:opacity-40"
        >
          Publish event
        </button>
      </div>

      <div className="space-y-4">
        {events.length === 0 ? (
          <div className="rounded-3xl border border-ink/10 bg-white p-10 text-center">
            <p className="text-sm text-ink/50">No events published yet.</p>
          </div>
        ) : (
          events.map((event) => (
            <div key={event.id} className="rounded-3xl border border-ink/10 bg-white p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full px-2.5 py-1 text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                      {event.type}
                    </span>
                    <span className="text-xs text-ink/45">{event.format}</span>
                  </div>
                  <h2 className="mt-2 font-display text-lg font-semibold text-ink">{event.title}</h2>
                  <p className="mt-1 text-sm text-ink/55">
                    {new Date(event.date).toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                    {" · "}
                    {event.institution === "all" ? "All schools" : event.institution}
                  </p>
                  {event.description && <p className="mt-2 text-sm text-ink/65">{event.description}</p>}
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-ink">{attendeeCount(event, rsvps)}</p>
                  <p className="text-xs text-ink/45">RSVPs</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeEvent(event.id)}
                className="mt-4 text-xs font-medium text-ink/35 underline decoration-ink/20 underline-offset-4 hover:text-ink"
              >
                Cancel event
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function LabeledInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink/50">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
      />
    </label>
  );
}
