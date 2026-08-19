import type { Metadata } from "next";
import { InstitutionOverview } from "@/components/advisor/InstitutionOverview";

export const metadata: Metadata = { title: "Institution overview | FIRSTS" };

export default function AdvisorInstitutionPage() {
  return <InstitutionOverview />;
}
