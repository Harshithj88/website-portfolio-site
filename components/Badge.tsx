export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm">
      {children}
    </span>
  );
}

export function CertBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-400/30 bg-cyan-950/50 px-3 py-1 text-xs font-semibold text-cyan-300">
      {children}
    </span>
  );
}
