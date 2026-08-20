import type { Metadata } from "next";
import { Settings } from "@/components/institution/Settings";

export const metadata: Metadata = { title: "Institution settings | FIRSTS" };

export default function InstitutionSettingsPage() {
  return <Settings />;
}
