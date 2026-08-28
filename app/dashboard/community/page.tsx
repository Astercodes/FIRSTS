import type { Metadata } from "next";
import { CommunityHome } from "@/components/community/CommunityHome";

export const metadata: Metadata = { title: "Community | FIRSTS" };

export default function CommunityPage() {
  return <CommunityHome />;
}
