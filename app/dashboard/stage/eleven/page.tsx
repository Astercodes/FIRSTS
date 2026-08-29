import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Eleven | FIRSTS" };

export default function StageElevenPage() {
  return <StageOverview stage="eleven" />;
}
