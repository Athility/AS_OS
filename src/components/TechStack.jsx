import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel.jsx";
import { techStack } from "../data/techStack.js";
import {
  Terminal,
  Cpu,
  Coffee,
  Code,
  Layers,
  Zap,
  Atom,
  Server,
  Activity,
  Database,
  Wind,
  Table2,
  Grid,
  LineChart,
  Brain,
  BookOpen,
  Compass,
  Shapes,
  Palette,
  Film,
  Braces,
  Orbit
} from "lucide-react";

// Specific icon mapping for each individual tech stack keyword
const itemIcons = {
  // Programming
  Python: Terminal,
  "C / C++": Cpu,
  Java: Coffee,

  // Web Development
  HTML: Code,
  CSS: Layers,
  JavaScript: Zap,
  React: Atom,
  "Node.js": Server,
  "Express.js": Activity,
  MongoDB: Database,
  "Tailwind CSS": Wind,

  // AI & Machine Learning
  Pandas: Table2,
  NumPy: Grid,
  Seaborn: LineChart,
  "Scikit-learn": Brain,
  Jupyter: BookOpen,

  // Tools
  AutoCAD: Compass,
  Blender: Shapes,
  Canva: Palette,
  Davinci: Film,

  // IDE
  "VS Code": Braces,
  Antigravity: Orbit,
};

const cardSpring = { type: "spring", stiffness: 240, damping: 22, mass: 0.6 };

export default function TechStack() {
  return (
    <div className="pt-28">
      <SectionLabel index="01" label="Technology Stack" kicker="Core Tools" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Object.entries(techStack).map(([category, items]) => {
          return (
            <motion.article
              key={category}
              whileHover={{
                y: -8,
                scale: 1.025,
                rotateX: 1.5,
                rotateY: -1.5,
              }}
              transition={cardSpring}
              style={{ transformPerspective: 900 }}
              className="min-h-[280px] border border-divider bg-surface p-5 shadow-matte"
            >
              <div className="mb-12 flex items-center justify-between gap-4">
                <h2 className="text-base font-bold tracking-wider uppercase leading-none text-crisp">
                  {category}
                </h2>
                <span className="text-sm font-medium text-muted">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-4">
                {items.map((item) => {
                  const Icon = itemIcons[item] || Code;
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-t border-divider/80 pt-3 text-[15px] font-medium text-muted transition-colors duration-300 hover:text-crisp"
                    >
                      <Icon size={18} strokeWidth={1.8} className="text-crisp" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
