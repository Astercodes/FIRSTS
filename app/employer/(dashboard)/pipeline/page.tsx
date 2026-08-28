import type { Metadata } from "next";
import { PipelineView } from "@/components/employer/PipelineView";

export const metadata: Metadata = { title: "Pipeline | FIRSTS" };

export default function EmployerPipelinePage() {
  return <PipelineView />;
}
