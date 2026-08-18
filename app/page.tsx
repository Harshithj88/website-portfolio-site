"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Cloud,
  Download,
  ExternalLink,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Quote,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { Badge, CertBadge } from "@/components/Badge";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/lib/profile";

const iconMap = [Cloud, Workflow, ShieldCheck, Terminal, Server, GitBranch];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeHref = `/${profile.resumeFileName}`;
  const githubStats = `https://github-readme-stats.vercel.app/api?username=${profile.githubUser}&show_icons=true&theme=tokyonight&hide_border=true`;
  const topLanguages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUser}&layout=compact&theme=tokyonight&hide_border=true`;

  const navLinks = [
    "expertise",
    "projects",
    "experience",
    "certifications",
    "github",
    "blog",
    "contact",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Ambient glow + noise */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="noise absolute inset-0 opacity-[0.08]" />
      </div>

      {/* ── Header ──────────────────────────────────────────── */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a
          href="#top"
          className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-black tracking-widest text-white shadow-lg"
        >
          {profile.initials}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          className="text-slate-300 hover:text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* ── Mobile nav ──────────────────────────────────────── */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 mx-6 mb-4 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/95 p-6 text-sm text-slate-300 backdrop-blur md:hidden"
        >
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize transition-colors hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {section}
            </a>
          ))}
        </motion.nav>
      )}

      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="text-cyan-300" /> {profile.location}
          </p>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {profile.title}
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.certifications.map((cert) => (
              <CertBadge key={cert.code}>
                {cert.code} {cert.title.split(": ")[1]}
              </CertBadge>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-200"
            >
              Let&apos;s connect <ArrowUpRight size={17} />
            </a>
            <a
              href={resumeHref}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-900"
            >
              Download resume <Download size={17} />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-900"
            >
              GitHub <Github size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/50 backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                Impact at a glance
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
                Real outcomes, not just tools on a resume.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                I measure success by engineering velocity gained, incidents
                prevented, and manual work eliminated — not lines of YAML
                written.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {profile.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-700 bg-slate-900 p-4 transition-colors hover:border-cyan-800"
                  >
                    <div className="text-2xl font-black text-cyan-300">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-200">
                      {metric.label}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-slate-500">
                      {metric.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Expertise ───────────────────────────────────────── */}
      <section
        id="expertise"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="Capability map"
          title="Systems I design, automate, and improve"
          body="Not just tools used — the leverage created for engineering teams. Each capability compounds reliability, velocity, and developer experience."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profile.expertise.map((item, i) => {
            const Icon = iconMap[i] ?? Terminal;
            return (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 backdrop-blur transition-all hover:border-slate-700 hover:shadow-cyan-950/20"
              >
                <Icon className="mb-5 h-7 w-7 text-cyan-300 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800/80 px-2.5 py-0.5 text-[11px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── Projects ────────────────────────────────────────── */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="Selected work"
          title="Projects that compound engineering velocity"
          body="Outcomes over outputs. Each project created measurable leverage for engineering teams."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition-all hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-950/50 text-cyan-300">
                  <Zap size={20} />
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-slate-500 transition group-hover:text-cyan-300" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.summary}
              </p>
              <p className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
                <span className="font-semibold text-cyan-300">Impact: </span>
                {project.impact}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────── */}
      <section
        id="experience"
        className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="Experience"
          title="Enterprise DevOps, platform operations, and automation"
          body="Building systems that create leverage — not just shipping features, but enabling every team to ship better."
        />
        {profile.experience.map((job) => (
          <motion.div
            key={job.company}
            {...fadeUp}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                <p className="mt-1 text-lg text-cyan-300">{job.company}</p>
              </div>
              <div className="flex flex-col items-start gap-1 sm:items-end">
                <span className="rounded-full bg-cyan-950/50 px-3 py-1 text-xs font-semibold text-cyan-300">
                  {job.period}
                </span>
                <p className="flex items-center gap-1.5 text-sm text-slate-400">
                  <MapPin size={14} /> {job.location}
                </p>
              </div>
            </div>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="border-l-2 border-cyan-300/40 pl-4"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* ── Certifications & Stack ──────────────────────────── */}
      <section
        id="certifications"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="Credentials"
          title="Certifications and technical stack"
          body="Validated expertise backed by hands-on engineering across enterprise systems."
        />
        <div className="mb-8 grid gap-5 md:grid-cols-2">
          {profile.certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="flex items-start gap-5 rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-lg font-black text-cyan-300">
                {cert.code}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
        >
          <Terminal className="mb-5 h-7 w-7 text-cyan-300" />
          <h3 className="text-xl font-bold text-white">Technical Stack</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(profile.stack).map(([category, tools]) => (
              <div key={category}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
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
        </motion.div>
      </section>

      {/* ── GitHub ──────────────────────────────────────────── */}
      <section
        id="github"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="GitHub"
          title={`Open-source signal from ${profile.githubUser}`}
          body="Live GitHub widgets — review public repository activity and language distribution."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-300/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={githubStats}
              alt={`${profile.githubUser} GitHub stats`}
              className="w-full rounded-2xl"
            />
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-300/40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={topLanguages}
              alt={`${profile.githubUser} top languages`}
              className="w-full rounded-2xl"
            />
          </a>
        </div>
      </section>

      {/* ── Blog ────────────────────────────────────────────── */}
      <section
        id="blog"
        className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8"
      >
        <SectionTitle
          eyebrow="Technical writing"
          title="Turning experience into engineering authority"
          body="Practical, opinionated writing on the systems and patterns behind reliable software delivery."
        />
        <div className="space-y-3">
          {profile.posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all hover:border-slate-700 hover:bg-slate-900/90"
            >
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div>
                  <span className="font-semibold text-slate-200">
                    {post.title}
                  </span>
                  <p className="mt-0.5 text-xs text-slate-500">{post.desc}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-600 transition-colors group-hover:text-cyan-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-10"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The story behind the systems
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            <Quote className="h-5 w-5 shrink-0 text-cyan-300/60" />
            <p className="text-sm italic text-slate-400">
              &ldquo;{profile.tagline}&rdquo;
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:px-8"
      >
        <motion.div
          {...fadeUp}
          className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300 p-8 text-slate-950 shadow-2xl shadow-cyan-500/20 md:p-12"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em]">
            Let&apos;s connect
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Let&apos;s build something reliable, repeatable, and useful.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-800">
            Available for conversations around DevOps, SRE, CI/CD
            modernization, platform engineering, infrastructure automation, and
            developer experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
              href={`mailto:${profile.email}`}
            >
              <Mail size={17} /> Email me
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-950 px-5 py-3 text-sm font-bold transition-colors hover:bg-cyan-200"
              href={profile.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LinkedIn
              <ExternalLink size={13} />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-950 px-5 py-3 text-sm font-bold transition-colors hover:bg-cyan-200"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-slate-900 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {profile.name}. Built with
            Next.js, Tailwind CSS, and Vercel.
          </p>
          <div className="flex gap-4">
            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors hover:text-slate-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors hover:text-slate-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-600 transition-colors hover:text-slate-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}