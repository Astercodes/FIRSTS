import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Six | FIRSTS" };

export default function StageSixPage() {
  return <StageOverview stage="six" />;
}
