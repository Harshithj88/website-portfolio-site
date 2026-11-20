"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Menu, X } from "lucide-react";
import { profile } from "@/lib/profile";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { label: "About", id: "about" },
  { label: "How I work", id: "how-i-work" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Credentials", id: "certifications" },
  { label: "Testimonials", id: "recommendations" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
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
    mobileNavRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-20% 0px -60% 0px" }
    );
    nav.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-dark/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="gradient-text text-lg font-extrabold">{profile.name}</span>
          <span className="hidden items-center gap-1 text-xs text-dim 2xl:flex"><MapPin size={11} />{profile.location}</span>
        </a>
        <nav aria-label="Primary" className="hidden gap-5 text-[0.8rem] font-medium text-dim xl:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`transition-colors hover:text-foreground ${active === n.id ? "text-accent" : ""}`} aria-current={active === n.id ? "true" : undefined}>{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 xl:flex">
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="text-dim transition-colors hover:text-foreground" aria-label="GitHub"><Github size={17} /></a>
          </div>
          <ThemeToggle />
          <button ref={hamburgerRef} className="text-dim xl:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen} aria-controls="mobile-nav">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.div id="mobile-nav" ref={mobileNavRef} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden border-t border-line bg-dark xl:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4 px-6 py-5 text-sm font-medium text-dim">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)} className="hover:text-foreground">{n.label}</a>
            ))}
            <div className="flex gap-4 pt-2">
              <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
