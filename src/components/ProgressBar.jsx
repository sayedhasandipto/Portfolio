"use client";

import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scroll / height) * 100;
      if (barRef.current) barRef.current.style.width = `${progress}%`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="progressBar" ref={barRef} />;
}
