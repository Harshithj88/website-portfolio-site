"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { Badge, Eyebrow } from "@/components/Badge";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/lib/profile";

const staggerChildren = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" },
  },
});

const textVariant = (delay: number) => ({
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

const footerVariants = {
  hidden: { opacity: 0, y: 50, transition: { type: "spring", stiffness: 300, damping: 140 } },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, delay: 0.5 } },
};

const capabilityColors = ["#286F6C", "#6D4B8A", "#C83C63", "#8897B8", "#B8A295", "#0D2F3F"];
const expDotColors = ["#286F6C", "#C83C63", "#6D4B8A", "#8897B8"];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeHref = `/${profile.resumeFileName}`;
  const githubStats = `https://github-readme-stats.vercel.app/api?username=${profile.githubUser}&show_icons=true&theme=default&hide_border=true&bg_color=F8F7F1`;
  const topLanguages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUser}&layout=compact&theme=default&hide_border=true&bg_color=F8F7F1`;

  const navLinks = [
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "GitHub", href: "#github" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-cream text-primary">
      {/* ── Header (sticky, dark, scalloped bottom) ─────────── */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
        className="scallop-bottom sticky top-0 z-50 bg-primary/92 px-6 py-4 text-cream backdrop-blur-[10px] sm:px-16"
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between">
          <span className="text-2xl font-medium tracking-[0.03em]">
            {profile.initials}
          </span>
          <ul className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.02em] md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-[#E7E7E7]">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#E7E7E7]">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#E7E7E7]">
                GitHub
              </a>
            </li>
          </ul>
          <button
            className="text-cream md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile nav ──────────────────────────────────────── */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ right: "-120%" }}
          animate={{ right: "-1rem" }}
          className="fixed right-0 top-[3.5rem] z-40 flex min-w-[15rem] flex-col gap-8 bg-primary/97 p-8 text-sm font-medium uppercase text-cream shadow-xl"
          style={{ height: "100vh", width: "50%" }}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={profile.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </motion.nav>
      )}

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="flex min-h-[92vh] items-center px-6 pt-20 sm:px-16">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.025 }}
          className="mx-auto grid w-full max-w-[1280px] items-center gap-12 text-center md:grid-cols-[1fr_clamp(260px,28vw,380px)_1fr] md:text-left"
        >
          <span className="hidden" id="hero" />

          {/* Headline */}
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <h1 className="text-[clamp(2.65rem,6vw,3rem)] font-bold leading-[1.12]">
              Hi, I&apos;m {profile.name.split(" ")[0]}. <br />
              I build reliable <br />
              delivery systems.
            </h1>
          </motion.div>

          {/* Portrait circle (initials + glow) */}
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="mx-auto flex aspect-square w-[clamp(190px,28vw,320px)] items-center justify-center rounded-full bg-white shadow-[0_0_0.2rem_0.1rem_#fff,0_0_0.3rem_0.2rem_#286F6C,0_0_0.4rem_0.3rem_#0D2F3F] md:row-span-2"
          >
            <div className="flex h-[88%] w-[88%] items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-5xl font-black text-cream md:text-6xl">
              {profile.initials}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex justify-center md:justify-end"
          >
            <p className="max-w-[20rem] text-[clamp(1rem,2vw,1.3rem)] font-medium leading-[1.6] md:text-right">
              {profile.summary}
            </p>
          </motion.div>

          {/* Years experience */}
          <motion.div
            variants={fadeIn("right", "tween", 0.4, 1)}
            className="flex items-center justify-center gap-4 md:justify-start"
          >
            <span className="text-5xl font-bold">10+</span>
            <span className="text-lg font-medium leading-snug">
              Years<br />Experience
            </span>
          </motion.div>

          {/* Cert badges */}
          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="flex flex-col items-center gap-1 md:items-end"
          >
            {profile.certifications.map((cert) => (
              <span key={cert.code} className="text-[0.7rem] uppercase tracking-[0.05em]">
                {cert.code} — {cert.title.split(": ")[1]}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Expertise (dashboard card) ──────────────────────── */}
      <section className="bg-gradient-to-b from-cream to-white overflow-hidden px-6 py-12 sm:px-16 sm:py-16">
        <span className="hidden" id="expertise" />
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto grid max-w-[1280px] items-start gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Intro */}
          <motion.div variants={textVariant(0.5)} className="flex flex-col gap-5">
            <Eyebrow>Leverage through automation</Eyebrow>
            <h2 className="text-3xl font-bold sm:text-4xl">What I Design</h2>
            <p className="max-w-[34rem] text-[clamp(1rem,2vw,1.18rem)] font-medium leading-[1.8]">
              I design and automate scalable cloud platforms, CI/CD pipelines, and developer
              workflows that improve reliability, security, and deployment velocity.
            </p>
          </motion.div>

          {/* Dashboard */}
          <div className="overflow-hidden rounded-lg border border-primary/16 bg-gradient-to-br from-[#D1E2E0]/42 to-cream/94 shadow-card">
            {/* Dashboard bar */}
            <div className="flex items-center justify-between border-b border-primary/15 bg-primary px-4 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-cream">
              <span>Capability Map</span>
              <div className="flex gap-[0.45rem]">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-tan" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-blue" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-rose" />
              </div>
            </div>

            {/* Capabilities */}
            <div className="grid gap-3.5 p-4">
              {profile.expertise.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeIn("up", "tween", (i + 1) * 0.16, 1)}
                  className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-primary/12 bg-white/72 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/24 hover:shadow-card-sm"
                >
                  <div
                    className="grid h-[3.15rem] w-[3.15rem] place-items-center rounded-full shadow-[inset_0_0_0_6px_rgba(255,255,255,0.28)]"
                    style={{ background: capabilityColors[i] }}
                  >
                    <span className="h-3.5 w-3.5 rounded-full bg-white/78" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[clamp(1rem,1.8vw,1.18rem)] font-extrabold text-primary">
                      {item.title}
                    </span>
                    <span className="text-[0.9rem] font-bold uppercase tracking-[0.08em] text-primary/68">
                      {item.tags.slice(0, 3).join(" · ")}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3.5 px-4 pb-4">
              {profile.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label} className="rounded-lg bg-primary/92 p-4 text-cream">
                  <span className="block text-[clamp(2rem,5vw,3.15rem)] font-black leading-[0.95]">
                    {metric.value}
                  </span>
                  <span className="mt-2.5 block text-[0.88rem] font-extrabold uppercase leading-[1.35] text-cream/78">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Signal panel */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-4 border-t border-primary/12 px-4 py-4 text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-primary/72">
              <span>Current signal</span>
              <div className="grid grid-cols-[0.8fr_1.3fr_0.55fr_1fr] items-end gap-1.5">
                <span className="h-2 rounded-full bg-accent-purple" />
                <span className="h-3.5 rounded-full bg-accent-blue" />
                <span className="h-2.5 rounded-full bg-accent-tan" />
                <span className="h-[1.15rem] rounded-full bg-accent-rose" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Projects (case-study cards) ─────────────────────── */}
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-white px-6 py-12 sm:px-16 sm:py-16"
      >
        <span className="hidden" id="projects" />
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Selected Work</h2>
            <p className="mt-2.5 text-base">Systems I&apos;ve designed to increase resilience and create leverage</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {profile.projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeIn("up", "tween", 0.5 + i * 0.15, 0.6)}
                className="group w-80 rounded-[20px] border border-primary/12 bg-white p-7 shadow-[0px_21px_13px_rgba(0,0,0,0.05)] transition-all hover:scale-[1.05] hover:shadow-[0px_28px_20px_rgba(0,0,0,0.1)]"
                style={{ borderLeft: `4px solid ${expDotColors[i % expDotColors.length]}` }}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-primary/80">{project.summary}</p>
                <p className="mt-3 rounded-lg bg-primary/5 p-3 text-sm leading-relaxed">
                  <span className="font-extrabold text-secondary">Impact: </span>
                  {project.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Experience (timeline) ───────────────────────────── */}
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="px-6 py-12 sm:px-16 sm:py-16"
      >
        <span className="hidden" id="experience" />
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>

          <div className="relative flex w-full flex-col">
            {profile.experience.map((job, jobIdx) => (
              <div key={job.company}>
                {job.bullets.map((bullet, i) => (
                  <motion.div
                    key={bullet}
                    variants={textVariant(0.2)}
                    className="grid items-start gap-4 border-b border-primary/8 py-5 sm:grid-cols-[45%_2rem_1fr]"
                  >
                    {/* Left: company info (only on first row) */}
                    <div className="pr-6 text-right max-sm:text-left">
                      {i === 0 && (
                        <>
                          <h3 className="text-lg font-bold leading-snug">{job.company}</h3>
                          <p className="mt-0.5 text-sm text-primary/60">{job.period} · {job.location}</p>
                        </>
                      )}
                    </div>

                    {/* Center: dot */}
                    <div className="hidden justify-center pt-1 sm:flex">
                      <div
                        className="h-4 w-4 shrink-0 rounded-full"
                        style={{ background: expDotColors[(jobIdx + i) % expDotColors.length] }}
                      />
                    </div>

                    {/* Right: role detail */}
                    <div className="pl-0 sm:pl-6">
                      {i === 0 && (
                        <h3 className="mb-1 text-lg font-semibold text-secondary">{job.role}</h3>
                      )}
                      <p className="text-sm leading-relaxed text-primary/82">{bullet}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Certifications & Stack ──────────────────────────── */}
      <section className="bg-white px-6 py-12 sm:px-16 sm:py-16">
        <span className="hidden" id="certifications" />
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            eyebrow="Credentials"
            title="Certifications & Technical Stack"
          />
          <div className="mb-8 grid gap-5 md:grid-cols-2">
            {profile.certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                variants={fadeIn("up", "tween", 0.3 + i * 0.15, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-5 rounded-lg border border-primary/12 bg-cream p-5 shadow-card-sm"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-black text-cream"
                  style={{ background: capabilityColors[i] }}
                >
                  {cert.code}
                </div>
                <div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="mt-0.5 text-sm text-primary/60">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(profile.stack).map(([category, tools]) => (
              <div key={category}>
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.1em] text-primary/50">
                  {category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub ──────────────────────────────────────────── */}
      <section className="px-6 py-12 sm:px-16 sm:py-16">
        <span className="hidden" id="github" />
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            eyebrow="Open source"
            title={`GitHub Signal — ${profile.githubUser}`}
            body="Live GitHub widgets — review public repository activity and language distribution."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="overflow-hidden rounded-lg border border-primary/12 bg-white p-4 transition hover:shadow-card-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={githubStats} alt={`${profile.githubUser} GitHub stats`} className="w-full" />
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="overflow-hidden rounded-lg border border-primary/12 bg-white p-4 transition hover:shadow-card-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={topLanguages} alt={`${profile.githubUser} top languages`} className="w-full" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Writing ─────────────────────────────────────────── */}
      <section className="bg-white px-6 py-12 sm:px-16 sm:py-16">
        <span className="hidden" id="writing" />
        <div className="mx-auto max-w-[1280px]">
          <SectionTitle
            eyebrow="Technical writing"
            title="Turning Experience Into Authority"
          />
          <div className="space-y-3">
            {profile.posts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center justify-between rounded-lg border border-primary/12 bg-cream p-5 transition-all hover:-translate-y-px hover:border-secondary/30 hover:shadow-card-sm"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <span className="font-bold text-primary">{post.title}</span>
                    <p className="mt-0.5 text-xs text-primary/50">{post.desc}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primary/30 transition-colors group-hover:text-secondary" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer / Contact ────────────────────────────────── */}
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-gradient-to-b from-white to-cream px-6 py-12 sm:px-16 sm:py-16"
      >
        <span className="hidden" id="contact" />
        <motion.div
          variants={footerVariants}
          className="mx-auto grid max-w-[1280px] items-center gap-[clamp(2rem,5vw,5rem)] md:grid-cols-[1fr_minmax(20rem,0.82fr)]"
        >
          {/* Left: CTA */}
          <div>
            <span className="block text-3xl font-bold sm:text-4xl">
              Let&apos;s build something <br />
              that compounds.
            </span>
            <span className="mt-12 block text-3xl font-bold sm:text-4xl">
              Start by{" "}
              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="text-secondary underline decoration-accent-rose decoration-[0.16rem] underline-offset-[0.3rem]"
              >
                reaching out
              </a>
            </span>
          </div>

          {/* Right: info card + nav pills */}
          <div className="grid gap-5">
            <div className="relative min-h-[14rem] overflow-hidden rounded-lg border border-primary/16 bg-primary shadow-card">
              <div className="scallop-top" />
              <div className="relative z-10 flex h-full flex-col justify-end p-4">
                <span className="inline-flex w-fit rounded-full border border-cream/42 bg-primary/50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-cream">
                  {profile.location} · Remote first
                </span>
                <p className="mt-3 max-w-[24rem] text-[clamp(1rem,2vw,1.35rem)] font-extrabold leading-[1.35] text-cream">
                  Platform automation, delivery governance, and reliability engineering.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  <Badge>{link.label}</Badge>
                </a>
              ))}
              <a href={profile.linkedInUrl} target="_blank" rel="noreferrer">
                <Badge>LinkedIn</Badge>
              </a>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Badge>GitHub</Badge>
              </a>
              <a href={resumeHref}>
                <Badge>Resume <Download size={12} className="ml-1 inline" /></Badge>
              </a>
              <a href={`mailto:${profile.email}`}>
                <Badge>Email <Mail size={12} className="ml-1 inline" /></Badge>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <footer className="border-t border-primary/8 px-6 py-6 text-center text-sm text-primary/50">
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js, Tailwind CSS, and Vercel.
      </footer>
    </div>
  );
}