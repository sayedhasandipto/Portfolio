"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf;
    let ringX = -100, ringY = -100;
    let targetX = -100, targetY = -100;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate(${targetX}px, ${targetY}px)`;
    };

    const animate = () => {
      ringX += (targetX - ringX) * 0.12;
      ringY += (targetY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onEnterHover = () => ring.classList.add("cursor-hover");
    const onLeaveHover = () => ring.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("[data-cursor='hover']").forEach((el) => {
      el.addEventListener("mouseenter", onEnterHover);
      el.addEventListener("mouseleave", onLeaveHover);
    });

    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps instantly */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#8B5CF6",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-100px, -100px)",
          marginLeft: -3,
          marginTop: -3,
          willChange: "transform",
        }}
      />
      {/* Ring — lags behind */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(139, 92, 246,0.5)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-100px, -100px)",
          marginLeft: -18,
          marginTop: -18,
          willChange: "transform",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
      <style>{`
        @media (pointer: coarse) { .cursor-dot, .cursor-ring { display: none; } }
        * { cursor: none !important; }
        .cursor-ring.cursor-hover {
          width: 56px;
          height: 56px;
          border-color: #8B5CF6;
          margin-left: -28px;
          margin-top: -28px;
        }
      `}</style>
    </>
  );
}
