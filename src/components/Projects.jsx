import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SectionLabel from "./SectionLabel.jsx";
import { mainProjects, secondaryProjects } from "../data/projects.js";

const spring = { type: "spring", stiffness: 130, damping: 20, mass: 0.8 };
const hoverSpring = { type: "spring", stiffness: 220, damping: 24, mass: 0.7 };

function MainProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -8, scale: 1.012 }}
      transition={hoverSpring}
      className="group flex min-h-[420px] flex-col justify-between border border-divider bg-surface p-6 text-crisp shadow-matte md:p-8"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="mb-4 text-xs uppercase leading-none text-muted">
            {project.eyebrow} // {project.date}
          </p>
          <h3 className="text-4xl font-semibold leading-none md:text-6xl">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight
          size={24}
          strokeWidth={1.7}
          className="text-muted transition-colors duration-300 group-hover:text-crisp"
        />
      </div>
      <div>
        <p className="mb-8 max-w-2xl text-lg leading-7 text-muted">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-divider px-3 py-2 text-xs uppercase text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function SecondaryProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -5, scale: 1.018 }}
      transition={hoverSpring}
      className="group min-h-60 border border-divider bg-surface p-5 text-crisp"
    >
      <div className="mb-16 flex items-center justify-between text-xs uppercase text-muted">
        <span>{project.date}</span>
        <ArrowUpRight
          size={17}
          strokeWidth={1.7}
          className="transition-colors duration-300 group-hover:text-crisp"
        />
      </div>
      <h3 className="mb-5 text-2xl font-semibold leading-tight">{project.name}</h3>
      <p className="text-sm leading-6 text-muted">{project.summary}</p>
    </motion.a>
  );
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1680px] px-5 py-28 sm:px-8 lg:px-12"
    >
      <SectionLabel index="03" label="Project Repositories" kicker="Selected Modules" />
      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        {mainProjects.map((project) => (
          <MainProjectCard key={project.name} project={project} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setShowMore((current) => !current)}
        className="mb-6 inline-flex items-center gap-2 text-sm uppercase text-muted transition-opacity duration-300 hover:opacity-70"
      >
        {showMore ? "Hide Modules" : "Show More Modules"}
        {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <AnimatePresence initial={false}>
        {showMore ? (
          <motion.div
            initial={{ opacity: 0, y: -18, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -18, height: 0 }}
            transition={spring}
            className="overflow-hidden"
          >
            <div className="grid gap-4 pt-2 md:grid-cols-2 xl:grid-cols-4">
              {secondaryProjects.map((project) => (
                <SecondaryProjectCard key={project.name} project={project} />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
