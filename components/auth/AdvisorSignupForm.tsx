"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TextField } from "@/components/ui/TextField";
import { PillSelect } from "@/components/auth/PillSelect";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { findInstitutionByDomain, type Institution } from "@/lib/institutions";
import { saveAdvisor, type AdvisorRole } from "@/lib/advisorStore";

const COLOR = "var(--citrus-lime)";
const ROLES: AdvisorRole[] = ["Advisor / Mentor", "Institution Admin"];

type Step = "entry" | "verified" | "not-approved" | "requested" | "done";

export function AdvisorSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<Step>("entry");
  const [match, setMatch] = useState<Institution | undefined>();
  const [role, setRole] = useState<AdvisorRole | null>(null);
  const [orgName, setOrgName] = useState("");

  function handleEntrySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = findInstitutionByDomain(email);
    setMatch(found);
    setStep(found ? "verified" : "not-approved");
  }

  function handleVerifiedSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (role) {
      saveAdvisor({ name, email, institution: match?.name ?? "", role });
    }
    setStep("done");
  }

  function handleApplySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep("requested");
  }

  return (
    <AnimatePresence mode="wait">
      {step === "entry" && (
        <motion.form
          key="entry"
          exit={{ opacity: 0 }}
          onSubmit={handleEntrySubmit}
          className="space-y-5"
        >
          <TextField
            id="inst-email"
            type="email"
            label="Institution email"
            placeholder="you@careercenter.edu"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton color={COLOR}>Verify institution</SubmitButton>
          <p className="text-center text-xs leading-relaxed text-paper/40">
            We check this against your institution&apos;s approved staff list
            or an existing admin&apos;s invite.
          </p>
        </motion.form>
      )}

      {step === "verified" && (
        <motion.form
          key="verified"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          onSubmit={handleVerifiedSubmit}
          className="space-y-5"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper/70">
            ✓ <strong className="text-paper">{match?.name}</strong> is a FIRSTS
            partner institution
          </div>
          <TextField
            id="advisor-name"
            label="Full name"
            placeholder="Priya Nandakumar"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <PillSelect
            label="Your role"
            options={ROLES}
            value={role}
            onChange={(v) => setRole(v as AdvisorRole)}
            color={COLOR}
          />
          <TextField
            id="password"
            type="password"
            label="Set a password"
            placeholder="At least 8 characters"
            minLength={8}
            required
          />
          <SubmitButton color={COLOR} disabled={!role}>
            Continue
          </SubmitButton>
        </motion.form>
      )}

      {step === "not-approved" && (
        <motion.div
          key="not-approved"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="space-y-6"
        >
          <p className="text-sm leading-relaxed text-paper/70">
            <strong className="text-paper">{email}</strong> isn&apos;t on an
            approved staff list yet. Two ways forward:
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-paper">
              Already a partner school?
            </p>
            <p className="mt-1 text-xs leading-relaxed text-paper/55">
              Ask your Institution Admin to invite you from their dashboard.
            </p>
          </div>

          <form onSubmit={handleApplySubmit} className="space-y-4">
            <p className="text-sm font-semibold text-paper">
              New to FIRSTS? Apply to bring it to your school.
            </p>
            <TextField
              id="org-name"
              label="Institution name"
              placeholder="e.g. Riverside Community College"
              required
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
            <SubmitButton color={COLOR}>Request access</SubmitButton>
          </form>
        </motion.div>
      )}

      {(step === "requested" || step === "done") && (
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
            {step === "done" ? "You're verified." : "Request received."}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/60">
            {step === "done"
              ? `Welcome to the ${match?.name} team.`
              : `We'll reach out about bringing FIRSTS to ${orgName || "your school"}.`}
          </p>
          {step === "done" && (
            <Link
              href="/advisor"
              className="mt-6 inline-block w-full rounded-2xl px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.015]"
              style={{ background: COLOR }}
            >
              Continue to your dashboard
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
