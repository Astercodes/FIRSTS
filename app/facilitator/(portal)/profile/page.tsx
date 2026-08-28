import type { Metadata } from "next";
import { FacilitatorProfileView } from "@/components/facilitator/FacilitatorProfileView";

export const metadata: Metadata = { title: "My facilitator profile | FIRSTS" };

export default function FacilitatorProfilePage() {
  return <FacilitatorProfileView />;
}
