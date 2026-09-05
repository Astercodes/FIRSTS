import type { Metadata } from "next";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { FCHero } from "@/components/career-centers/FCHero";
import { FCIntro } from "@/components/career-centers/FCIntro";
import { FCJourney } from "@/components/career-centers/FCJourney";
import { FCExtend } from "@/components/career-centers/FCExtend";
import { FCDashboard } from "@/components/career-centers/FCDashboard";
import { FCPrivacy } from "@/components/career-centers/FCPrivacy";
import { FCEngagement } from "@/components/career-centers/FCEngagement";
import { FCTools } from "@/components/career-centers/FCTools";
import { FCPathways } from "@/components/career-centers/FCPathways";
import { FCCareerReadiness } from "@/components/career-centers/FCCareerReadiness";
import { FCBusiness } from "@/components/career-centers/FCBusiness";
import { FCFirstLeap } from "@/components/career-centers/FCFirstLeap";
import { FCAdvisors } from "@/components/career-centers/FCAdvisors";
import { FCWorkshops } from "@/components/career-centers/FCWorkshops";
import { FCMentors } from "@/components/career-centers/FCMentors";
import { FCReporting } from "@/components/career-centers/FCReporting";
import { FCCampusWide } from "@/components/career-centers/FCCampusWide";
import { FCImplementation } from "@/components/career-centers/FCImplementation";
import { FCPartnership } from "@/components/career-centers/FCPartnership";
import { FCClosing } from "@/components/career-centers/FCClosing";

export const metadata: Metadata = {
  title: "For Career Centers | FIRSTS",
  description:
    "Give every student a path, and give your team visibility into where support is needed. FIRSTS gives career centers a structured student-development platform.",
};

export default function CareerCentersPage() {
  return (
    <>
      <Nav />
      <main>
        <FCHero />
        <FCIntro />
        <FCJourney />
        <FCExtend />
        <FCDashboard />
        <FCPrivacy />
        <FCEngagement />
        <FCTools />
        <FCPathways />
        <FCCareerReadiness />
        <FCBusiness />
        <FCFirstLeap />
        <FCAdvisors />
        <FCWorkshops />
        <FCMentors />
        <FCReporting />
        <FCCampusWide />
        <FCImplementation />
        <FCPartnership />
        <FCClosing />
      </main>
      <Footer />
    </>
  );
}
