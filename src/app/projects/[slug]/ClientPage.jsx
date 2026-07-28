"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

// Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0714] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 italic text-purple-500">
            Project Not Found
          </h1>
          <Link href="/projects" className="text-white/50 hover:text-purple-400 transition-colors text-sm uppercase tracking-widest">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0714] text-gray-200 min-h-screen flex flex-col font-sans">
      <Header />

      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto w-full"
      >
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm font-semibold mb-6"
        >
          <FaArrowLeft size={12} />
          Back to Projects
        </Link>

        {/* Compact Header & Meta Section */}
        <header className="mb-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-gray-400 mb-4 max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-purple-900/30 pt-4 mt-2">
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-950/40 border border-purple-800/40 rounded-md text-xs font-mono text-purple-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-2 border border-purple-900/50 hover:bg-purple-900/20 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <FaGithub size={14} />
                  GitHub Repo
                </motion.a>
              )}
            </div>
          </motion.div>
        </header>

        {/* Main Showcase Image */}
        <motion.div variants={itemVariants} className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-xl border border-purple-900/40 mb-8 bg-[#120e24]">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Structured Content Grid (2x2 Compact Cards) */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Problem / Critical Challenge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.5)", boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#120e24] border border-purple-900/30 p-5 rounded-xl flex flex-col"
          >
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <FaExclamationCircle className="text-red-400" />
              Critical Challenge
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.challenge || "Overcoming specific obstacles in implementation."}
            </p>
          </motion.div>

          {/* Card 2: Technical Solution */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.5)", boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#120e24] border border-purple-900/30 p-5 rounded-xl flex flex-col"
          >
            <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-purple-400 text-xl font-black leading-none">{'//'}</span>
              Technical Solution
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.solution || "Strategic architecture and coding choices."}
            </p>
          </motion.div>

          {/* Card 3: Key Challenges Faced */}
          {project.challengesFaced && project.challengesFaced.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.5)", boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#120e24] border border-purple-900/30 p-5 rounded-xl flex flex-col"
            >
              <h3 className="text-white font-bold text-lg mb-3">Key Challenges Faced</h3>
              <ul className="space-y-2">
                {project.challengesFaced.map((item, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                    <FaExclamationCircle className="text-red-400 mt-1 flex-shrink-0" size={12} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Card 4: Future Roadmap & Improvements */}
          {project.futureRoadmap && project.futureRoadmap.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.5)", boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#120e24] border border-purple-900/30 p-5 rounded-xl flex flex-col"
            >
              <h3 className="text-white font-bold text-lg mb-3">Future Roadmap</h3>
              <ul className="space-y-2">
                {project.futureRoadmap.map((item, index) => (
                  <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                    <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={12} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
}
