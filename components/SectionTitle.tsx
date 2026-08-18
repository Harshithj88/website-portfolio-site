export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {body ? (
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-dim">{body}</p>
      ) : null}
    </div>
  );
}
