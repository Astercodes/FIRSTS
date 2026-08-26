import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Eight | FIRSTS" };

export default function StageEightPage() {
  return <StageOverview stage="eight" />;
}
