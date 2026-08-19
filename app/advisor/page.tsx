import type { Metadata } from "next";
import { AdvisorOverview } from "@/components/advisor/AdvisorOverview";

export const metadata: Metadata = { title: "Advisor overview | FIRSTS" };

export default function AdvisorPage() {
  return <AdvisorOverview />;
}
