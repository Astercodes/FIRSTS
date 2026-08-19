import type { Metadata } from "next";
import { AudiencePage } from "@/components/landing/audience/AudiencePage";
import { AUDIENCES } from "@/lib/audienceContent";

const config = AUDIENCES["career-centers"];

export const metadata: Metadata = { title: config.metaTitle };

export default function CareerCentersPage() {
  return <AudiencePage config={config} />;
}
