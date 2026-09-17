"use client";

import { useEffect, useRef } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const revealRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-8 lg:px-12 grid-bg border-b-2 border-ink">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal" ref={addReveal}>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#6b7280] mb-3">
              // 04 — PROOF
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-ink">
              WHAT PEOPLE SAY.
            </h2>
          </div>
          <p className="text-sm text-ink/70 font-medium max-w-sm pb-1">
            Feedback from clients and collaborators I&apos;ve built with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, i) => (
            <article key={i} className="testimonial-card p-8 flex flex-col justify-between reveal" ref={addReveal}>
              <div>
                <p className="text-[15px] sm:text-base leading-relaxed text-ink/80 font-medium relative z-10 pt-1">
                  {item.quote}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-ink/10 flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 ${item.color} text-white flex items-center justify-center font-mono font-bold text-xs tracking-widest shrink-0`}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-ink leading-tight">{item.name}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-[#6b7280] mt-1">
                    {item.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
