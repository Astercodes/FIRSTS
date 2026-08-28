import type { Metadata } from "next";
import { PeerProfileGate } from "@/components/community/PeerProfileGate";

type Params = Promise<{ handle: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { handle } = await params;
  return { title: `${handle.replace(/-/g, " ")} | FIRSTS Community` };
}

export default async function PeerProfilePage({ params }: { params: Params }) {
  const { handle } = await params;
  return <PeerProfileGate handle={handle} />;
}
