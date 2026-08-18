import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshith Julapelli | DevOps, SRE & Platform Automation",
  description:
    "Portfolio of Harshith Julapelli, a DevOps and Site Reliability Engineer focused on CI/CD, Azure DevOps, GitHub Actions, infrastructure automation, and platform reliability.",
  openGraph: {
    title: "Harshith Julapelli | DevOps, SRE & Platform Automation",
    description:
      "Reliable delivery systems, CI/CD automation, platform engineering, and infrastructure patterns.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
