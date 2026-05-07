import { useState } from 'react';
import BootSequence from './components/BootSequence';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="bg-base min-h-screen text-primary selection:bg-primary selection:text-base">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      
      <div 
        className={`${
          booted ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'
        } transition-opacity duration-1000 ease-in-out`}
      >
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="py-12 text-center text-xs font-bold tracking-widest uppercase text-muted border-t border-line mt-20">
          © {new Date().getFullYear()} Atharva Shinde. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
