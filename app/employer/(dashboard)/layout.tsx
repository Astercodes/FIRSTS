import type { ReactNode } from "react";
import { EmployerSidebar } from "@/components/employer/EmployerSidebar";
import { EmployerTopbar } from "@/components/employer/EmployerTopbar";
import { EmployerMobileNav } from "@/components/employer/EmployerMobileNav";

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-paper-dim print:bg-white">
      <EmployerSidebar />
      <div className="lg:pl-64 print:pl-0">
        <EmployerTopbar />
        <EmployerMobileNav />
        <main className="px-6 py-8 lg:px-10 lg:py-10 print:p-0">{children}</main>
      </div>
    </div>
  );
}
