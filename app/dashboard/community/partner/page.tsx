import type { Metadata } from "next";
import { PartnerView } from "@/components/community/PartnerView";

export const metadata: Metadata = { title: "Accountability Partner | FIRSTS" };

export default function PartnerPage() {
  return <PartnerView />;
}
