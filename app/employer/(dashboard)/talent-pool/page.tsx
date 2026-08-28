import type { Metadata } from "next";
import { TalentPoolView } from "@/components/employer/TalentPoolView";

export const metadata: Metadata = { title: "Talent Pool | FIRSTS" };

export default function EmployerTalentPoolPage() {
  return <TalentPoolView />;
}
