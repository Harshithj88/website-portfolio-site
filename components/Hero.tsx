import Image from "next/image";
import { ArrowUpRight, Award, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/profile";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const years = new Date().getFullYear() - profile.careerStartYear;
  const [l1, l2, l3] = profile.heroLines;
  return (
    <section className="relative px-6 pb-16 pt-14 sm:pt-20 lg:px-8">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]" />
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center gap-8 text-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-12 md:text-left">
          <h1 className="order-1 text-[clamp(2.4rem,6vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight">
            {l1}<br />{l2}<br /><span className="gradient-text">{l3}</span>
          </h1>

          <div className="order-2 md:order-none md:row-span-2">
            <div className="rounded-full bg-gradient-to-br from-accent via-purple to-accent-alt p-1 shadow-[0_0_48px_rgba(56,189,248,0.25)]">
              <Image
                src="/HeadShot.png"
                alt={profile.name}
                width={800}
                height={800}
                sizes="(min-width: 768px) 320px, 240px"
                priority
                className="h-60 w-60 rounded-full border-4 border-dark object-cover object-top md:h-80 md:w-80"
              />
            </div>
          </div>

          <div className="order-3 md:text-right">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-dim">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {profile.availability}
            </span>
            <p className="text-[1.05rem] leading-relaxed text-dim">{profile.summary}</p>
          </div>

          <div className="order-4 flex items-center gap-4 md:justify-self-start">
            <span className="gradient-text text-5xl font-extrabold tabular-nums">{years}</span>
            <span className="text-left text-sm font-medium leading-snug text-dim">Years in<br />DevOps &amp; SRE</span>
          </div>

          <div className="order-5 flex items-center gap-3 md:justify-self-end">
            <Award className="h-9 w-9 text-accent" />
            <span className="text-left text-xs font-semibold uppercase leading-snug tracking-wider text-dim">
              Azure DevOps<br />Engineer Expert
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-ink transition-all hover:shadow-[0_0_24px_rgba(56,189,248,0.3)]">
              View Projects <ArrowUpRight size={15} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent/40">
              <Mail size={15} /> Contact
            </a>
            <a href={`/${profile.resumeFileName}`} download className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-dim transition-all hover:border-accent/40 hover:text-foreground">
              Resume <Download size={15} />
            </a>
          </div>
          <div className="flex gap-4 text-dim">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Linkedin size={19} /></a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground"><Github size={19} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
