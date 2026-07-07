"use client";

import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ScrollReveal({ 
  children, 
  className = "", 
  direction = "up", // 'up', 'left', 'right', 'none'
  delay = 0 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    // Fallback if IntersectionObserver is not supported (very old browsers)
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger once when it comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before it hits the bottom
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Determine base starting classes based on direction
  const baseClasses = {
    up: "translate-y-12 opacity-0",
    left: "-translate-x-12 opacity-0",
    right: "translate-x-12 opacity-0",
    none: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        "transition-all duration-1000 ease-out will-change-transform",
        isVisible ? "translate-y-0 translate-x-0 opacity-100" : baseClasses[direction],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
