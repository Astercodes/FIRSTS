import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopbar } from "@/components/admin/AdminTopbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100svh] bg-paper-dim print:bg-white">
      <AdminSidebar />
      <div className="lg:pl-64 print:pl-0">
        <AdminTopbar />
        <main className="px-6 py-8 lg:px-10 lg:py-10 print:p-0">{children}</main>
      </div>
    </div>
  );
}
