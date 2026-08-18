import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { IndependentSignupForm } from "@/components/auth/IndependentSignupForm";

export const metadata: Metadata = { title: "Sign up | FIRSTS" };

export default function IndependentSignup() {
  return (
    <AuthShell
      tag="Path B · Independent"
      title="Start on your own terms."
      subtitle="Students, recent grads, and career-changers, no institution required."
      color="var(--sunshine-orange)"
    >
      <IndependentSignupForm />
    </AuthShell>
  );
}
