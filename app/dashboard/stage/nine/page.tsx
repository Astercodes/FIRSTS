import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Nine | FIRSTS" };

export default function StageNinePage() {
  return <StageOverview stage="nine" />;
}
