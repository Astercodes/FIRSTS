import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { EPHero } from "@/components/early-professionals/EPHero";
import { EPIntro } from "@/components/early-professionals/EPIntro";
import { EPStats } from "@/components/early-professionals/EPStats";
import { EPShift } from "@/components/early-professionals/EPShift";
import { EPIdentity } from "@/components/early-professionals/EPIdentity";
import { EPApplications } from "@/components/early-professionals/EPApplications";
import { EPExperience } from "@/components/early-professionals/EPExperience";
import { EPHabits } from "@/components/early-professionals/EPHabits";
import { EPWorkWorks } from "@/components/early-professionals/EPWorkWorks";
import { EPFirsts } from "@/components/early-professionals/EPFirsts";
import { EPYourWay } from "@/components/early-professionals/EPYourWay";
import { EPPortfolio } from "@/components/early-professionals/EPPortfolio";
import { EPNextSteps } from "@/components/early-professionals/EPNextSteps";
import { EPHowItWorks } from "@/components/early-professionals/EPHowItWorks";
import { EPClosing } from "@/components/early-professionals/EPClosing";

export const metadata: Metadata = {
  title: "For Early Professionals & Recent Graduates | FIRSTS",
  description:
    "Graduation gives you a degree. It doesn't automatically give you direction, confidence, or professional readiness. FIRSTS gives you a structured place to keep developing after school.",
};

export default function ProfessionalsPage() {
  return (
    <>
      <Nav />
      <main>
        <EPHero />
        <EPIntro />
        <EPStats />
        <EPShift />
        <EPIdentity />
        <EPApplications />
        <EPExperience />
        <EPHabits />
        <EPWorkWorks />
        <EPFirsts />
        <EPYourWay />
        <EPPortfolio />
        <EPNextSteps />
        <EPHowItWorks />
        <EPClosing />
      </main>
      <Footer />
    </>
  );
}
