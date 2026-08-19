import type { Metadata } from "next";
import { SponsorshipsView } from "@/components/employer/SponsorshipsView";

export const metadata: Metadata = { title: "Sponsorships | FIRSTS" };

export default function EmployerSponsorshipsPage() {
  return <SponsorshipsView />;
}
