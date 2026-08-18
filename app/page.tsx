"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Cloud,
  Download,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Menu,
  Activity,
  Shield,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/lib/profile";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const item = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, delay: i * 0.07 },
});

const expertiseIcons = [Cloud, Workflow, Shield, Terminal, Activity, GitBranch];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeHref = `/${profile.resumeFileName}`;
  const githubStats = `https://github-readme-stats.vercel.app/api?username=${profile.githubUser}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0F172A`;
  const topLangs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUser}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0F172A`;

  const nav = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-dark text-foreground">

      {/* ── Ambient glow ─────────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple/[0.07] blur-[160px]" />
      </div>

      {/* ── Header ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-line bg-dark/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="gradient-text text-lg font-extrabold">{profile.initials}</a>
          <nav className="hidden gap-6 text-[0.8rem] font-medium text-dim md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="GitHub"><Github size={17} /></a>
          </div>
          <button className="text-dim md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden border-t border-line bg-dark md:hidden">
            <div className="flex flex-col gap-4 px-6 py-5 text-sm font-medium text-dim">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="hover:text-foreground">{n.label}</a>
              ))}
              <div className="flex gap-4 pt-2 text-dim">
                <a href={profile.linkedInUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer"><Github size={17} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-6 pb-20 pt-24 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent">{profile.title}</p>
              <h1 className="max-w-xl text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight">
                {profile.headline.split("platforms").map((part, i) =>
                  i === 0 ? <span key={i}>{part}<span className="gradient-text">platforms</span></span> : <span key={i}>{part}</span>
                )}
              </h1>
              <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-dim">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-dark transition-all hover:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                  View Projects <ArrowUpRight size={15} />
                </a>
                <a href={resumeHref} className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-dim transition-all hover:border-accent/40 hover:text-foreground">
                  Resume <Download size={15} />
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:block">
              <div className="rounded-xl border border-line bg-panel p-5 font-mono text-[0.82rem] leading-relaxed shadow-card">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs text-dim/50">terminal</span>
                </div>
                <div className="space-y-2.5 text-dim">
                  <p><span className="text-accent">$</span> az pipelines list</p>
                  <p className="text-foreground/80">50+ pipelines managed</p>
                  <p className="mt-1"><span className="text-accent">$</span> gh repo list --limit 999 | wc -l</p>
                  <p className="text-foreground/80">100+ repositories governed</p>
                  <p className="mt-1"><span className="text-accent">$</span> uptime --platform</p>
                  <p className="text-foreground/80">99.9% availability</p>
                  <p className="mt-1"><span className="text-accent">$</span> echo $ROLE</p>
                  <p className="text-accent-alt">Platform Engineer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Metrics ──────────────────────────────────────────── */}
      <section className="border-y border-line px-6 py-16">
        <motion.div {...fade} className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-4">
          {profile.metrics.map((m, i) => (
            <motion.div key={m.label} {...item(i)} className="rounded-xl border border-line bg-panel/60 p-5 text-center shadow-card backdrop-blur-sm">
              <span className="gradient-text block text-3xl font-extrabold sm:text-4xl">{m.value}</span>
              <span className="mt-1 block text-[0.78rem] font-semibold text-foreground/80">{m.label}</span>
              <span className="mt-1 block text-[0.7rem] leading-snug text-dim/70">{m.note}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <div>
              <SectionTitle eyebrow="About" title="The engineer behind the systems" />
              <div className="flex flex-wrap gap-2">
                {profile.certifications.map((cert) => (
                  <span key={cert.code} className="gradient-border inline-flex rounded-full bg-panel px-3 py-1.5 text-xs font-semibold text-accent">
                    {cert.code}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4 text-[0.92rem] leading-[1.8] text-dim">
              {profile.about.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
              <p className="border-l-2 border-accent/30 pl-4 italic text-foreground/60">&ldquo;{profile.tagline}&rdquo;</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Expertise ────────────────────────────────────────── */}
      <section id="expertise" className="border-t border-line px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Capabilities" title="What I design, automate, and improve" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.expertise.map((exp, i) => {
              const Icon = expertiseIcons[i] || Cloud;
              return (
                <motion.div key={exp.title} {...item(i)} className="group rounded-xl border border-line bg-panel/50 p-6 transition-all hover:border-accent/20 hover:shadow-glow">
                  <Icon className="mb-3 h-5 w-5 text-accent" />
                  <h3 className="text-[0.95rem] font-bold">{exp.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-dim">{exp.body}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section id="projects" className="border-t border-line px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Selected work" title="Projects that compound velocity" />
          <div className="grid gap-5 md:grid-cols-2">
            {profile.projects.map((proj, i) => (
              <motion.article key={proj.title} {...item(i)} className="group flex flex-col rounded-xl border border-line bg-panel/50 p-6 transition-all hover:border-accent/20 hover:shadow-glow">
                <h3 className="font-bold">{proj.title}</h3>
                <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-dim">{proj.summary}</p>
                <div className="mt-3 rounded-lg bg-accent/[0.06] px-3 py-2 text-[0.82rem]">
                  <span className="font-semibold text-accent">Impact </span>
                  <span className="text-foreground/70">{proj.impact}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────── */}
      <section id="experience" className="border-t border-line px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Experience" title="Where I&apos;ve built leverage" />
          {profile.experience.map((job) => (
            <motion.div key={job.company} {...fade} className="rounded-xl border border-line bg-panel/50 p-7 sm:p-8">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-bold">{job.role}</h3>
                  <p className="text-sm font-medium text-accent">{job.company}</p>
                </div>
                <span className="text-[0.78rem] font-medium text-dim">{job.period} · {job.location}</span>
              </div>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-dim">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stack ────────────────────────────────────────────── */}
      <section className="border-t border-line px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Stack" title="Tools and technologies" />
          <motion.div {...fade} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(profile.stack).map(([cat, tools]) => (
              <div key={cat}>
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-dim/60">{cat}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── GitHub ────────────────────────────────────────────── */}
      <section className="border-t border-line px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Open source" title={`GitHub — ${profile.githubUser}`} />
          <div className="grid gap-4 lg:grid-cols-2">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="overflow-hidden rounded-xl border border-line bg-panel/50 p-4 transition-all hover:border-accent/20 hover:shadow-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={githubStats} alt="GitHub stats" className="w-full rounded-lg" />
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="overflow-hidden rounded-xl border border-line bg-panel/50 p-4 transition-all hover:border-accent/20 hover:shadow-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={topLangs} alt="Top languages" className="w-full rounded-lg" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="border-t border-line px-6 py-28">
        <motion.div {...fade} className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Get in touch</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let&apos;s build something <span className="gradient-text">reliable.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-dim">
            Available for DevOps, platform engineering, CI/CD modernization, and infrastructure automation conversations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-dark transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]">
              <Mail size={15} /> Email me
            </a>
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-dim transition-all hover:border-accent/40 hover:text-foreground">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-dim transition-all hover:border-accent/40 hover:text-foreground">
              <Github size={15} /> GitHub
            </a>
            <a href={resumeHref} className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-dim transition-all hover:border-accent/40 hover:text-foreground">
              <Download size={15} /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-line px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-dim/50 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" aria-label="LinkedIn"><Linkedin size={14} /></a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" aria-label="GitHub"><Github size={14} /></a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-foreground" aria-label="Email"><Mail size={14} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}