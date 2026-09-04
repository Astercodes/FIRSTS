import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { ISHero } from "@/components/independent-students/ISHero";
import { ISIntro } from "@/components/independent-students/ISIntro";
import { ISStats } from "@/components/independent-students/ISStats";
import { ISNoPartner } from "@/components/independent-students/ISNoPartner";
import { ISStartWhereYouAre } from "@/components/independent-students/ISStartWhereYouAre";
import { ISNextFirst } from "@/components/independent-students/ISNextFirst";
import { ISPortfolio } from "@/components/independent-students/ISPortfolio";
import { ISCoach } from "@/components/independent-students/ISCoach";
import { ISCenters } from "@/components/independent-students/ISCenters";
import { ISFirstLeap } from "@/components/independent-students/ISFirstLeap";
import { ISIPFS } from "@/components/independent-students/ISIPFS";
import { ISHowItWorks } from "@/components/independent-students/ISHowItWorks";
import { ISBringToSchool } from "@/components/independent-students/ISBringToSchool";
import { ISClosing } from "@/components/independent-students/ISClosing";

export const metadata: Metadata = {
  title: "For Students at Non-Partner Schools | FIRSTS",
  description:
    "Your school doesn't have to join before you can start. FIRSTS is available directly to students, even if your school is not yet a partner.",
};

export default function IndependentStudentsPage() {
  return (
    <>
      <Nav />
      <main>
        <ISHero />
        <ISIntro />
        <ISStats />
        <ISNoPartner />
        <ISStartWhereYouAre />
        <ISNextFirst />
        <ISPortfolio />
        <ISCoach />
        <ISCenters />
        <ISFirstLeap />
        <ISIPFS />
        <ISHowItWorks />
        <ISBringToSchool />
        <ISClosing />
      </main>
      <Footer />
    </>
  );
}
