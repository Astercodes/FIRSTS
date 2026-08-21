import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Seven | FIRSTS" };

export default function StageSevenPage() {
  return <StageOverview stage="seven" />;
}
