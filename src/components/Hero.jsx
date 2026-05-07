import { motion } from 'framer-motion';
import { 
  Code2, Terminal, Database, FileJson, Layers, 
  Monitor, Cpu, Box, Image, Video, PenTool, LayoutTemplate, Network
} from 'lucide-react';

const techStack = [
  { category: "Programming", items: [
    { name: "Python", icon: Terminal },
    { name: "C / C++", icon: Code2 },
    { name: "Java", icon: Code2 }
  ]},
  { category: "Web Development", items: [
    { name: "HTML", icon: LayoutTemplate },
    { name: "CSS", icon: LayoutTemplate },
    { name: "JavaScript", icon: FileJson },
    { name: "React", icon: Box },
    { name: "Node.js", icon: Network },
    { name: "Express.js", icon: Network },
    { name: "MongoDB", icon: Database },
    { name: "Tailwind CSS", icon: Layers }
  ]},
  { category: "AI & Machine Learning", items: [
    { name: "Pandas", icon: Database },
    { name: "NumPy", icon: Box },
    { name: "Seaborn", icon: Image },
    { name: "Scikit-learn", icon: Cpu },
    { name: "Jupyter", icon: Terminal }
  ]},
  { category: "Tools", items: [
    { name: "AutoCAD", icon: PenTool },
    { name: "Blender", icon: Box },
    { name: "Canva", icon: Image },
    { name: "Davinci", icon: Video }
  ]},
  { category: "IDE", items: [
    { name: "VS Code", icon: Monitor },
    { name: "Antigravity", icon: Cpu }
  ]}
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-40 pb-20 px-8 max-w-6xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight text-primary">
          Welcome to AS_OS.<br />
          <span className="text-muted">I am Atharva Shinde,<br />a FY AI&DS Student at SAKEC.</span>
        </h1>
      </motion.div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {techStack.map((group, i) => (
          <motion.div 
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: i * 0.1 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-xs font-bold tracking-widest text-muted uppercase">{group.category}</h3>
            <div className="flex flex-col gap-3">
              {group.items.map(item => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.name}
                    whileHover={{ scale: 1.02, backgroundColor: '#1a1a1a', zIndex: 10 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="bg-surface border border-line p-4 rounded-md flex items-center gap-4 cursor-default relative origin-left"
                  >
                    <Icon size={18} className="text-muted" />
                    <span className="text-sm font-medium text-primary">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
