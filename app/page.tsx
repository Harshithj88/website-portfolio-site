"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Download,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Activity,
  Shield,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/lib/profile";

function useMotion() {
  const reduced = useReducedMotion();
  const fade = {
    initial: reduced ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduced ? 0 : 0.5 },
  };
  const item = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.07 },
  });
  return { fade, item };
}

const sectionIds = ["about", "expertise", "projects", "experience", "certifications", "recommendations", "contact"];

const expertiseIcons = [Cloud, Workflow, Shield, Terminal, Activity, GitBranch];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [carouselPage, setCarouselPage] = useState(0);
  const [carouselPerPage, setCarouselPerPage] = useState(1);
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());
  const [expandedQuotes, setExpandedQuotes] = useState<Set<string>>(new Set());
  const { fade, item } = useMotion();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeMenu(); return; }
      if (e.key !== "Tab" || !mobileNavRef.current) return;
      const focusable = mobileNavRef.current.querySelectorAll<HTMLElement>("a, button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    const firstLink = mobileNavRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const getPerPage = () => (window.innerWidth >= 1024 ? 3 : 1);
    setCarouselPerPage(getPerPage());
    const onResize = () => {
      const pp = getPerPage();
      setCarouselPerPage(pp);
      setCarouselPage((prev) => Math.min(prev, Math.ceil(profile.recommendations.length / pp) - 1));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalPages = Math.ceil(profile.recommendations.length / carouselPerPage);

  const resumeHref = `/${profile.resumeFileName}`;
  const githubFocus = ["Infrastructure Automation", "Terraform", "PowerShell", "CI/CD Tooling", "Platform Engineering"];

  const nav = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certifications", href: "#certifications" },
    { label: "Testimonials", href: "#recommendations" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-dark text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-dark">Skip to content</a>

      {/* ── Ambient glow ─────────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple/[0.07] blur-[160px]" />
      </div>

      {/* ── Header ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-line bg-dark/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2">
            <span className="gradient-text text-lg font-extrabold">{profile.name}</span>
            <span className="hidden items-center gap-1 text-xs text-dim xl:flex"><MapPin size={11} />{profile.location}</span>
          </a>
          <nav className="hidden gap-5 text-[0.8rem] font-medium text-dim lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className={`transition-colors hover:text-foreground ${activeSection === n.href.slice(1) ? "text-accent" : ""}`} aria-current={activeSection === n.href.slice(1) ? "true" : undefined}>{n.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="GitHub"><Github size={17} /></a>
          </div>
          <button ref={hamburgerRef} className="text-dim lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-nav">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <motion.div id="mobile-nav" ref={mobileNavRef} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden border-t border-line bg-dark lg:hidden">
            <div className="flex flex-col gap-4 px-6 py-5 text-sm font-medium text-dim" role="menu">
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

      <main id="main">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="px-6 pb-20 pt-24 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent">{profile.title}</p>
                <h1 className="max-w-2xl text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-balance">
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
                <div className="mt-8 rounded-xl border border-line bg-card p-4 font-mono text-[0.78rem] leading-relaxed shadow-card lg:hidden">
                  <div className="mb-2 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                    <span className="h-2 w-2 rounded-full bg-green-500/70" />
                  </div>
                  <div className="space-y-1.5 text-dim">
                    <p><span className="text-accent">$</span> echo $ROLE</p>
                    <p className="text-accent-alt">Platform Engineer</p>
                    <p><span className="text-accent">$</span> az pipelines list | wc -l</p>
                    <p className="text-foreground/80">{profile.metrics[0].value} managed</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
                <div className="rounded-xl border border-line bg-card p-5 font-mono text-[0.82rem] leading-relaxed shadow-card">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <span className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-dim">terminal</span>
                  </div>
                  <div className="space-y-2.5 text-dim">
                    <p><span className="text-accent">$</span> az pipelines list</p>
                    <p className="text-foreground/80">{profile.metrics[0].value} pipelines managed</p>
                    <p className="mt-1"><span className="text-accent">$</span> gh repo list --limit 999 | wc -l</p>
                    <p className="text-foreground/80">{profile.metrics[1].value} repositories governed</p>
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
          <motion.div {...fade} className="mx-auto grid max-w-6xl grid-cols-2 gap-5 lg:grid-cols-4">
            {profile.metrics.map((m, i) => (
              <motion.div key={m.label} {...item(i)} className="rounded-xl border border-line bg-card p-5 text-center shadow-card">
                <span className="gradient-text block text-3xl font-extrabold tabular-nums sm:text-4xl">{m.value}</span>
                <span className="mt-1 block text-[0.78rem] font-semibold text-foreground/80">{m.label}</span>
                <span className="mt-1 block text-[0.75rem] leading-snug text-dim">{m.note}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Featured Achievements ──────────────────────────────── */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Recent Impact" title="What I've delivered" center />
            <motion.div {...fade} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {profile.achievements.map((a, i) => (
                <motion.div key={i} {...item(i)} className="flex items-start gap-3 rounded-xl border border-line bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-[0.85rem] leading-relaxed text-dim">{a}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────── */}
        <section id="about" className="border-t border-line bg-dark-alt px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <motion.div {...fade} className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
              <div>
                <SectionTitle eyebrow="About" title="The Platform Engineer Behind The Pipeline" />
                <div className="mb-6 max-w-[320px] overflow-hidden rounded-2xl border-2 border-line shadow-card">
                  <Image src="/HeadShot.png" alt={profile.name} className="aspect-square w-full object-cover object-top" width={800} height={800} priority />
                </div>
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
        <section id="expertise" className="border-t border-line px-6 py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Capabilities" title="What I design, automate, and improve" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {profile.expertise.map((exp, i) => {
                const Icon = expertiseIcons[i] || Cloud;
                return (
                  <motion.div key={exp.title} {...item(i)} className="group rounded-xl border border-line bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
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
        <section id="projects" className="border-t border-line px-6 py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Selected work" title="Projects that compound velocity" />
            <div className="grid gap-5 md:grid-cols-2">
              {profile.projects.map((proj, i) => (
                <motion.article key={proj.title} {...item(i)} className="flex flex-col rounded-xl border border-line bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold">{proj.title}</h3>
                    {proj.url && (
                      <a href={proj.url} target="_blank" rel="noreferrer" className="shrink-0 text-dim transition-colors hover:text-accent" aria-label={`View ${proj.title} on GitHub`}>
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-dim">{proj.summary}</p>
                  <div className="mt-3 rounded-lg bg-accent/[0.06] px-3 py-2 text-[0.82rem]">
                    <span className="font-semibold text-accent">Impact </span>
                    <span className="text-foreground/70">{proj.impact}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                    {proj.url && (
                      <a href={proj.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-accent transition-colors hover:text-accent-alt">
                        View repo <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section id="experience" className="border-t border-line bg-dark-alt px-6 py-36">
          <div className="mx-auto max-w-6xl space-y-6">
            <SectionTitle eyebrow="Experience" title="Where I've built leverage" />
            {profile.experience.map((job) => {
              const jobKey = `${job.company}-${job.role}`;
              const maxVisible = 6;
              const isExpanded = expandedJobs.has(jobKey);
              const hasMore = job.bullets.length > maxVisible;
              const visibleBullets = isExpanded ? job.bullets : job.bullets.slice(0, maxVisible);
              return (
                <motion.div key={jobKey} {...fade} className="rounded-xl border border-line bg-card p-7 shadow-card sm:p-8">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="font-bold">{job.role}</h3>
                      <p className="text-sm font-medium text-accent">{job.company}</p>
                    </div>
                    <span className="text-[0.78rem] font-medium text-dim">{job.period} · {job.location}</span>
                  </div>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {visibleBullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.82rem] leading-relaxed text-dim">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {hasMore && (
                    <button
                      onClick={() => setExpandedJobs((prev) => {
                        const next = new Set(prev);
                        if (next.has(jobKey)) next.delete(jobKey); else next.add(jobKey);
                        return next;
                      })}
                      className="mt-4 text-[0.82rem] font-semibold text-accent transition-colors hover:text-accent-alt"
                    >
                      {isExpanded ? "Show less" : `Show ${job.bullets.length - maxVisible} more`}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Stack ────────────────────────────────────────────── */}
        <section className="border-t border-line px-6 py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Stack" title="Tools and technologies" />
            <motion.div {...fade} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(profile.stack).map(([cat, tools]) => (
                <div key={cat}>
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-dim">{cat}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Certifications ─────────────────────────────────── */}
        <section id="certifications" className="border-t border-line px-6 py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Credentials" title="Certifications" />
            <div className="grid gap-5 sm:grid-cols-2">
              {profile.certifications.map((cert, i) => (
                <motion.a key={cert.code} href={cert.url} target="_blank" rel="noreferrer" {...item(i)} className="block rounded-xl border border-line bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  <div className="mb-3 flex items-center gap-3">
                    <Award className="h-6 w-6 shrink-0 text-accent" />
                    <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-0.5 text-xs font-bold text-accent">{cert.code}</span>
                  </div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-dim">{cert.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs font-medium text-dim">{cert.issuer}</p>
                    <span className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-accent">Verify credential <ArrowUpRight size={12} /></span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── GitHub Activity ─────────────────────────────────── */}
        <section className="border-t border-line px-6 py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Open source" title="GitHub Activity" />
            <motion.div {...fade} className="rounded-xl border border-line bg-card p-8 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <div className="flex-1">
                  <p className="text-2xl font-extrabold sm:text-3xl">Active across <span className="gradient-text">multiple repositories</span></p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {githubFocus.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                </div>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-dark transition-all hover:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
                  View GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Testimonials ──────────────────────────────── */}
        <section id="recommendations" className="border-t border-line bg-dark-alt px-6 py-36">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Testimonials" title="People Talk" center />
            <p className="mx-auto -mt-6 mb-12 max-w-xl text-center text-[0.92rem] leading-relaxed text-dim">Cross-functional technical leadership, from people who have seen it up close.</p>
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Testimonials"
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" && carouselPage < totalPages - 1) setCarouselPage(carouselPage + 1);
                if (e.key === "ArrowLeft" && carouselPage > 0) setCarouselPage(carouselPage - 1);
              }}
            >
              <div
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${carouselPage + 1} of ${totalPages}`}
                className="grid w-full gap-6 lg:grid-cols-3"
              >
                {profile.recommendations.slice(carouselPage * carouselPerPage, carouselPage * carouselPerPage + carouselPerPage).map((rec) => {
                  const isQuoteExpanded = expandedQuotes.has(rec.name);
                  const quoteMaxLen = 200;
                  const needsClamp = rec.quote.length > quoteMaxLen;
                  const trimmed = rec.quote.slice(0, quoteMaxLen);
                  const wordBoundary = trimmed.lastIndexOf(" ");
                  const displayQuote = needsClamp && !isQuoteExpanded ? rec.quote.slice(0, wordBoundary > 0 ? wordBoundary : quoteMaxLen).trimEnd() + "\u2026" : rec.quote;
                  return (
                    <motion.blockquote key={rec.name} {...fade} className="flex flex-col rounded-xl border border-line bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">{rec.name.split(" ").map(n => n[0]).join("")}</div>
                        <div>
                          <p className="text-[0.9rem] font-bold">{rec.name}</p>
                          <p className="text-[0.72rem] text-dim">{rec.title} · <span className="text-accent">{rec.company}</span></p>
                        </div>
                      </div>
                      <p className="flex-1 text-left text-[0.84rem] leading-relaxed text-dim">&ldquo;{displayQuote}&rdquo;</p>
                      {needsClamp && (
                        <button
                          onClick={() => setExpandedQuotes((prev) => {
                            const next = new Set(prev);
                            if (next.has(rec.name)) next.delete(rec.name); else next.add(rec.name);
                            return next;
                          })}
                          className="mt-2 self-start text-[0.78rem] font-semibold text-accent transition-colors hover:text-accent-alt"
                        >
                          {isQuoteExpanded ? "Show less" : "Read more"}
                        </button>
                      )}
                    </motion.blockquote>
                  );
                })}
              </div>
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  onClick={() => setCarouselPage(Math.max(0, carouselPage - 1))}
                  disabled={carouselPage === 0}
                  aria-label="Previous page"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent/40 hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-dim"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2" role="group" aria-label="Testimonial pages">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Page ${i + 1} of ${totalPages}`}
                      aria-current={carouselPage === i ? "true" : undefined}
                      onClick={() => setCarouselPage(i)}
                      className={`rounded-full transition-all ${carouselPage === i ? "h-3 w-6 bg-accent" : "h-3 w-3 bg-line hover:bg-dim/40"}`}
                      style={{ minWidth: 44, minHeight: 44, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCarouselPage(Math.min(totalPages - 1, carouselPage + 1))}
                  disabled={carouselPage === totalPages - 1}
                  aria-label="Next page"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent/40 hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-dim"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────── */}
        <section id="contact" className="border-t border-line bg-dark-alt px-6 py-36">
          <motion.div {...fade} className="mx-auto max-w-6xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Get in touch</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to modernize your <span className="gradient-text">CI/CD platform?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-dim">
              Whether it&apos;s cloud automation, developer experience, or platform engineering &mdash; let&apos;s talk.
            </p>
            <a href={`mailto:${profile.email}`} className="mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-sm font-bold text-dark transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]">
              <Mail size={15} /> Email me
            </a>
            <div className="mt-5 flex justify-center gap-4">
              <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="GitHub"><Github size={20} /></a>
              <a href={resumeHref} download className="text-dim transition-colors hover:text-foreground" aria-label="Resume"><Download size={20} /></a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-line px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-dim sm:flex-row">
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