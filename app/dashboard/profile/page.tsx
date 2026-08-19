import type { Metadata } from "next";
import { ProfileView } from "@/components/dashboard/ProfileView";

export const metadata: Metadata = { title: "Profile | FIRSTS" };

export default function ProfilePage() {
  return <ProfileView />;
}
