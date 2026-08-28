"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useFacilitatorPortal } from "@/lib/facilitatorStore";

export function FacilitatorPortalGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { application, profile } = useFacilitatorPortal();
  const ready = application?.status === "accepted" && profile;

  useEffect(() => {
    if (application !== undefined && application.status !== "accepted") {
      router.replace("/facilitator/login");
    } else if (application === null || (application === undefined && profile === null)) {
      // handled below once applications have loaded
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [application]);

  if (!ready) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center bg-paper-dim px-6 text-center">
        <p className="text-sm text-ink/45">Loading your facilitator portal…</p>
      </div>
    );
  }

  return <>{children}</>;
}
