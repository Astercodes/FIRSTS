import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Fifteen | FIRSTS" };

export default function StageFifteenPage() {
  return <StageOverview stage="fifteen" />;
}
