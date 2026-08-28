import type { Metadata } from "next";
import { AccountView } from "@/components/employer/AccountView";

export const metadata: Metadata = { title: "Team & Access | FIRSTS" };

export default function EmployerAccountPage() {
  return <AccountView />;
}
