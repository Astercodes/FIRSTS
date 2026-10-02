import type { Metadata } from "next";
import { ComingSoonPanel } from "@/components/business/portal/ComingSoonPanel";

export const metadata: Metadata = { title: "Community | FIRSTS Business" };

export default function BusinessCommunityPage() {
  return (
    <ComingSoonPanel
      title="The FIRSTS Business community"
      description="A space to trade notes with other founders working through the same tracks, and to connect with mentors and investors."
      items={[
        "A feed of what other founders are building and learning",
        "Mentor office hours tied to specific tracks",
        "Founder-to-founder conversations by track or industry",
      ]}
    />
  );
}
