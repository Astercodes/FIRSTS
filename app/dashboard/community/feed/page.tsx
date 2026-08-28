import type { Metadata } from "next";
import { FeedView } from "@/components/community/FeedView";

export const metadata: Metadata = { title: "Feed | FIRSTS Community" };

export default function CommunityFeedPage() {
  return <FeedView />;
}
