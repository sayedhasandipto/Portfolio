"use client";

import dynamic from "next/dynamic";

// Lazy-load Terminal client-side only — removes it from initial bundle
const Terminal = dynamic(() => import("@/components/Terminal"), { ssr: false });

export default function TerminalLoader() {
  return <Terminal />;
}
