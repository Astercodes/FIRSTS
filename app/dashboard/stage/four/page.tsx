import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Four | FIRSTS" };

export default function StageFourPage() {
  return <StageOverview stage="four" />;
}
