"use client";

import { useEffect, useRef } from "react";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
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
    <section id="process" className="relative py-24 px-4 sm:px-8 lg:px-12 grid-bg border-b-2 border-ink">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal" ref={addReveal}>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#6b7280] mb-3">
              // 05 — WORKFLOW
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-ink">
              FROM BRIEF TO BUILD.
            </h2>
          </div>
          <p className="text-sm text-ink/70 font-medium max-w-sm pb-1 leading-relaxed">
            A four-step process — clarify, engineer, test, ship. Every project follows the same rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="step-card flex flex-col justify-between reveal" ref={addReveal}>
              <div>
                <div className="step-num mb-6">{step.num}</div>
                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-ink/70 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-ink/40 border-t border-ink/5">
                <span>PHASE</span>
                <span>{step.phase}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
