import type { Metadata } from "next";
import { Departments } from "@/components/institution/Departments";

export const metadata: Metadata = { title: "Departments | FIRSTS" };

export default function InstitutionDepartmentsPage() {
  return <Departments />;
}
