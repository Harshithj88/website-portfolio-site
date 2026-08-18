import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://harshithj88.github.io"),
  title: "Harshith Julapelli | DevOps, SRE & Platform Automation",
  description:
    "Portfolio of Harshith Julapelli, a DevOps and Site Reliability Engineer focused on CI/CD, Azure DevOps, GitHub Actions, infrastructure automation, and platform reliability.",
  openGraph: {
    title: "Harshith Julapelli | DevOps, SRE & Platform Automation",
    description:
      "Reliable delivery systems, CI/CD automation, platform engineering, and infrastructure patterns.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
