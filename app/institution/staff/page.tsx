import type { Metadata } from "next";
import { Staff } from "@/components/institution/Staff";

export const metadata: Metadata = { title: "Staff | FIRSTS" };

export default function InstitutionStaffPage() {
  return <Staff />;
}
