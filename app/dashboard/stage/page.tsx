import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage One — FIRSTS" };

export default function StagePage() {
  return <StageOverview />;
}
