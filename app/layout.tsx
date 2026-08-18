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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
