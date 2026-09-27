import { Nav } from "@/components/landing/Nav";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { Hero } from "@/components/landing/Hero";
import { Manifesto } from "@/components/landing/Manifesto";
import { Audiences } from "@/components/landing/Audiences";
import { Pillars } from "@/components/landing/Pillars";
import { DevelopmentAreas } from "@/components/landing/DevelopmentAreas";
import { Profile } from "@/components/landing/Profile";
import { FirstLeap } from "@/components/landing/FirstLeap";
import { Explore } from "@/components/landing/Explore";
import { Progress } from "@/components/landing/Progress";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="home-page">
        <Hero />
        <Manifesto />
        <ProductShowcase />
        <Pillars />
        <Audiences />
        <DevelopmentAreas />
        <Profile />
        <FirstLeap />
        <Explore />
        <Progress />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
