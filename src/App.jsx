import { useEffect } from "react";
import Lenis from "lenis";
import About from "./components/About.jsx";
import BootSequence from "./components/BootSequence.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import CustomCursor from "./components/CustomCursor.jsx";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Block scrolling during the 1050ms boot sequence animation
    lenis.stop();
    const timer = setTimeout(() => {
      lenis.start();
    }, 1050);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-crisp">
      <CustomCursor />
      <BootSequence />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="mx-auto max-w-[1680px] px-5 pb-10 text-xs uppercase text-muted sm:px-8 lg:px-12">
        <div className="border-t border-divider pt-5">© AS_OS // Atharva Shinde</div>
      </footer>
    </div>
  );
}
