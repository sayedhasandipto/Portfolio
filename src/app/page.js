"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Partners from "@/components/Partners";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FluidBackground from "@/components/FluidBackground";
import Preloader from "@/components/Preloader";
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <FluidBackground />
      
      {isLoading && (
        <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <PageWrapper>
          <Header />
          <main className="pt-20 dot-grid">
            <Hero />
            <Profile />
            <Stats />
            <Partners />
            <Experience />
            <Projects />
            <Process />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </PageWrapper>
      )}
    </>
  );
}
