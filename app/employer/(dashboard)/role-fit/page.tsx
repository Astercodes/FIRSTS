import type { Metadata } from "next";
import { RoleFitView } from "@/components/employer/RoleFitView";

export const metadata: Metadata = { title: "Role Fit | FIRSTS" };

export default function EmployerRoleFitPage() {
  return <RoleFitView />;
}
