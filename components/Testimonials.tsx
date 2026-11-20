"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { profile } from "@/lib/profile";

const QUOTE_MAX = 200;

export function Testimonials() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const touchX = useRef<number | null>(null);
  const recs = profile.recommendations;
  const totalPages = Math.ceil(recs.length / perPage);

  useEffect(() => {
    const update = () => {
      const pp = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      setPerPage(pp);
      setPage((prev) => Math.min(prev, Math.ceil(recs.length / pp) - 1));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [recs.length]);

  const go = (p: number) => setPage(Math.max(0, Math.min(totalPages - 1, p)));
  const arrow = "flex h-9 w-9 items-center justify-center rounded-full border border-line text-dim transition-colors hover:border-accent/40 hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-dim";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(page + 1);
        if (e.key === "ArrowLeft") go(page - 1);
      }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(page + (dx < 0 ? 1 : -1));
      }}
    >
      <div role="group" aria-roledescription="slide" aria-label={`Slide ${page + 1} of ${totalPages}`} className="grid w-full items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recs.slice(page * perPage, page * perPage + perPage).map((rec) => {
          const isOpen = expanded.has(rec.name);
          const clamp = rec.quote.length > QUOTE_MAX;
          const cut = rec.quote.slice(0, QUOTE_MAX).lastIndexOf(" ");
          const text = clamp && !isOpen ? rec.quote.slice(0, cut > 0 ? cut : QUOTE_MAX).trimEnd() + "\u2026" : rec.quote;
          return (
            <blockquote key={rec.name} className="card-hover flex flex-col rounded-xl border border-line bg-card p-7 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">{rec.name.split(" ").map((n) => n[0]).join("")}</div>
                <div>
                  <p className="text-[0.9rem] font-bold">{rec.name}</p>
                  <p className="text-[0.72rem] text-dim">{rec.title} · <span className="text-accent">{rec.company}</span></p>
                </div>
              </div>
              <p className="flex-1 text-left text-[0.84rem] leading-relaxed text-dim">&ldquo;{text}&rdquo;</p>
              {clamp && (
                <button
                  onClick={() => setExpanded((prev) => { const n = new Set(prev); if (n.has(rec.name)) n.delete(rec.name); else n.add(rec.name); return n; })}
                  aria-expanded={isOpen}
                  className="mt-2 self-start text-[0.78rem] font-semibold text-accent transition-colors hover:text-accent-alt"
                >
                  {isOpen ? "Show less" : "Read more"}
                </button>
              )}
            </blockquote>
          );
        })}
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous page" className={arrow}><ChevronLeft size={18} /></button>
        <div className="flex gap-1" role="group" aria-label="Testimonial pages">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Page ${i + 1} of ${totalPages}`}
              aria-current={page === i ? "true" : undefined}
              onClick={() => setPage(i)}
              className="inline-flex h-11 min-w-11 items-center justify-center"
            >
              <span className={`block rounded-full transition-all ${page === i ? "h-3 w-6 bg-accent" : "h-3 w-3 bg-line"}`} />
            </button>
          ))}
        </div>
        <button onClick={() => go(page + 1)} disabled={page === totalPages - 1} aria-label="Next page" className={arrow}><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}
