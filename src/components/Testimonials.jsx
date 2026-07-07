"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import InteractiveDotGrid from "./InteractiveDotGrid";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO at TechFlow",
    text: "Sayed is an exceptional developer. His attention to detail and ability to translate complex requirements into beautiful, functional interfaces is unmatched.",
  },
  {
    name: "Sarah Miller",
    role: "Product Manager",
    text: "Working with Sayed was a breeze. He delivered our project ahead of schedule and the code quality was top-notch. Highly recommended for MERN stack work.",
  },
  {
    name: "David Chen",
    role: "Founder of GreenLoop",
    text: "The animations and performance optimizations Sayed implemented for our site really helped us stand out. He's a true creative developer.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out → swap → fade in
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => {
    if (i === index) return;
    setVisible(false);
    setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, 300);
  };

  return (
    <section className="py-24 px-6 relative bg-[#0A0A0A] overflow-hidden">
      <InteractiveDotGrid />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal delay={0}>
          <div className="inline-block p-4 bg-brand/10 rounded-full mb-8 border border-brand/20">
            <FaQuoteLeft className="text-brand text-2xl" />
          </div>
        </ScrollReveal>

        <div className="relative h-[220px] md:h-[180px]">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed mb-6 drop-shadow-md">
              &quot;{testimonials[index].text}&quot;
            </p>
            <div>
              <h4 className="text-white font-bold text-base uppercase tracking-wider">
                {testimonials[index].name}
              </h4>
              <p className="text-brand text-xs font-medium uppercase tracking-[0.2em] mt-1">
                {testimonials[index].role}
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              data-cursor="hover"
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-brand w-8" : "bg-white/20 w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
