"use client";

// GSAP ScrollTrigger and framer-motion removed — static render
import Link from "next/link";
import { FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const linkGroups = [
    {
      title: "Services",
      links: [
        { name: "Full-Stack MERN Apps", href: "/#projects" },
        { name: "Node.js Backend Systems", href: "/#about" },
        { name: "React Frontend Logic", href: "/#about" },
        { name: "MongoDB Database Design", href: "/#projects" }
      ]
    },
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-xl pt-20 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-12 md:gap-20">

          <div className="md:w-1/3 text-center md:text-left">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-6 group cursor-pointer" data-cursor="hover">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 bg-black text-white border border-white/20 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                SH
              </div>
              <span className="font-bold tracking-tighter text-xl text-white uppercase">Sayed Hasan Dipto</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              A full-stack developer based in Bangladesh, specializing in Next.js and modern web ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 text-center md:text-left">
            {linkGroups.map((group, i) => (
              <div key={i}>
                <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">{group.title}</h5>
                <ul className="text-gray-400 text-sm space-y-3">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="inline-block transition-colors hover:text-brand"
                        data-cursor="hover"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">CONNECT</h5>
              <ul className="text-gray-400 text-sm space-y-4">
                {[
                  { icon: <FaGithub />, text: "sayedhasandipto", href: "https://github.com/sayedhasandipto" },
                  { icon: <FaEnvelope />, text: "dev.sayedhasan@gmail.com", href: "mailto:dev.sayedhasan@gmail.com" },
                  { icon: <FaMapMarkerAlt />, text: "Dhaka, BD", href: "https://maps.google.com/?q=Dhaka,Bangladesh" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center md:justify-start gap-3 cursor-pointer group hover:translate-x-1 transition-transform duration-200"
                      data-cursor="hover"
                    >
                      <span className="text-gray-400 group-hover:text-brand transition-colors text-lg">{item.icon}</span>
                      <span className="group-hover:text-white transition-colors">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 Sayed Hasan Dipto. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="transition-colors hover:text-brand">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-brand">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
