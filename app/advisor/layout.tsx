import type { ReactNode } from "react";
import { AdvisorSidebar } from "@/components/advisor/AdvisorSidebar";
import { AdvisorTopbar } from "@/components/advisor/AdvisorTopbar";
import { AdvisorMobileNav } from "@/components/advisor/AdvisorMobileNav";

export default function AdvisorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-paper-dim print:bg-white">
      <AdvisorSidebar />
      <div className="lg:pl-64 print:pl-0">
        <AdvisorTopbar />
        <AdvisorMobileNav />
        <main className="px-6 py-8 lg:px-10 lg:py-10 print:p-0">{children}</main>
      </div>
    </div>
  );
}
