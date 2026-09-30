import type { Metadata } from "next";
import SantaTrackerClient from "@/components/SantaTrackerClient";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function SantaTrackerPreviewPage() {
  return <SantaTrackerClient showPreview />;
}
