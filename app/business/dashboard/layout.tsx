import type { ReactNode } from "react";
import { BusinessSidebar } from "@/components/business/portal/BusinessSidebar";
import { BusinessTopbar } from "@/components/business/portal/BusinessTopbar";
import { BusinessMobileNav } from "@/components/business/portal/BusinessMobileNav";

export default function BusinessDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="workspace-shell portal-bg min-h-[100svh] print:bg-white">
      <BusinessSidebar />
      <div className="lg:pl-64 print:pl-0">
        <BusinessTopbar />
        <BusinessMobileNav />
        <main className="workspace-content px-6 py-8 lg:px-10 lg:py-10 print:p-0">{children}</main>
      </div>
    </div>
  );
}
