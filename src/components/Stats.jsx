"use client";

import { useEffect, useRef, useState } from "react";
import InteractiveDotGrid from "./InteractiveDotGrid";
import ScrollReveal from "./ScrollReveal";

function CountUp({ target, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.unobserve(el);

          const numericTarget = parseInt(target, 10);
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(numericTarget);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: "3", suffix: "+" },
    { label: "Projects Completed", value: "50", suffix: "+" },
    { label: "Happy Clients", value: "20", suffix: "+" },
    { label: "Cups of Coffee", value: "500", suffix: "" },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
      <InteractiveDotGrid />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 150} className="text-center group">
              <h4 className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-brand transition-colors drop-shadow-[0_0_0_rgba(139, 92, 246,0)] group-hover:drop-shadow-[0_0_15px_rgba(139, 92, 246,0.5)]">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
