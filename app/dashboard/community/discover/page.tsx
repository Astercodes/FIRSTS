import type { Metadata } from "next";
import { DiscoverView } from "@/components/community/DiscoverView";

export const metadata: Metadata = { title: "Discover | FIRSTS Community" };

export default function CommunityDiscoverPage() {
  return <DiscoverView />;
}
