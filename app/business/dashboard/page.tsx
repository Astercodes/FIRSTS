import type { Metadata } from "next";
import { BusinessOverview } from "@/components/business/portal/BusinessOverview";

export const metadata: Metadata = { title: "Dashboard | FIRSTS Business" };

export default function BusinessDashboardPage() {
  return <BusinessOverview />;
}
