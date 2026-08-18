export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-primary/14 bg-white/58 px-3 py-1.5 text-xs font-extrabold text-primary transition-all hover:-translate-y-px hover:border-secondary/42 hover:text-secondary">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block w-fit rounded-full border border-primary/22 bg-[#D1E2E0]/48 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-secondary">
      {children}
    </span>
  );
}
