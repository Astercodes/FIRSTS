import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";
import { FacilitatorLoginPanel } from "@/components/facilitator/FacilitatorLoginPanel";

export const metadata: Metadata = { title: "Facilitator portal | FIRSTS" };

export default function FacilitatorLoginPage() {
  return (
    <AuthShell
      tag="Facilitator portal"
      title="Welcome back."
      subtitle="Your training hub, resources, and session tools live here once you're accepted."
      color="var(--fuchsia-blast)"
      backHref="/for/facilitators"
      backLabel="← Back to facilitators"
      footer={<></>}
    >
      <FacilitatorLoginPanel />
    </AuthShell>
  );
}
