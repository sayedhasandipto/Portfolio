"use client";

import { useEffect } from "react";

// CSS-only ripple click effect — no framer-motion, no canvas
export default function ClickEffect() {
  useEffect(() => {
    const onClick = (e) => {
      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position:fixed;
        left:${e.clientX}px;
        top:${e.clientY}px;
        width:0;
        height:0;
        border-radius:50%;
        background:rgba(139, 92, 246,0.3);
        pointer-events:none;
        z-index:9997;
        transform:translate(-50%,-50%);
        animation:clickRipple 0.6s ease-out forwards;
      `;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    };

    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <style>{`
      @keyframes clickRipple {
        to { width: 80px; height: 80px; opacity: 0; }
      }
    `}</style>
  );
}
