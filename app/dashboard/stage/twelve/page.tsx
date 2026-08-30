import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Twelve | FIRSTS" };

export default function StageTwelvePage() {
  return <StageOverview stage="twelve" />;
}
