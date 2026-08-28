import type { ReactNode } from "react";
import { FacilitatorSidebar } from "@/components/facilitator/FacilitatorSidebar";
import { FacilitatorTopbar } from "@/components/facilitator/FacilitatorTopbar";
import { FacilitatorMobileNav } from "@/components/facilitator/FacilitatorMobileNav";
import { FacilitatorPortalGate } from "@/components/facilitator/FacilitatorPortalGate";

export default function FacilitatorPortalLayout({ children }: { children: ReactNode }) {
  return (
    <FacilitatorPortalGate>
      <div className="min-h-[100svh] bg-paper-dim print:bg-white">
        <FacilitatorSidebar />
        <div className="lg:pl-64 print:pl-0">
          <FacilitatorTopbar />
          <FacilitatorMobileNav />
          <main className="px-6 py-8 lg:px-10 lg:py-10 print:p-0">{children}</main>
        </div>
      </div>
    </FacilitatorPortalGate>
  );
}
