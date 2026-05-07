import { motion } from "framer-motion";
import { Box, Code2, Cpu, Monitor, Wrench } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { techStack } from "../data/techStack.js";

const categoryIcons = {
  Programming: Code2,
  "Web Development": Monitor,
  "AI & Machine Learning": Cpu,
  Tools: Wrench,
  IDE: Box,
};

const cardSpring = { type: "spring", stiffness: 240, damping: 22, mass: 0.6 };

export default function TechStack() {
  return (
    <div className="pt-28">
      <SectionLabel index="01" label="Technology Stack" kicker="Core Tools" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Object.entries(techStack).map(([category, items]) => {
          const Icon = categoryIcons[category];
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
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-t border-divider/80 pt-3 text-[15px] font-medium text-muted transition-colors duration-300 hover:text-crisp"
                  >
                    <Icon size={18} strokeWidth={1.8} className="text-crisp" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
