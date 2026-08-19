"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TextField } from "@/components/ui/TextField";
import { OAuthButtons } from "@/components/auth/OAuthButtons";
import { Divider } from "@/components/auth/Divider";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { findInstitutionByDomain } from "@/lib/institutions";
import { MOCK_USER } from "@/lib/dashboardData";

const COLOR = "var(--fuchsia-blast)";

type Step = "form" | "loading" | "done";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<Step>("form");
  const [resetSent, setResetSent] = useState(false);

  useEffect(() => {
    if (step !== "loading") return;
    const t = setTimeout(() => setStep("done"), 900);
    return () => clearTimeout(t);
  }, [step]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStep("loading");
  }

  function handleForgotPassword() {
    setResetSent(true);
  }

  const institution = email ? findInstitutionByDomain(email) : undefined;

  return (
    <AnimatePresence mode="wait">
      {step === "form" && (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <OAuthButtons />
          <Divider label="or log in with email" />

          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <TextField
              id="password"
              type="password"
              label="Password"
              placeholder="Your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-2 text-right">
              {resetSent ? (
                <span className="text-xs text-paper/45">
                  If an account exists for {email || "that email"}, a reset link is on its way.
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs font-medium text-paper/55 underline decoration-white/25 underline-offset-4 transition-colors hover:text-paper"
                >
                  Forgot password?
                </button>
              )}
            </div>
          </div>

          {institution && (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper/70">
              ✓ Recognized as a <strong className="text-paper">{institution.name}</strong> email
            </div>
          )}

          <SubmitButton color={COLOR}>Log in</SubmitButton>
        </motion.form>
      )}

      {step === "loading" && (
        <motion.div
          key="loading"
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
          <p className="text-sm text-paper/70">Logging you in…</p>
        </motion.div>
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
            Welcome back, {MOCK_USER.firstName}.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/60">
            {institution
              ? `Your ${institution.name} cohort and progress are right where you left them.`
              : "Your progress is right where you left it."}
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
