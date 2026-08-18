import type { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { MobileNav } from "@/components/dashboard/MobileNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-paper-dim print:bg-white">
      <Sidebar />
      <div className="lg:pl-64 print:pl-0">
        <Topbar />
        <MobileNav />
        <main className="px-6 py-8 lg:px-10 lg:py-10 print:p-0">{children}</main>
      </div>
    </div>
  );
}
