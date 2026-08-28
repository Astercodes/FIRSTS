import type { Metadata } from "next";
import { AdminFacilitatorsView } from "@/components/admin/AdminFacilitatorsView";

export const metadata: Metadata = { title: "Facilitator operations | FIRSTS" };

export default function AdminFacilitatorsPage() {
  return <AdminFacilitatorsView />;
}
