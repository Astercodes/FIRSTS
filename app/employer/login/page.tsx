import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { EmployerLoginForm } from "@/components/auth/EmployerLoginForm";

export const metadata: Metadata = { title: "Employer portal | FIRSTS" };

export default function EmployerLoginPage() {
  return (
    <AuthShell
      tag="Employer preview"
      title="Enter the employer portal."
      subtitle="See your sponsorships and the candidate portfolios shared with you."
      color="var(--pink-grapefruit)"
      backHref="/for/employers"
      backLabel="← Back to employer overview"
      footer={<></>}
    >
      <EmployerLoginForm />
    </AuthShell>
  );
}
