"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let isHovering = false;
    let isClicking = false;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const target = e.target.closest(
        "a, button, input, textarea, .project-card, .step-card, .testimonial-card, .contact-info-card, .copy-btn, .stack-card, .glass, .now-strip, .gh-strip, .live-widget, .filter, [data-cursor-hover]"
      );
      if (target && !isHovering) {
        isHovering = true;
        cursor.classList.add("cursor-hover");
      } else if (!target && isHovering) {
        isHovering = false;
        cursor.classList.remove("cursor-hover");
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      cursor.classList.add("cursor-click");
    };
    const onMouseUp = () => {
      isClicking = false;
      cursor.classList.remove("cursor-click");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });

    const loop = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      if (cursor) {
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div id="cursor" ref={cursorRef} className="cursor-dot hidden sm:block" />;
}
