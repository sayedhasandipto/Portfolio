"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0 = reveal text, 1 = split screen, 2 = exit

  useEffect(() => {
    // 1. Text stays for 0.5 seconds
    const t1 = setTimeout(() => {
      setPhase(1);
    }, 500);

    // 2. Wait for split animation to finish, then complete
    const t2 = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[99999] pointer-events-none flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top Half Curtain */}
      <div 
        className={`absolute top-0 left-0 w-full h-1/2 bg-[#0A0A0A] transition-transform duration-[1s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          phase === 1 ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      
      {/* Bottom Half Curtain */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-[#0A0A0A] transition-transform duration-[1s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          phase === 1 ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Middle Line separator (optional aesthetic touch) */}
      <div 
        className={`absolute left-0 w-full h-[1px] bg-white/5 transition-all duration-[1s] ease-in-out ${
          phase === 1 ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100 top-1/2"
        }`}
      />

      {/* Text Container */}
      <div 
        className={`relative z-10 flex flex-col items-center text-center transition-opacity duration-[0.5s] ease-out ${
          phase === 1 ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <p 
          className="text-white/70 font-light tracking-[0.4em] uppercase text-xs md:text-sm mb-6 opacity-0 animate-[fadeSlideDown_1s_ease-out_0.2s_forwards]"
        >
          Welcome to my Universe
        </p>
        
        <div className="flex flex-col items-center justify-center">
          <span 
            className="text-[#8B5CF6]/60 font-medium tracking-[0.5em] text-[8px] md:text-[10px] uppercase mb-3 opacity-0 animate-[fadeSlideDown_1s_ease-out_0.6s_forwards]"
          >
            Featuring
          </span>
          
          <h1 
            className="text-white font-black uppercase text-3xl md:text-5xl lg:text-7xl opacity-0 animate-[elegantReveal_1.2s_cubic-bezier(0.2,0.8,0.2,1)_1s_forwards]"
          >
            Sayed Hasan Dipto
          </h1>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes elegantReveal {
          0% { opacity: 0; transform: translateY(20px) scale(0.95); filter: blur(10px); color: rgba(255,255,255,0); text-shadow: 0 0 0px #8B5CF6; }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); color: #8B5CF6; text-shadow: 0 0 30px rgba(139, 92, 246,0.2); }
        }
      `}</style>
    </div>
  );
}


