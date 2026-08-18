# Harshith Julapelli Portfolio

A production-ready personal portfolio built with **Next.js 15**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

## Features

- Modern dark theme with ambient glow and noise texture
- Responsive single-page layout with mobile hamburger menu
- Animated sections with Framer Motion (scroll-triggered)
- Outcome-focused DevOps/SRE hero messaging
- Expertise cards with technology tags
- Project cards with impact callouts
- Experience section with business-outcome bullets
- Certification cards with exam code badges
- Categorized technical stack grid
- GitHub profile stats widgets
- Technical blog/writing section with descriptions
- About section with personal narrative and signature quote
- Resume download button
- Contact section with LinkedIn, GitHub, Email
- Footer with social icon row
- Vercel-ready configuration
- GitHub Actions build validation workflow

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this code to GitHub (`Harshithj88/portfolio`).
2. Import the repository on Vercel.
3. Vercel will auto-detect Next.js and deploy.

## Customize Before Publishing

Update these values in `lib/profile.ts`:

- `email` — your real email address
- `linkedInUrl` — your full LinkedIn profile URL
- `resumeFileName` — match the actual PDF filename in `public/`

Replace `public/Harshith-Julapelli-Resume.pdf` with your real resume PDF.

## Project Structure

```
app/
  globals.css        — Tailwind v4 imports, noise texture, shadow-glow
  layout.tsx         — Root layout with OpenGraph metadata
  page.tsx           — Main portfolio page (uses profile data + components)
components/
  Badge.tsx          — Badge and CertBadge components
  SectionTitle.tsx   — Reusable section header
lib/
  profile.ts         — All portfolio content (single source of truth)
public/
  Harshith-Julapelli-Resume.pdf
```