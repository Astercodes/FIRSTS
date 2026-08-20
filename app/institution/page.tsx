import type { Metadata } from "next";
import { InstitutionOverview } from "@/components/institution/Overview";

export const metadata: Metadata = { title: "Institution overview | FIRSTS" };

export default function InstitutionPage() {
  return <InstitutionOverview />;
}
