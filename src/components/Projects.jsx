import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const mainProjects = [
  { name: 'ai-law-aid', date: '2026', link: 'https://github.com/Athility/ai-law-aid' },
  { name: 'spice_site', date: '2026', link: 'https://vercel.com/krashos-projects-a330b819' }
];

const secondaryProjects = [
  { name: 'sports-moments-ai', date: '2025', link: 'https://github.com/Athility' },
  { name: 'cinematiq-ai-shot-list', date: '2025', link: 'https://github.com/Athility' },
  { name: 'indoor-lighting-sim', date: '2025', link: 'https://github.com/Athility' },
  { name: 'student-resource-hub', date: '2025', link: 'https://github.com/Athility' }
];

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="py-32 px-8 max-w-6xl mx-auto border-t border-line">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold tracking-tight mb-16 text-primary">Selected Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {mainProjects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-surface border border-line p-10 md:p-14 rounded-md aspect-square flex flex-col justify-between overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex justify-between items-start relative z-10">
                <h3 className="text-3xl font-bold text-primary tracking-tight">{project.name}</h3>
                <ArrowUpRight className="text-muted group-hover:text-primary transition-colors" size={28} />
              </div>
              <span className="text-sm font-bold tracking-widest text-muted relative z-10">{project.date}</span>
              
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center mb-16">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="text-xs uppercase tracking-widest text-muted hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary font-bold"
          >
            {showMore ? 'Hide Modules' : 'Show More Modules'}
          </button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 pb-12">
                {secondaryProjects.map((project) => (
                  <motion.a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-surface border border-line p-8 rounded-md flex flex-col justify-between h-56"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-lg text-primary tracking-tight pr-4">{project.name}</h4>
                      <ArrowUpRight size={20} className="text-muted group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-muted">{project.date}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
