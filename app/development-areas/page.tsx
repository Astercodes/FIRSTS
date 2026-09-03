import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { DAHero } from "@/components/development-areas/DAHero";
import { DAGrid } from "@/components/development-areas/DAGrid";
import { DAClosing } from "@/components/development-areas/DAClosing";

export const metadata: Metadata = {
  title: "Development Areas | FIRSTS",
  description:
    "Career readiness is bigger than getting a job. Explore every development area in FIRSTS, from self-awareness to workplace professionalism.",
};

export default function DevelopmentAreasPage() {
  return (
    <>
      <Nav />
      <main>
        <DAHero />
        <DAGrid />
        <DAClosing />
      </main>
      <Footer />
    </>
  );
}
