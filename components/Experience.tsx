"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/lib/profile";

const VISIBLE = 4;

export function Experience() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });

  return (
    <ol>
      {profile.experience.map((job, idx) => {
        const key = `${job.company}-${job.role}`;
        const isOpen = expanded.has(key);
        const hasMore = job.bullets.length > VISIBLE;
        const bullets = isOpen ? job.bullets : job.bullets.slice(0, VISIBLE);
        return (
          <Reveal as="li" key={key} className="grid gap-x-4 pb-8 last:pb-0 md:grid-cols-[1fr_2rem_1.8fr]">
            <div className="mb-3 md:mb-0 md:pr-4 md:text-right">
              <h3 className="font-bold leading-snug">{job.role}</h3>
              <p className="text-sm font-medium text-accent">{job.company}</p>
              <p className="mt-0.5 text-[0.78rem] text-dim">{job.period}</p>
              <p className="text-[0.78rem] text-dim">{job.location}</p>
            </div>

            <div className="relative hidden justify-center md:flex" aria-hidden="true">
              {idx < profile.experience.length - 1 && (
                <span className="absolute -bottom-8 top-3 w-0 border-l-2 border-dashed border-line" />
              )}
              <span className={`relative z-10 mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-dark ${idx === 0 ? "bg-accent shadow-[0_0_12px_var(--color-accent)]" : "bg-dim"}`} />
            </div>

            <div className="card-hover rounded-xl border border-line bg-card p-5 shadow-card">
              <ul className="space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[0.84rem] leading-relaxed text-dim">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {b}
                  </li>
                ))}
              </ul>
              {hasMore && (
                <button
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  className="mt-4 text-[0.82rem] font-semibold text-accent transition-colors hover:text-accent-alt"
                >
                  {isOpen ? "Show less" : `Show ${job.bullets.length - VISIBLE} more`}
                </button>
              )}
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
