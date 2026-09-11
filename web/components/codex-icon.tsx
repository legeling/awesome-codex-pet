"use client";

import { useState } from "react";

type CodexIconProps = {
  className?: string;
};

function IconImage({ theme }: { theme: "light" | "dark" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className={`codex-app-icon-${theme} absolute inset-0`}>
      {!loaded && (
        <svg viewBox="0 0 32 32" className="size-full text-text" fill="none">
          <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" fillOpacity="0.08" />
          <path d="m9 10 5 6-5 6m9 0h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <img
        className={`absolute inset-0 size-full object-contain ${loaded ? "opacity-100" : "opacity-0"}`}
        src={`/assets/brand/codex-app-${theme}.png`}
        width={32}
        height={32}
        alt=""
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
    </span>
  );
}

export function CodexIcon({ className = "size-6" }: CodexIconProps) {
  return (
    <span className={`${className} relative inline-block shrink-0`} aria-hidden="true">
      <IconImage theme="light" />
      <IconImage theme="dark" />
    </span>
  );
}
