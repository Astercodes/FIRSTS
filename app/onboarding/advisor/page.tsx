import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { AdvisorSignupForm } from "@/components/auth/AdvisorSignupForm";

export const metadata: Metadata = { title: "Advisor sign-up | FIRSTS" };

export default function AdvisorSignup() {
  return (
    <AuthShell
      tag="Path C · Advisor / institution"
      title="Verify your institution."
      subtitle="For career center staff, advisors, and mentors at partner schools, plus campus-wide administrators setting up FIRSTS for their whole institution."
      color="var(--citrus-lime)"
    >
      <AdvisorSignupForm />
    </AuthShell>
  );
}
