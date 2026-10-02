import type { Metadata } from "next";
import { BusinessAudiencePage } from "@/components/business/BusinessAudiencePage";
import { BUSINESS_AUDIENCES } from "@/lib/businessAudienceContent";

const config = BUSINESS_AUDIENCES["institutions"];

export const metadata: Metadata = { title: config.metaTitle };

export default function BusinessInstitutionsPage() {
  return <BusinessAudiencePage config={config} />;
}
