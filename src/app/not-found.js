"use client";

import Link from "next/link";
import FluidBackground from "@/components/FluidBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <FluidBackground />
      
      <div className="text-center z-10 px-6">
        <h1 
          className="text-[12rem] md:text-[20rem] font-bold text-white/5 leading-none select-none"
        >
          404
        </h1>
        
        <div className="-mt-20 md:-mt-40">
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8">
            Lost in <span className="italic font-serif text-brand">Space?</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-12 text-lg">
            The page you are looking for doesn&apos;t exist or has been moved to another dimension.
          </p>
          
          <Link href="/">
            <button
              className="bg-brand text-dark px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(139, 92, 246,0.4)] hover:scale-105 active:scale-95 transition-all"
            >
              Back to Reality
            </button>
          </Link>
        </div>
      </div>

      </div>
  );
}
