import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Two | FIRSTS" };

export default function StageTwoPage() {
  return <StageOverview stage="two" />;
}
