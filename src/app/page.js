import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <div className="relative dark-canvas white-grid">
          <About />
          <div className="px-4 sm:px-8 lg:px-12">
            <div className="dark-divider" />
          </div>
          <Stack />
          <div className="px-4 sm:px-8 lg:px-12">
            <div className="dark-divider" />
          </div>
          <Work />
          <div className="absolute inset-x-0 bottom-0 h-24 fade-to-paper pointer-events-none z-0" />
        </div>
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

