import type { Metadata } from "next";
import { LoungeView } from "@/components/facilitator/LoungeView";

export const metadata: Metadata = { title: "Facilitator lounge | FIRSTS" };

export default function FacilitatorLoungePage() {
  return <LoungeView />;
}
