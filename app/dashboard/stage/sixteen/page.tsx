import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Sixteen | FIRSTS" };

export default function StageSixteenPage() {
  return <StageOverview stage="sixteen" />;
}
