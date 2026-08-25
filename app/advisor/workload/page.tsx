import type { Metadata } from "next";
import { WorkloadView } from "@/components/advisor/WorkloadView";

export const metadata: Metadata = { title: "Workload | FIRSTS" };

export default function WorkloadPage() {
  return <WorkloadView />;
}
