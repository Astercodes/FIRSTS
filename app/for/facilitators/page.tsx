import type { Metadata } from "next";
import { AudiencePage } from "@/components/landing/audience/AudiencePage";
import { AUDIENCES } from "@/lib/audienceContent";

const config = AUDIENCES.facilitators;

export const metadata: Metadata = { title: config.metaTitle };

export default function FacilitatorsPage() {
  return <AudiencePage config={config} />;
}
