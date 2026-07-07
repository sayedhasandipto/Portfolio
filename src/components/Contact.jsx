"use client";

// All GSAP/framer-motion animations removed — static render
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(e.target);
    formData.append("access_key", "d723d673-4114-4859-a14d-36cf3d54ed77");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("Message Sent Successfully!");
        e.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section className="p-4 md:p-12 relative overflow-hidden bg-transparent" id="contact">

      <ScrollReveal delay={0} className="max-w-7xl mx-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[3rem] p-6 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10 shadow-2xl hover:border-brand/50 transition-all duration-500">
        <div className="md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold leading-tight uppercase text-white drop-shadow-lg">
            Let&apos;s work together and create something extraordinary!
          </h2>
        </div>

        <div className="md:w-2/5 w-full">
          <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group backdrop-blur-sm">
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <p className="text-lg font-medium mb-6 relative z-10 text-white">Send me a message</p>
            <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
              <input
                name="name"
                required
                className="w-full bg-white/10 border-white/20 rounded-xl py-3 px-4 focus:ring-brand focus:border-brand text-sm placeholder-gray-500 transition-all hover:bg-white/20 text-white"
                placeholder="Full Name"
                type="text"
              />
              <input
                name="email"
                required
                className="w-full bg-white/10 border-white/20 rounded-xl py-3 px-4 focus:ring-brand focus:border-brand text-sm placeholder-gray-500 transition-all hover:bg-white/20 text-white"
                placeholder="Email Address"
                type="email"
              />
              <textarea
                name="message"
                required
                className="w-full bg-white/10 border-white/20 rounded-xl py-3 px-4 focus:ring-brand focus:border-brand text-sm placeholder-gray-500 transition-all hover:bg-white/20 resize-none text-white"
                placeholder="Tell me about your project"
                rows="4"
              ></textarea>

              <div className="pt-2">
                <button
                  disabled={isSubmitting}
                  className="w-full bg-brand text-dark font-bold py-4 rounded-xl hover:bg-[#cbf000] transition-colors relative overflow-hidden group/btn shadow-[0_0_15px_rgba(139, 92, 246,0.3)] hover:shadow-[0_0_25px_rgba(139, 92, 246,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  data-cursor="hover"
                >
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Get Started"}</span>
                  <div className="absolute inset-0 bg-white/30 translate-y-[100%] group-hover/btn:translate-y-[0%] transition-transform duration-300 ease-out z-0"></div>
                </button>
              </div>

              {result && (
                <p className={`text-center text-xs mt-4 ${result.includes("Successfully") ? "text-brand" : "text-red-500"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
