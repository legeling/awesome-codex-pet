"use client";

import { useState, useTransition } from "react";

type CopyCommandButtonProps = {
  command: string;
  label: string;
};

export function CopyCommandButton({ command, label }: CopyCommandButtonProps) {
  const [copied, setCopied] = useState(false);
  const [, startTransition] = useTransition();

  async function handleCopy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);

    startTransition(() => {
      setTimeout(() => {
        setCopied(false);
      }, 1400);
    });
  }

  return (
    <button className="button-link--subtle" type="button" onClick={handleCopy}>
      {copied ? "Copied" : label}
    </button>
  );
}
