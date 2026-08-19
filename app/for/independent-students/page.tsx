import type { Metadata } from "next";
import { AudiencePage } from "@/components/landing/audience/AudiencePage";
import { AUDIENCES } from "@/lib/audienceContent";

const config = AUDIENCES["independent-students"];

export const metadata: Metadata = { title: config.metaTitle };

export default function IndependentStudentsPage() {
  return <AudiencePage config={config} />;
}
