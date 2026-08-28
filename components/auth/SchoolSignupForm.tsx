"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TextField } from "@/components/ui/TextField";
import { PillSelect } from "@/components/auth/PillSelect";
import { SubmitButton } from "@/components/auth/SubmitButton";
import {
  findInstitutionByDomain,
  searchInstitutions,
  type Institution,
} from "@/lib/institutions";
import { loadProfile, saveProfile } from "@/lib/profileStore";

const COLOR = "var(--neon-pink)";
const YEARS = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"];

type Step = "entry" | "redirecting" | "quiz" | "invite" | "not-found" | "done";

export function SchoolSignupForm() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<Step>("entry");
  const [match, setMatch] = useState<Institution | undefined>();
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [year, setYear] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (step !== "redirecting") return;
    const t = setTimeout(() => setStep("quiz"), 1700);
    return () => clearTimeout(t);
  }, [step]);

  function handleEntrySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = findInstitutionByDomain(email);
    setMatch(found);
    if (!found) setStep("not-found");
    else if (found.sso) setStep("redirecting");
    else setStep("invite");
  }

  function handleQuizSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    saveProfile({ ...loadProfile(), major, gradYear: year ?? "", accountType: "partner", institution: match?.name });
    setStep("done");
  }

  function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep("done");
  }

  const results = query ? searchInstitutions(query) : [];

  return (
    <AnimatePresence mode="wait">
      {step === "entry" && (
        <motion.div key="entry" exit={{ opacity: 0 }} className="space-y-5">
          <form onSubmit={handleEntrySubmit} className="space-y-5">
            <TextField
              id="school-email"
              type="email"
              label="School email"
              placeholder="you@stanford.edu"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton color={COLOR}>Continue</SubmitButton>
          </form>

          <button
            type="button"
            onClick={() => setShowSearch((s) => !s)}
            className="text-sm font-medium text-paper/55 underline decoration-white/25 underline-offset-4 transition-colors hover:text-paper"
          >
            {showSearch ? "Hide school search" : "Not sure of your school email? Search instead"}
          </button>

          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="overflow-hidden"
            >
              <TextField
                id="school-query"
                label="Search your school"
                placeholder="Start typing…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {results.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {results.map((inst) => (
                    <li key={inst.domain}>
                      <button
                        type="button"
                        onClick={() => {
                          setEmail(`you@${inst.domain}`);
                          setQuery("");
                          setShowSearch(false);
                        }}
                        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-left text-sm text-paper/80 transition-colors hover:border-white/25 hover:bg-white/10"
                      >
                        {inst.name}
                        <span className="text-xs text-paper/40">{inst.domain}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </motion.div>
      )}

      {step === "redirecting" && (
        <motion.div
          key="redirecting"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center py-6 text-center"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="mb-5 h-9 w-9 rounded-full border-2 border-white/15"
            style={{ borderTopColor: COLOR }}
          />
          <p className="text-sm text-paper/70">
            Redirecting to <strong className="text-paper">{match?.name}</strong>{" "}
            single sign-on…
          </p>
        </motion.div>
      )}

      {step === "quiz" && (
        <motion.form
          key="quiz"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          onSubmit={handleQuizSubmit}
          className="space-y-5"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper/70">
            ✓ Verified via <strong className="text-paper">{match?.name}</strong> SSO
          </div>
          <TextField
            id="major"
            label="Major / field of study"
            placeholder="e.g. Computer Science"
            required
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
          <PillSelect label="Year" options={YEARS} value={year} onChange={setYear} color={COLOR} />

          <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-paper/60">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--neon-pink)]"
            />
            I understand my advisor can see my completion status, and only
            my written reflections if I explicitly choose to share them
            (FERPA).
          </label>

          <SubmitButton color={COLOR} disabled={!consent}>
            Join {match?.name}
          </SubmitButton>
        </motion.form>
      )}

      {step === "invite" && (
        <motion.div
          key="invite"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="space-y-5 text-center"
        >
          <p className="text-sm leading-relaxed text-paper/70">
            <strong className="text-paper">{match?.name}</strong> uses invite-only
            roster access. If your career center has added you, check{" "}
            {email} for an invite link.
          </p>
          <button
            type="button"
            onClick={() => setStep("done")}
            className="w-full rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-white/5"
          >
            Resend invite email
          </button>
        </motion.div>
      )}

      {step === "not-found" && (
        <motion.form
          key="not-found"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          onSubmit={handleLeadSubmit}
          className="space-y-5"
        >
          <p className="text-sm leading-relaxed text-paper/70">
            We couldn&apos;t match <strong className="text-paper">{email}</strong>{" "}
            to a partner school yet. Tell us your school and we&apos;ll reach out,
            or continue on your own for now.
          </p>
          <TextField
            id="school-name"
            label="Your school's name"
            placeholder="e.g. University of Ibadan"
            required
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <SubmitButton color={COLOR}>Notify my school</SubmitButton>
          <Link
            href="/onboarding/independent"
            className="block text-center text-sm font-medium text-paper/55 underline decoration-white/25 underline-offset-4 transition-colors hover:text-paper"
          >
            Or continue as an independent user →
          </Link>
        </motion.form>
      )}

      {step === "done" && (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
            style={{ background: `color-mix(in oklab, ${COLOR} 20%, transparent)`, color: COLOR }}
          >
            ✓
          </div>
          <h2 className="font-display text-xl font-semibold text-paper">
            {match ? "You're all set." : "Thanks, we'll be in touch."}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/60">
            {match
              ? "Your cohort and advisor are linked to your profile."
              : "In the meantime you can start Stage One on your own."}
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-block w-full rounded-2xl px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.015]"
            style={{ background: COLOR }}
          >
            Continue to your dashboard
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
