import About from "./components/About.jsx";
import BootSequence from "./components/BootSequence.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-crisp">
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
