import type { Metadata } from "next";
import { BusinessNav } from "@/components/business/BusinessNav";
import { BusinessFooter } from "@/components/business/BusinessFooter";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessIntro } from "@/components/business/BusinessIntro";
import { BusinessTracks } from "@/components/business/BusinessTracks";
import { BusinessAudiences } from "@/components/business/BusinessAudiences";
import { BusinessCTA } from "@/components/business/BusinessCTA";

export const metadata: Metadata = {
  title: "FIRSTS Business",
  description:
    "A structured path from a raw idea to real evidence it works: validate a problem, build, market, operate, and pitch, one first at a time.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessNav />
      <main>
        <BusinessHero />
        <BusinessIntro />
        <BusinessTracks />
        <BusinessAudiences />
        <BusinessCTA />
      </main>
      <BusinessFooter />
    </>
  );
}
