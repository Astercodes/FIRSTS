import type { Metadata } from "next";
import { FacilitatorOverview } from "@/components/facilitator/FacilitatorOverview";

export const metadata: Metadata = { title: "Facilitator overview | FIRSTS" };

export default function FacilitatorOverviewPage() {
  return <FacilitatorOverview />;
}
