import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile, siteUrl } from "@/lib/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = `${profile.name} | DevOps, SRE & Platform Automation`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description:
    "Portfolio of Harshith Julapelli, a DevOps and Site Reliability Engineer focused on CI/CD, Azure DevOps, GitHub Actions, infrastructure automation, and platform reliability.",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description:
      "Reliable delivery systems, CI/CD automation, platform engineering, and infrastructure patterns.",
    type: "website",
    url: siteUrl,
  },
  twitter: { card: "summary_large_image", title },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/HeadShot.png`,
  jobTitle: "Platform Engineer | DevOps | SRE",
  worksFor: { "@type": "Organization", name: "loanDepot" },
  sameAs: [profile.githubUrl, profile.linkedInUrl],
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
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plano",
    addressRegion: "TX",
    addressCountry: "US",
  },
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
