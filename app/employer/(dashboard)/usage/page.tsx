import type { Metadata } from "next";
import { UsageReportView } from "@/components/employer/UsageReportView";

export const metadata: Metadata = { title: "Usage & ROI | FIRSTS" };

export default function EmployerUsagePage() {
  return <UsageReportView />;
}
