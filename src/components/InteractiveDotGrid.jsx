"use client";

import { useEffect, useRef } from "react";

// Mouse-reactive dot grid — CSS radial mask reveal, single passive mousemove
export default function InteractiveDotGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Walk up to find the nearest positioned ancestor (the section)
    const section = el.closest("section") || el.parentElement;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    const onLeave = () => {
      el.style.setProperty("--mx", "200%");
      el.style.setProperty("--my", "200%");
    };

    section.addEventListener("mousemove", onMove, { passive: true });
    section.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        backgroundImage:
          "radial-gradient(circle, rgba(139, 92, 246,0.12) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        maskImage:
          "radial-gradient(circle 280px at var(--mx, 200%) var(--my, 200%), black 0%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle 280px at var(--mx, 200%) var(--my, 200%), black 0%, transparent 100%)",
      }}
    />
  );
}
