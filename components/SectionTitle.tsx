import { Eyebrow } from "./Badge";

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
    <div className="mb-10 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-3 max-w-[34rem] text-base font-medium leading-[1.8] text-primary">
          {body}
        </p>
      ) : null}
    </div>
  );
}
