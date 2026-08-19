import type { Metadata } from "next";
import { CoachHub } from "@/components/dashboard/CoachHub";

export const metadata: Metadata = { title: "AI Coach | FIRSTS" };

export default function CoachPage() {
  return <CoachHub />;
}
