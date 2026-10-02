import type { Metadata } from "next";
import { BusinessAudiencePage } from "@/components/business/BusinessAudiencePage";
import { BUSINESS_AUDIENCES } from "@/lib/businessAudienceContent";

const config = BUSINESS_AUDIENCES["founders"];

export const metadata: Metadata = { title: config.metaTitle };

export default function FoundersPage() {
  return <BusinessAudiencePage config={config} />;
}
