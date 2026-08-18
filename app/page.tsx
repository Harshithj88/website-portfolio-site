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
  Menu,
  X,
} from "lucide-react";
import { Badge } from "@/components/Badge";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/lib/profile";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const stagger = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45, delay, ease: "easeOut" },
});

const accentColors = ["#286F6C", "#6D4B8A", "#C83C63", "#8897B8", "#B8A295", "#0D2F3F"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeHref = `/${profile.resumeFileName}`;
  const githubStats = `https://github-readme-stats.vercel.app/api?username=${profile.githubUser}&show_icons=true&theme=default&hide_border=true&bg_color=F8F7F1&title_color=0D2F3F&text_color=0D2F3F&icon_color=286F6C`;
  const topLangs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUser}&layout=compact&theme=default&hide_border=true&bg_color=F8F7F1&title_color=0D2F3F&text_color=0D2F3F`;

  const sections = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-cream text-primary">

      {/* ─── Header ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-primary/8 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold tracking-tight">{profile.initials}</a>
          <nav className="hidden gap-7 text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-primary/70 md:flex">
            {sections.map((s) => (
              <a key={s.href} href={s.href} className="transition-colors hover:text-primary">{s.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="text-primary/50 transition-colors hover:text-primary" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-primary/50 transition-colors hover:text-primary" aria-label="GitHub"><Github size={18} /></a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden border-t border-primary/8 bg-cream md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5 text-sm font-semibold uppercase tracking-wide">
              {sections.map((s) => (
                <a key={s.href} href={s.href} onClick={() => setMenuOpen(false)}>{s.label}</a>
              ))}
              <div className="flex gap-4 pt-2">
                <a href={profile.linkedInUrl} target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer"><Github size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="px-6 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-secondary">{profile.title}</p>
            <h1 className="max-w-3xl text-[clamp(2.5rem,5.5vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary/70">{profile.summary.split(",").slice(1).join(",").trim()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-cream transition-all hover:bg-secondary">
              Get in touch <ArrowUpRight size={16} />
            </a>
            <a href={resumeHref} className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-5 py-3 text-sm font-bold transition-all hover:border-primary/50">
              Resume <Download size={16} />
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/20 px-5 py-3 text-sm font-bold transition-all hover:border-primary/50">
              GitHub <Github size={16} />
            </a>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary/10 bg-primary/10 sm:grid-cols-4"
          >
            {profile.metrics.map((m, i) => (
              <div key={m.label} className="bg-cream px-5 py-6 sm:px-6">
                <span className="block text-3xl font-extrabold" style={{ color: accentColors[i] }}>{m.value}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-primary/60">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── About ──────────────────────────────────────────── */}
      <section id="about" className="border-t border-primary/8 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fade} className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionTitle eyebrow="About" title="The story behind the systems" />
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.certifications.map((cert, i) => (
                  <span key={cert.code} className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold text-cream" style={{ background: accentColors[i] }}>
                    {cert.code} — {cert.title.split(": ")[1]}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4 text-[0.95rem] leading-[1.85] text-primary/80">
              {profile.about.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
              <p className="border-l-4 border-secondary/40 pl-4 italic text-primary/60">
                &ldquo;{profile.tagline}&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Expertise ──────────────────────────────────────── */}
      <section id="expertise" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Capabilities" title="What I design, automate, and improve" />
          <div className="mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profile.expertise.map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger(i * 0.08)}
                className="group rounded-2xl border border-primary/8 bg-cream/50 p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(13,47,63,0.12)]"
              >
                <div className="mb-4 h-1 w-10 rounded-full" style={{ background: accentColors[i] }} />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/65">{item.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects ───────────────────────────────────────── */}
      <section id="projects" className="border-t border-primary/8 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Selected work" title="Projects that compound engineering velocity" />
          <div className="mt-2 grid gap-6 md:grid-cols-2">
            {profile.projects.map((project, i) => (
              <motion.article
                key={project.title}
                {...stagger(i * 0.1)}
                className="group flex flex-col rounded-2xl border border-primary/8 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(13,47,63,0.12)]"
              >
                <div className="mb-3 h-1 w-10 rounded-full" style={{ background: accentColors[i] }} />
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-[1.75] text-primary/70">{project.summary}</p>
                <div className="mt-4 rounded-xl bg-secondary/8 px-4 py-3 text-sm">
                  <span className="font-bold text-secondary">Impact </span>
                  <span className="text-primary/75">{project.impact}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Experience ─────────────────────────────────────── */}
      <section id="experience" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Experience" title="Where I&apos;ve built leverage" />
          <div className="mt-2 space-y-8">
            {profile.experience.map((job) => (
              <motion.div key={job.company} {...fade} className="rounded-2xl border border-primary/8 bg-cream/50 p-7 sm:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="mt-0.5 text-base font-semibold text-secondary">{job.company}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-primary/50">{job.period} · {job.location}</span>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-primary/75">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: accentColors[i % accentColors.length] }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stack ──────────────────────────────────────────── */}
      <section className="border-t border-primary/8 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Technical stack" title="Tools and technologies" />
          <motion.div {...fade} className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(profile.stack).map(([category, tools]) => (
              <div key={category}>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-primary/45">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── GitHub ─────────────────────────────────────────── */}
      <section id="github" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Open source" title={`GitHub — ${profile.githubUser}`} />
          <div className="mt-2 grid gap-5 lg:grid-cols-2">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl border border-primary/8 bg-cream/50 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={githubStats} alt="GitHub stats" className="w-full" />
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="overflow-hidden rounded-2xl border border-primary/8 bg-cream/50 p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={topLangs} alt="Top languages" className="w-full" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Writing ────────────────────────────────────────── */}
      <section className="border-t border-primary/8 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Technical writing" title="Ideas worth sharing" />
          <div className="mt-2 space-y-3">
            {profile.posts.map((post, i) => (
              <motion.div
                key={post.title}
                {...stagger(i * 0.06)}
                className="group flex items-center justify-between rounded-xl border border-primary/8 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <span className="font-bold">{post.title}</span>
                    <p className="mt-0.5 text-xs text-primary/50">{post.desc}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primary/25 transition-colors group-hover:text-secondary" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ────────────────────────────────────────── */}
      <section id="contact" className="bg-primary px-6 py-24 text-cream">
        <motion.div {...fade} className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-cream/60">Get in touch</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Let&apos;s build something reliable, <br className="hidden sm:block" />repeatable, and useful.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-cream/70">
            Available for conversations around DevOps, platform engineering, CI/CD modernization, and infrastructure automation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-white">
              <Mail size={16} /> Email me
            </a>
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-5 py-3 text-sm font-bold transition-all hover:border-cream/60">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-5 py-3 text-sm font-bold transition-all hover:border-cream/60">
              <Github size={16} /> GitHub
            </a>
            <a href={resumeHref} className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-5 py-3 text-sm font-bold transition-all hover:border-cream/60">
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-primary/8 bg-cream px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-primary/45 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <div className="flex gap-5">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-primary" aria-label="GitHub"><Github size={16} /></a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-primary" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}