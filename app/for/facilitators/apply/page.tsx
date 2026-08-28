import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { ApplicationForm } from "@/components/facilitator/ApplicationForm";

export const metadata: Metadata = { title: "Apply to Facilitate | FIRSTS" };

export default function FacilitatorApplyPage() {
  return (
    <main>
      <Nav />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
