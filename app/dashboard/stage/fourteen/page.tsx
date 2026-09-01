import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Fourteen | FIRSTS" };

export default function StageFourteenPage() {
  return <StageOverview stage="fourteen" />;
}
