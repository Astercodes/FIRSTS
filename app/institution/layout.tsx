import type { ReactNode } from "react";
import { InstitutionSidebar } from "@/components/institution/InstitutionSidebar";
import { InstitutionTopbar } from "@/components/institution/InstitutionTopbar";
import { InstitutionMobileNav } from "@/components/institution/InstitutionMobileNav";

export default function InstitutionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-paper-dim print:bg-white">
      <InstitutionSidebar />
      <div className="lg:pl-64 print:pl-0">
        <InstitutionTopbar />
        <InstitutionMobileNav />
        <main className="px-6 py-8 lg:px-10 lg:py-10 print:p-0">{children}</main>
      </div>
    </div>
  );
}
