"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { twMerge } from "tailwind-merge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  direction = "up", // 'up', 'left', 'right', 'none'
  delay = 0 
}) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let scale = 0.9;

    switch (direction) {
      case "up":
        y = 120;
        break;
      case "left":
        x = -120;
        break;
      case "right":
        x = 120;
        break;
      case "none":
        break;
      default:
        y = 120;
    }

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: x,
        y: y,
        scale: scale,
        filter: "blur(15px)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.5,
        delay: delay / 1000,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Appears like magic exactly when scrolled into view
          toggleActions: "play none none reverse", // Plays when scrolling down, reverses going up
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={twMerge("opacity-0 will-change-[transform,opacity,filter]", className)}>
      {children}
    </div>
  );
}
