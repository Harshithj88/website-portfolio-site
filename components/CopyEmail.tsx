"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-dim transition-all hover:border-accent/40 hover:text-foreground"
    >
      {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
      <span aria-live="polite">{copied ? "Copied" : email}</span>
    </button>
  );
}
