import type { Metadata } from "next";
import { EmployerOverview } from "@/components/employer/EmployerOverview";

export const metadata: Metadata = { title: "Employer overview | FIRSTS" };

export default function EmployerPage() {
  return <EmployerOverview />;
}
