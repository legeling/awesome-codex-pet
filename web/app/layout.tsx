import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";

import "./globals.css";

import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awesome-codex-pet.pages.dev";

const description =
  "A curated gallery of community-made Codex pets with animated previews, one-command install, and GitHub-native submissions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Awesome Codex Pet",
    template: "%s · Awesome Codex Pet",
  },
  description,
  applicationName: "Awesome Codex Pet",
  keywords: [
    "Codex",
    "Codex pet",
    "pixel art",
    "open source",
    "community",
    "gallery",
  ],
  openGraph: {
    title: "Awesome Codex Pet",
    description,
    url: siteUrl,
    siteName: "Awesome Codex Pet",
    images: ["/assets/cover/awesome-codex-pet-cover.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awesome Codex Pet",
    description,
    images: ["/assets/cover/awesome-codex-pet-cover.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased text-text bg-bg">
        <LocaleProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
