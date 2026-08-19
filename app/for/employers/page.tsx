import type { Metadata } from "next";
import { AudiencePage } from "@/components/landing/audience/AudiencePage";
import { AUDIENCES } from "@/lib/audienceContent";

const config = AUDIENCES.employers;

export const metadata: Metadata = { title: config.metaTitle };

export default function EmployersPage() {
  return <AudiencePage config={config} />;
}
