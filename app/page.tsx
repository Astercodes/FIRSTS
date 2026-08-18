import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Audiences } from "@/components/landing/Audiences";
import { StagesPreview } from "@/components/landing/StagesPreview";
import { CoachPreview } from "@/components/landing/CoachPreview";
import { Institutions } from "@/components/landing/Institutions";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Audiences />
        <StagesPreview />
        <CoachPreview />
        <Institutions />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
