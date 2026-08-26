import type { Metadata } from "next";
import { ReportingView } from "@/components/advisor/ReportingView";

export const metadata: Metadata = { title: "Reporting | FIRSTS" };

export default function ReportingPage() {
  return <ReportingView />;
}
