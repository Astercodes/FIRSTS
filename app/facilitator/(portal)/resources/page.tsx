import type { Metadata } from "next";
import { ResourceLibraryView } from "@/components/facilitator/ResourceLibraryView";

export const metadata: Metadata = { title: "Resource library | FIRSTS" };

export default function FacilitatorResourcesPage() {
  return <ResourceLibraryView />;
}
