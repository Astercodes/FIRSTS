import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Three | FIRSTS" };

export default function StageThreePage() {
  return <StageOverview stage="three" />;
}
