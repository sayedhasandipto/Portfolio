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
      value: "sayedhasandipto@gmail.com",
      link: "mailto:sayedhasandipto@gmail.com",
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
      link: "https://maps.google.com/?q=Dhaka,+Bangladesh",
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
      className="overflow-hidden bg-[#0a0714] px-4 py-24 font-sans text-gray-200 md:px-8"
      id="contact"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <span className="mb-4 inline-block rounded-full border border-purple-800/40 bg-purple-950/40 px-3 py-1 text-xs font-bold tracking-widest text-purple-400 uppercase">
                Get In Touch
              </span>
              <h2 className="mb-4 text-4xl leading-tight font-extrabold text-white md:text-5xl">
                Let&aposs build something <br className="hidden md:block" />{" "}
                amazing together.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
                Whether you have a project in mind, a job opportunity, or just
                want to say hi, my inbox is always open. I&aposll try my best to
                get back to you!
              </p>
            </div>

            <div className="mb-10 flex flex-col gap-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  className="group flex items-center gap-4 rounded-xl border border-purple-900/30 bg-transparent p-4 transition-colors duration-200 hover:border-purple-500/50 hover:bg-purple-900/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-purple-900/40 bg-[#120e24] transition-transform duration-200 group-hover:scale-105">
                    {info.icon}
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                      {info.title}
                    </p>
                    <p className="text-sm font-medium text-gray-200 md:text-base">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                Connect with me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-900/40 bg-[#120e24] text-gray-400 transition-all duration-200 hover:scale-105 hover:border-purple-500 hover:bg-purple-600 hover:text-white"
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
            <div className="relative overflow-hidden rounded-2xl border border-purple-900/30 bg-transparent p-6 md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple-900/10 to-transparent" />
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Sayed Hasan Dipto"
                      className="w-full rounded-lg border border-purple-900/40 bg-[#120e24] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-colors duration-200 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                      Email Address
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="sayedhasandipto@gmail.com"
                      className="w-full rounded-lg border border-purple-900/40 bg-[#120e24] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-colors duration-200 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                    Subject
                  </label>
                  <input
                    name="subject"
                    required
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full rounded-lg border border-purple-900/40 bg-[#120e24] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-colors duration-200 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-lg border border-purple-900/40 bg-[#120e24] px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-colors duration-200 focus:border-purple-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3.5 font-bold text-white transition-colors duration-200 hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className={`mt-4 text-center text-xs font-semibold tracking-wide ${result.includes("Successfully") ? "text-purple-400" : "text-red-400"}`}
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
