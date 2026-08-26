import type { Metadata } from "next";
import { AdvisorProfileView } from "@/components/advisor/AdvisorProfileView";

export const metadata: Metadata = { title: "Your Profile | FIRSTS" };

export default function AdvisorProfilePage() {
  return <AdvisorProfileView />;
}
