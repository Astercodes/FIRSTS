import type { Metadata } from "next";
import { StageOverview } from "@/components/dashboard/StageOverview";

export const metadata: Metadata = { title: "Stage Thirteen | FIRSTS" };

export default function StageThirteenPage() {
  return <StageOverview stage="thirteen" />;
}
