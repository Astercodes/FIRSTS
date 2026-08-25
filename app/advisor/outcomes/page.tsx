import type { Metadata } from "next";
import { OutcomesView } from "@/components/advisor/OutcomesView";

export const metadata: Metadata = { title: "Outcomes | FIRSTS" };

export default function OutcomesPage() {
  return <OutcomesView />;
}
