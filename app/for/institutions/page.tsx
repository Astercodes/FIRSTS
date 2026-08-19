import type { Metadata } from "next";
import { AudiencePage } from "@/components/landing/audience/AudiencePage";
import { AUDIENCES } from "@/lib/audienceContent";

const config = AUDIENCES.institutions;

export const metadata: Metadata = { title: config.metaTitle };

export default function InstitutionsPage() {
  return <AudiencePage config={config} />;
}
