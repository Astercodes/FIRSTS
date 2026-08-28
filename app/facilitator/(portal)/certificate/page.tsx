import type { Metadata } from "next";
import { CertificateView } from "@/components/facilitator/CertificateView";

export const metadata: Metadata = { title: "Facilitator certificate | FIRSTS" };

export default function FacilitatorCertificatePage() {
  return <CertificateView />;
}
