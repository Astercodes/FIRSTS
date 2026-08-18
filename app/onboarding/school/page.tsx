import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { SchoolSignupForm } from "@/components/auth/SchoolSignupForm";

export const metadata: Metadata = { title: "School sign-in | FIRSTS" };

export default function SchoolSignup() {
  return (
    <AuthShell
      tag="Path A · Affiliated student"
      title="Sign in with your school."
      subtitle="We'll match your institution automatically and link your cohort and advisor."
      color="var(--neon-pink)"
    >
      <SchoolSignupForm />
    </AuthShell>
  );
}
