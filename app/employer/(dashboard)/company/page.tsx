import type { Metadata } from "next";
import { CompanyProfileView } from "@/components/employer/CompanyProfileView";

export const metadata: Metadata = { title: "Company Profile | FIRSTS" };

export default function EmployerCompanyPage() {
  return <CompanyProfileView />;
}
