"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TextField } from "@/components/ui/TextField";
import { OAuthButtons } from "@/components/auth/OAuthButtons";
import { Divider } from "@/components/auth/Divider";
import { PillSelect } from "@/components/auth/PillSelect";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { loadProfile, saveProfile } from "@/lib/profileStore";

const COLOR = "var(--sunshine-orange)";
const STATUS_OPTIONS = ["Student", "Recent grad", "Early professional", "Career-changer"];
const HORIZON_OPTIONS = ["Not sure yet", "0 to 6 months", "6 to 12 months", "1 to 2 years"];

export function IndependentSignupForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [horizon, setHorizon] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [gradDate, setGradDate] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    saveProfile({
      ...loadProfile(),
      name,
      status: status ?? "",
      accountType: "independent",
      ...(status === "Recent grad" && gradDate ? { gradDate } : {}),
    });
    setDone(true);
  }

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
            style={{ background: `color-mix(in oklab, ${COLOR} 20%, transparent)`, color: COLOR }}
          >
            ✓
          </div>
          <h2 className="font-display text-xl font-semibold text-paper">
            You&apos;re in{name ? `, ${name.split(" ")[0]}` : ""}.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-paper/60">
            {status ? `Set up for a ${status.toLowerCase()}. ` : ""}
            First up: Core Values Audit, about 30 minutes.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 inline-block w-full rounded-2xl px-6 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.015]"
            style={{ background: COLOR }}
          >
            Continue to your dashboard
          </Link>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <OAuthButtons note="LinkedIn can pre-fill your Strength Inventory later, with your consent." />
          <Divider label="or continue with email" />

          <TextField
            id="name"
            label="Full name"
            placeholder="Ada Lovelace"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="you@example.com"
            required
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            placeholder="At least 8 characters"
            minLength={8}
            required
          />

          <PillSelect
            label="Which describes you best?"
            options={STATUS_OPTIONS}
            value={status}
            onChange={setStatus}
            color={COLOR}
          />
          {status === "Recent grad" && (
            <TextField
              id="gradDate"
              type="date"
              label="Graduation date"
              hint="Powers a days-since-graduation counter on your dashboard."
              value={gradDate}
              onChange={(e) => setGradDate(e.target.value)}
            />
          )}
          <PillSelect
            label="Career timeline (optional)"
            options={HORIZON_OPTIONS}
            value={horizon}
            onChange={setHorizon}
            color={COLOR}
          />

          <SubmitButton color={COLOR}>Create my account</SubmitButton>

          <p className="text-center text-xs leading-relaxed text-paper/40">
            By continuing you agree FIRSTS is a guidance tool, not a
            licensed counselor.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
