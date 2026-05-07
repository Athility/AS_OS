import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

const interests = [
  { name: 'PC Gaming', text: 'Immersed in digital worlds.' },
  { name: 'Cubing', text: 'Solving puzzles with algorithms.' },
  { name: 'Sketching', text: 'Capturing ideas on paper.' },
  { name: 'Pop Culture Enthusiast', text: 'Analyzing narratives and media.' }
];

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const p = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(p || 0);
    }
  };

  return (
    <section id="about" className="py-32 px-8 max-w-6xl mx-auto border-t border-line mt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="text-3xl md:text-5xl font-medium tracking-tight mb-24 text-muted leading-tight">
          Driven by a profound passion for new technologies and continuous innovation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col gap-12">
            {interests.map((item, i) => (
              <motion.div 
                key={item.name} 
                className="flex items-center gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: i * 0.1 }}
              >
                <div className="w-24 h-24 bg-surface border border-line rounded-md shrink-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src={`/media/${item.name.toLowerCase().replace(/ /g, '-')}.jpg`} 
                    alt={item.name} 
                    className="w-full h-full object-cover opacity-60" 
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary tracking-tight">{item.name}</h4>
                  <p className="text-muted text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-start lg:justify-end">
            <motion.div 
              className="bg-surface border border-line p-8 rounded-md w-full max-w-md shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h4 className="text-xs tracking-widest text-muted uppercase mb-8 font-bold">// Now Playing</h4>
              <div className="flex items-center gap-6">
                <button 
                  onClick={togglePlay} 
                  className="w-14 h-14 rounded-full bg-primary text-base flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause size={20} className="fill-current" /> : <Play size={20} className="fill-current ml-1" />}
                </button>
                <div className="flex-grow">
                  <p className="text-base font-semibold mb-1 text-primary">Don't Stop 'Til You Get Enough</p>
                  <p className="text-sm text-muted mb-4">Michael Jackson</p>
                  <div className="h-1 bg-line rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Waveform Animation */}
              <div className="mt-8 flex justify-center gap-1.5 h-6 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-primary rounded-full opacity-50"
                    animate={{ 
                      height: isPlaying ? ['20%', '100%', '20%'] : '20%' 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.6 + (Math.random() * 0.5), 
                      delay: i * 0.05 
                    }}
                  />
                ))}
              </div>
              
              <audio 
                ref={audioRef} 
                src="/media/dont-stop.mp3" 
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
