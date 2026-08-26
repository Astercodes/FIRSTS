import type { Metadata } from "next";
import { ProgrammingView } from "@/components/advisor/ProgrammingView";

export const metadata: Metadata = { title: "Programming | FIRSTS" };

export default function ProgrammingPage() {
  return <ProgrammingView />;
}
