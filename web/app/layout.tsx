import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";

import "./globals.css";

import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awesome-codex-pet.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Awesome Codex Pet",
  description:
    "A curated gallery of community-made Codex pets with previews, install commands, and GitHub-native submissions.",
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
