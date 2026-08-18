import type { Metadata } from "next";
import { DashboardHome } from "@/components/dashboard/DashboardHome";

export const metadata: Metadata = { title: "Dashboard — FIRSTS" };

export default function DashboardPage() {
  return <DashboardHome />;
}
