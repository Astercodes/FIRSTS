import type { Metadata } from "next";
import { CommunityProfileEditor } from "@/components/community/CommunityProfileEditor";

export const metadata: Metadata = { title: "Edit Community Profile | FIRSTS" };

export default function CommunityProfileEditPage() {
  return <CommunityProfileEditor />;
}
