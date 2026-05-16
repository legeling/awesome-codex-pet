import type { Metadata } from "next";

import { InstallPageContent } from "@/components/install-page-content";
import { siteConfig } from "@/lib/site";

const title = "Install a Codex pet in seconds";
const description =
  "One-command installer for Codex pets on macOS, Linux, and Windows. Pick a pet from the gallery, copy the script, and your spritesheet pet is ready in ~/.codex/pets/.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/install" },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/install`,
    images: [siteConfig.ogImage],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.ogImage],
  },
};

export default function InstallPage() {
  return <InstallPageContent />;
}
