"use client";

import { useState, type FormEvent } from "react";

const INTEREST_OPTIONS = [
  "Piloting FIRSTS for my institution",
  "Career center rollout",
  "Employer partnership / candidate portfolios",
  "Sponsoring a cohort, school, or department",
  "Something else",
];

export function RequestDemoForm({ initialInterest }: { initialInterest: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [interest, setInterest] = useState(initialInterest);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink/10 bg-white p-10 text-center">
        <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-citrus-lime/20">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} className="h-6 w-6 text-berry-burst">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink">
          Thanks, {name.split(" ")[0] || "we've got it"}.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
          Someone from our team will reach out to {email || "your email"} within
          2 business days to talk through {interest.toLowerCase() || "what you need"}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink/70">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jordan Reyes"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink/70">Work email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jordan@school.edu"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-ink/70">
          Organization, school, or company
        </span>
        <input
          required
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Acme University"
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
        />
      </label>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-ink/70">I&apos;m interested in</span>
        <select
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink focus:border-ink/40 focus:outline-none"
        >
          <option value="" disabled>
            Select one
          </option>
          {INTEREST_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium text-ink/70">
          Anything else we should know? <span className="font-normal text-ink/40">(optional)</span>
        </span>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Cohort size, timeline, or a specific question."
          className="w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-paper transition-transform duration-300 hover:scale-[1.01] active:scale-[0.98] sm:w-auto"
      >
        Request a demo
      </button>
    </form>
  );
}
