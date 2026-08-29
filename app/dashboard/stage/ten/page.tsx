import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Ten | FIRSTS" };

export default function StageTenPage() {
  return <StageOverview stage="ten" />;
}
