import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://harshithjulapelli.com"),
  title: "Harshith Julapelli | DevOps, SRE & Platform Automation",
  description:
    "Portfolio of Harshith Julapelli, a DevOps and Site Reliability Engineer focused on CI/CD, Azure DevOps, GitHub Actions, infrastructure automation, and platform reliability.",
  openGraph: {
    title: "Harshith Julapelli | DevOps, SRE & Platform Automation",
    description:
      "Reliable delivery systems, CI/CD automation, platform engineering, and infrastructure patterns.",
    type: "website",
    images: [{ url: "/HeadShot.png", width: 800, height: 800, alt: "Harshith Julapelli" }],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harshith Julapelli",
  url: "https://harshithjulapelli.com",
  image: "https://harshithjulapelli.com/HeadShot.png",
  jobTitle: "Platform Engineer | DevOps | SRE",
  worksFor: { "@type": "Organization", name: "loanDepot" },
  sameAs: [
    "https://github.com/Harshithj88",
    "https://www.linkedin.com/in/hjulapelli/",
  ],
  knowsAbout: [
    "Azure DevOps",
    "GitHub Actions",
    "CI/CD",
    "Infrastructure as Code",
    "Terraform",
    "Bicep",
    "Kubernetes",
    "Site Reliability Engineering",
    "Platform Engineering",
  ],
  email: "mailto:harsh.julapelli@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plano",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
