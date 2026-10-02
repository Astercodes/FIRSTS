import type { Metadata } from "next";
import { ComingSoonPanel } from "@/components/business/portal/ComingSoonPanel";

export const metadata: Metadata = { title: "Profile | FIRSTS Business" };

export default function BusinessProfilePage() {
  return (
    <ComingSoonPanel
      title="Your profile"
      description="Your founder bio, the business you're building, and your track progress, in one place."
      items={[
        "A short bio and the business you're building",
        "Track completion and momentum",
        "Visibility settings for what mentors and the community can see",
      ]}
    />
  );
}
