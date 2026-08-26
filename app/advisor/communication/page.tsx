import type { Metadata } from "next";
import { CommunicationView } from "@/components/advisor/CommunicationView";

export const metadata: Metadata = { title: "Communication | FIRSTS" };

export default function CommunicationPage() {
  return <CommunicationView />;
}
