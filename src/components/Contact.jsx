"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check, ArrowUpRight, Loader2 } from "lucide-react";
import { PERSON } from "@/lib/data";
import { playClick, playBeep, playSuccess } from "@/lib/sound";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitState, setSubmitState] = useState("idle"); // "idle" | "compiling" | "sent"
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

  const copyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSON.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitState !== "idle") return;
    
    playBeep();
    setSubmitState("compiling");
    const formData = new FormData(e.target);
    const subject = `Project Inquiry from ${formData.get("subject")}`;
    const body = `From: ${formData.get("email")}%0A%0A${formData.get("message")}`;

    setTimeout(() => {
      playSuccess();
      setSubmitState("sent");
      window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setTimeout(() => setSubmitState("idle"), 4000);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 lg:px-12 grid-bg crosshair-container border-t-2 border-ink">
      <span className="corner-mark corner-tl" style={{ color: "#ff5f1f" }} />
      <span className="corner-mark corner-tr" style={{ color: "#ff5f1f" }} />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
        {/* Left col */}
        <div className="lg:col-span-5 reveal" ref={addReveal}>
          <div className="flex items-center gap-2 mb-4 font-mono text-[10px] font-bold text-ink uppercase tracking-widest">
            <span className="bg-ink text-white px-1.5 py-0.5">06</span> CONTACT
          </div>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[.9] font-bold uppercase tracking-tight text-ink">
            LET&apos;S BUILD<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #080a0d' }}>SOMETHING</span><br />
            USEFUL.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink/75 max-w-md font-medium border-l-2 border-accent pl-4">
            Have a product, dashboard, API or full-stack application in mind? Send the brief — the form opens your default email client with the details prefilled.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-5 max-w-md">
            <div className="contact-info-card flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#6b7280] mb-1.5">
                // RESPONSE
              </div>
              <div className="font-bold text-ink text-base">Within 24h</div>
            </div>
            
            <div className="contact-info-card flex-1">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#6b7280] mb-1.5">
                // LOCATION
              </div>
              <div className="font-bold text-ink text-base">Dhaka · GMT+6</div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={copyEmail}
              className="copy-btn w-max"
            >
              {copied ? (
                <Check className="w-4 h-4 text-accent shrink-0" />
              ) : (
                <Copy className="w-4 h-4 text-accent shrink-0" />
              )}
              <span>{copied ? "COPIED TO CLIPBOARD" : PERSON.email.toUpperCase()}</span>
            </button>
          </div>
        </div>

        {/* Right col — form */}
        <div className="lg:col-span-7 w-full reveal" ref={addReveal}>
          <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold text-ink uppercase tracking-widest">
            <span className="bg-ink text-white px-2 py-0.5">&gt;</span> SEND MESSAGE
          </div>
          
          <div
            className="border-2 border-ink shadow-[8px_8px_0_#080a0d] p-0 overflow-hidden flex flex-col relative group"
            style={{
              backgroundColor: "#111419",
              backgroundImage:
                "repeating-linear-gradient(0deg, #0d1014 0px, #0d1014 2px, #1a1e26 2px, #1a1e26 4px)",
            }}
          >
            {/* Terminal Header */}
            <div className="flex justify-between items-center bg-[#0d0f13] px-6 py-4 font-mono text-xs text-[#e6e6e6] uppercase tracking-widest border-b border-[#272b31] relative z-10">
              <div className="flex items-center gap-1.5 font-bold">
                <span>&gt;_ CONTACT.SH</span>
              </div>
              <div
                className={`font-bold tracking-wider transition-colors ${
                  submitState === "compiling"
                    ? "text-yellow-400 animate-pulse"
                    : submitState === "sent"
                    ? "text-emerald-400"
                    : "text-[#ff5f1f]"
                }`}
              >
                {submitState === "compiling" ? "COMPILING..." : submitState === "sent" ? "READY ✓" : "READY"}
              </div>
            </div>

            <form className="p-6 md:p-8 grid gap-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-[#858c97] mb-2.5">
                    &gt; NAME
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#0a0d12]/50 border border-[#282d36] px-4 py-3.5 outline-none font-mono text-sm text-[#e6e6e6] transition focus:border-[#ff5f1f] placeholder-[#858c97]/50"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-[#858c97] mb-2.5">
                    &gt; EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@company.com"
                    className="w-full bg-[#0a0d12]/50 border border-[#282d36] px-4 py-3.5 outline-none font-mono text-sm text-[#e6e6e6] transition focus:border-[#ff5f1f] placeholder-[#858c97]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-[#858c97] mb-2.5">
                  &gt; PROJECT_SCOPE
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me what you're building..."
                  className="w-full bg-[#0a0d12]/50 border border-[#282d36] px-4 py-3.5 outline-none font-mono text-sm text-[#e6e6e6] transition resize-y focus:border-[#ff5f1f] placeholder-[#858c97]/50 min-h-[140px]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitState !== "idle"}
                className={`mt-2 text-white py-4 px-6 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold flex justify-center items-center gap-2 transition shadow-none cursor-pointer ${
                  submitState === "compiling"
                    ? "bg-yellow-500 text-black cursor-wait"
                    : submitState === "sent"
                    ? "bg-emerald-600 text-white"
                    : "bg-[#ff5f1f] hover:bg-white hover:text-ink"
                }`}
              >
                {submitState === "compiling" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>&gt; COMPILING BRIEF...</span>
                  </>
                ) : submitState === "sent" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>&gt; CLIENT LAUNCHED ✓</span>
                  </>
                ) : (
                  <>
                    <span>GENERATE EMAIL REQUEST</span>
                    <span className="text-sm">↗</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
