import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Five | FIRSTS" };

export default function StageFivePage() {
  return <StageOverview stage="five" />;
}
