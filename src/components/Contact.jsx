"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "d723d673-4114-4859-a14d-36cf3d54ed77");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
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

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-purple-400" size={18} />,
      title: "Email",
      value: "hello@example.com",
      link: "sayedhasandipto.com",
    },
    {
      icon: <FaPhoneAlt className="text-purple-400" size={18} />,
      title: "WhatsApp / Phone",
      value: "+8801940863413",
      link: "tel:+8801940863413",
    },
    {
      icon: <FaMapMarkerAlt className="text-purple-400" size={18} />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      link: "https://github.com/SayedHasanDIpto",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      link: "https://www.linkedin.com/in/sayedhasandipto/",
    },
    {
      icon: <FaTwitter size={18} />,
      link: "https://x.com/devsayedhasan",
    },
    {
      icon: <FaFacebookF size={18} />,
      link: "https://www.facebook.com/SayedHasanDipto25",
    },
  ];

  return (
    <section
      className="bg-[#0a0714] text-gray-200 py-24 px-4 md:px-8 font-sans overflow-hidden"
      id="contact"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <span className="inline-block px-3 py-1 bg-purple-950/40 border border-purple-800/40 rounded-full text-xs font-bold tracking-widest text-purple-400 uppercase mb-4">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Let&aposs build something <br className="hidden md:block" />{" "}
                amazing together.
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                Whether you have a project in mind, a job opportunity, or just
                want to say hi, my inbox is always open. I&aposll try my best to
                get back to you!
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-xl bg-transparent border border-purple-900/30 hover:border-purple-500/50 hover:bg-purple-900/10 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#120e24] border border-purple-900/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">
                      {info.title}
                    </p>
                    <p className="text-gray-200 font-medium text-sm md:text-base">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="text-[10px] font-semibold text-gray-500 mb-4 uppercase tracking-widest">
                Connect with me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="w-11 h-11 rounded-full bg-[#120e24] border border-purple-900/40 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-600 transition-all duration-200 hover:scale-105"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="bg-transparent border border-purple-900/30 p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent pointer-events-none" />
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#120e24] border border-purple-900/40 rounded-lg py-3.5 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#120e24] border border-purple-900/40 rounded-lg py-3.5 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full bg-[#120e24] border border-purple-900/40 rounded-lg py-3.5 px-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#120e24] border border-purple-900/40 rounded-lg py-3.5 px-4 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={12} />
                    </>
                  )}
                </button>

                {result && (
                  <p
                    className={`text-center text-xs mt-4 font-semibold tracking-wide ${result.includes("Successfully") ? "text-purple-400" : "text-red-400"}`}
                  >
                    {result}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
