"use client";

import { useState } from "react";
import Link from "next/link";
import { STAGES, type StageId } from "@/lib/dashboardData";
import { submitApplication, myApplication, useFacilitatorApplications, type FormatPreference } from "@/lib/facilitatorApplicationStore";

const ACCENT = "var(--fuchsia-blast)";
const AVAILABILITY_OPTIONS = ["1 to 3 hrs/month", "4 to 6 hrs/month", "8 to 10 hrs/month", "10+ hrs/month"];
const FORMAT_OPTIONS: FormatPreference[] = ["Online", "In-person", "Both"];

export function ApplicationForm() {
  const applications = useFacilitatorApplications();
  const existing = myApplication(applications);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [background, setBackground] = useState("");
  const [stagesInterested, setStagesInterested] = useState<StageId[]>([]);
  const [priorExperience, setPriorExperience] = useState("");
  const [availability, setAvailability] = useState<string | null>(null);
  const [formatPreference, setFormatPreference] = useState<FormatPreference | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (existing || submitted) {
    return (
      <div className="mx-auto max-w-xl px-6 py-20 text-center">
        <div
          className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
          style={{ background: `color-mix(in oklab, ${ACCENT} 18%, white)`, color: ACCENT }}
        >
          ✓
        </div>
        <h1 className="font-display text-2xl font-semibold text-ink">Application received.</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          {existing?.name ? `Thanks, ${existing.name.split(" ")[0]}. ` : "Thanks. "}
          We&apos;ll match your interests to stage-specific training. You&apos;ll unlock your
          facilitator portal once training opens up.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/facilitator"
            className="inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: ACCENT }}
          >
            Enter your facilitator portal
          </Link>
          <Link
            href="/for/facilitators"
            className="inline-block rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/30"
          >
            Back to facilitators
          </Link>
        </div>
      </div>
    );
  }

  function toggleStage(id: StageId) {
    setStagesInterested((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || stagesInterested.length === 0 || !availability || !formatPreference) return;
    submitApplication({
      name: name.trim(),
      email: email.trim(),
      background: background.trim(),
      stagesInterested,
      priorExperience: priorExperience.trim(),
      availability,
      formatPreference,
    });
    setSubmitted(true);
  }

  const canSubmit = name.trim() && email.trim() && stagesInterested.length > 0 && availability && formatPreference;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: ACCENT }}>
          Apply to facilitate
        </p>
        <h1 className="mt-1.5 font-display text-3xl font-semibold tracking-tight text-ink">
          Tell us about you
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Background, which stages you&apos;re drawn to, and when you&apos;re free. Training is
          matched to what you tell us here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-ink/10 bg-white p-7 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <LabeledInput label="Full name" value={name} onChange={setName} placeholder="Ada Lovelace" required />
          <LabeledInput label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" required />
        </div>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Background
          </span>
          <textarea
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            placeholder="What you do now, and why this interests you…"
            rows={3}
            className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
          />
        </div>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Which stages are you drawn to?
          </span>
          <p className="mb-2 text-xs text-ink/45">Pick as many as feel right, you&apos;ll train stage by stage either way.</p>
          <div className="flex flex-wrap gap-2">
            {STAGES.map((s) => {
              const active = stagesInterested.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleStage(s.id)}
                  className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                  style={
                    active
                      ? { borderColor: ACCENT, color: ACCENT, background: `color-mix(in oklab, ${ACCENT} 14%, white)` }
                      : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                  }
                >
                  {s.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Prior mentorship or teaching experience
          </span>
          <textarea
            value={priorExperience}
            onChange={(e) => setPriorExperience(e.target.value)}
            placeholder="Optional, tutoring, RA work, workshops you've run, anything relevant…"
            rows={2}
            className="w-full resize-none rounded-2xl border border-ink/10 bg-paper-dim px-4 py-3 text-sm text-ink outline-none focus:border-ink/25"
          />
        </div>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Availability
          </span>
          <div className="flex flex-wrap gap-2">
            {AVAILABILITY_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setAvailability(opt)}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                style={
                  availability === opt
                    ? { borderColor: ACCENT, color: ACCENT, background: `color-mix(in oklab, ${ACCENT} 14%, white)` }
                    : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                }
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">
            Format
          </span>
          <div className="flex flex-wrap gap-2">
            {FORMAT_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setFormatPreference(opt)}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all"
                style={
                  formatPreference === opt
                    ? { borderColor: ACCENT, color: ACCENT, background: `color-mix(in oklab, ${ACCENT} 14%, white)` }
                    : { borderColor: "rgba(11,4,16,0.1)", color: "rgba(11,4,16,0.55)" }
                }
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
          style={{ background: ACCENT }}
        >
          Submit application
        </button>
      </form>
    </div>
  );
}

function LabeledInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-ink/10 bg-paper-dim px-4 py-2.5 text-sm text-ink outline-none focus:border-ink/25"
      />
    </label>
  );
}
