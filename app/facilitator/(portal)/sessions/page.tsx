import type { Metadata } from "next";
import { SessionsView } from "@/components/facilitator/SessionsView";

export const metadata: Metadata = { title: "Facilitator sessions | FIRSTS" };

export default function FacilitatorSessionsPage() {
  return <SessionsView />;
}
