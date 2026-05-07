import { motion } from "framer-motion";
import TechStack from "./TechStack.jsx";

const spring = { type: "spring", stiffness: 78, damping: 18, mass: 0.8 };

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto min-h-screen max-w-[1680px] px-5 pb-24 pt-36 sm:px-8 lg:px-12 lg:pt-44"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={spring}
        className="grid min-h-[58vh] content-between gap-16"
      >
        <div className="max-w-7xl">
          <p className="mb-8 text-xs uppercase leading-none text-muted">
            © Personal Operating System // SAKEC
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] text-crisp sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Welcome to AS_OS. I am Atharva Shinde, an FY AI&amp;DS Student at
            SAKEC.
          </h1>
        </div>
        <div className="grid gap-6 border-t border-divider pt-5 text-sm text-muted md:grid-cols-[1fr_2fr]">
          <p>Focused on AI, development, visual tools, and useful systems.</p>
          <p>
            A minimal interface for projects, skills, interests, and ways to
            connect.
          </p>
        </div>
      </motion.div>
      <TechStack />
    </section>
  );
}
