import { ArrowUpRight, Award, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/Badge";
import { CopyEmail } from "@/components/CopyEmail";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { profile } from "@/lib/profile";

const section = "border-t border-line px-6 py-20 sm:py-24";

export default function Home() {
  const [featured, ...otherProjects] = profile.projects;

  return (
    <div className="min-h-screen bg-dark text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink">Skip to content</a>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple/[0.07] blur-[160px]" />
      </div>

      <Header />

      <main id="main">
        <Hero />

        <section aria-label="Key numbers" className="border-y border-line px-6 py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 lg:grid-cols-4">
            {profile.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.07} className="rounded-xl border border-line bg-card p-5 text-center shadow-card">
                <span className="gradient-text block text-3xl font-extrabold tabular-nums sm:text-4xl">{m.value}</span>
                <span className="mt-1 block text-[0.78rem] font-semibold text-foreground/80">{m.label}</span>
                <span className="mt-1 block text-[0.75rem] leading-snug text-dim">{m.note}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="bg-dark-alt px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionTitle eyebrow="About" title="The engineer behind the pipeline" />
              <div className="flex flex-wrap gap-2">
                {profile.certifications.map((cert) => (
                  <span key={cert.code} className="gradient-border inline-flex rounded-full bg-panel px-3 py-1.5 text-xs font-semibold text-accent">{cert.code}</span>
                ))}
              </div>
              <p className="mt-6 border-l-2 border-accent/30 pl-4 text-sm italic text-foreground/60">&ldquo;{profile.tagline}&rdquo;</p>
            </div>
            <Reveal className="space-y-4 text-[0.95rem] leading-[1.8] text-dim">
              {profile.about.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </Reveal>
          </div>
        </section>

        <section className={section}>
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Recent impact" title="What I've delivered" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {profile.achievements.map((a, i) => (
                <Reveal key={a} delay={i * 0.05} className="card-hover flex items-start gap-3 rounded-xl border border-line bg-card p-5 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-[0.88rem] leading-relaxed text-dim">{a}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="how-i-work" className={`${section} bg-dark-alt`}>
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionTitle eyebrow="Overview" title="How I work" />
              <Reveal className="space-y-4 text-[0.95rem] leading-[1.8] text-dim">
                {profile.howIWork.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
              </Reveal>
            </div>
            <Reveal className="rounded-xl border border-line bg-card p-6 shadow-card">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-dim">Experience by area</p>
              <ul className="space-y-4">
                {profile.experienceAreas.map((area) => {
                  const yrs = new Date().getFullYear() - area.since;
                  const pct = Math.min(100, (yrs / (new Date().getFullYear() - profile.careerStartYear)) * 100);
                  return (
                    <li key={area.name}>
                      <div className="mb-1.5 flex justify-between text-[0.84rem]">
                        <span className="font-medium">{area.name}</span>
                        <span className="text-dim">{yrs}+ years</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-foreground/[0.08]">
                        <div className="h-full rounded-full bg-gradient-to-r from-accent to-purple" style={{ width: `${pct}%` }} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="projects" className={section}>
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Selected work" title="Projects" />
            <Reveal as="article" className="card-hover grid gap-6 rounded-xl border border-line bg-card p-7 shadow-card md:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">Featured</p>
                <h3 className="text-xl font-bold">{featured.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-dim">{featured.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{featured.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              </div>
              <div className="flex flex-col justify-between gap-4 rounded-lg bg-accent/[0.06] p-5">
                <div>
                  <span className="text-sm font-semibold text-accent">Impact</span>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-foreground/80">{featured.impact}</p>
                </div>
                <a href={featured.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-alt">
                  <Github size={15} /> View repo <ArrowUpRight size={13} />
                </a>
              </div>
            </Reveal>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {otherProjects.map((proj, i) => (
                <Reveal as="article" key={proj.title} delay={i * 0.07} className="card-hover flex flex-col rounded-xl border border-line bg-card p-6 shadow-card">
                  <h3 className="font-bold">{proj.title}</h3>
                  <p className="mt-2 flex-1 text-[0.84rem] leading-relaxed text-dim">{proj.summary}</p>
                  <p className="mt-3 rounded-lg bg-accent/[0.06] px-3 py-2 text-[0.8rem] text-foreground/70"><span className="font-semibold text-accent">Impact </span>{proj.impact}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">{proj.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                  <a href={proj.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-[0.78rem] font-semibold text-accent transition-colors hover:text-accent-alt">
                    View repo <ArrowUpRight size={12} />
                  </a>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-dim">
              More on{" "}
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:text-accent-alt">GitHub <ArrowUpRight size={12} className="inline" /></a>
            </p>
          </div>
        </section>

        <section id="experience" className={`${section} bg-dark-alt`}>
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="Experience" title="Where I've built leverage" />
            <Experience />
          </div>
        </section>

        <section id="stack" className={section}>
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Stack" title="Tools and technologies" />
            <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(profile.stack).map(([cat, tools]) => (
                <div key={cat}>
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-dim">{cat}</p>
                  <div className="flex flex-wrap gap-1.5">{tools.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="certifications" className={`${section} bg-dark-alt`}>
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Credentials" title="Certifications" />
            <div className="grid gap-5 sm:grid-cols-2">
              {profile.certifications.map((cert, i) => (
                <Reveal key={cert.code} delay={i * 0.07}>
                  <a href={cert.url} target="_blank" rel="noreferrer" className="card-hover block h-full rounded-xl border border-line bg-card p-6 shadow-card">
                    <div className="mb-3 flex items-center gap-3">
                      <Award className="h-6 w-6 shrink-0 text-accent" />
                      <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-0.5 text-xs font-bold text-accent">{cert.code}</span>
                    </div>
                    <h3 className="font-bold">{cert.title}</h3>
                    <p className="mt-1.5 text-[0.84rem] leading-relaxed text-dim">{cert.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-xs font-medium text-dim">{cert.issuer}</p>
                      <span className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-accent">Verify credential <ArrowUpRight size={12} /></span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="recommendations" className={section}>
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Testimonials" title="What colleagues say" body="Feedback from engineers, managers and partners who have worked with me directly." center />
            <Testimonials />
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-dark-alt px-6 py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Get in touch</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&apos;s build something <span className="gradient-text">reliable</span> together
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-dim">
              Looking for a DevOps, SRE or platform engineer? I&apos;m happy to talk about it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-ink transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]">
                <Mail size={15} /> Email me
              </a>
              <CopyEmail email={profile.email} />
            </div>
            <div className="mt-6 flex justify-center gap-4 text-dim">
              <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground" aria-label="GitHub"><Github size={20} /></a>
            </div>
          </Reveal>
        </section>
      </main>

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
