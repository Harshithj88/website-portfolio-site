export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-[0.7rem] font-medium text-dim transition-colors hover:border-accent/30 hover:text-accent">
      {children}
    </span>
  );
}
