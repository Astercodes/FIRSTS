"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "@/components/ui/TextField";
import { SubmitButton } from "@/components/auth/SubmitButton";
import { saveEmployer } from "@/lib/employerStore";

const COLOR = "var(--pink-grapefruit)";

export function EmployerLoginForm() {
  const router = useRouter();
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    saveEmployer({ contactName, email, company });
    router.push("/employer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <TextField
        id="employer-name"
        label="Your name"
        placeholder="Sam Whitfield"
        required
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
      />
      <TextField
        id="employer-email"
        type="email"
        label="Work email"
        placeholder="sam@acmecorp.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="employer-company"
        label="Company"
        placeholder="Acme Corp"
        required
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <SubmitButton color={COLOR} disabled={loading}>
        {loading ? "Entering…" : "Enter the employer portal"}
      </SubmitButton>
      <p className="text-center text-xs leading-relaxed text-paper/40">
        This is a preview login for evaluating the employer portal.
        No verification is required, and no real sponsorship is created.
      </p>
    </form>
  );
}
