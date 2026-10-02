import type { Metadata } from "next";
import { ComingSoonPanel } from "@/components/business/portal/ComingSoonPanel";

export const metadata: Metadata = { title: "Portfolio | FIRSTS Business" };

export default function BusinessPortfolioPage() {
  return (
    <ComingSoonPanel
      title="Your business portfolio"
      description="Every track you complete leaves behind real evidence, ready to bring to an incubator, a grant application, or an investor conversation."
      items={[
        "Validated problem statements and customer research",
        "Prototypes, offers, and early traction evidence",
        "A pitch, built from the tracks you've actually completed",
      ]}
    />
  );
}
