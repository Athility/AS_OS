import { motion } from "framer-motion";
import { Box, Gamepad2, Music2, PenLine } from "lucide-react";
import AudioPlayer from "./AudioPlayer.jsx";
import SectionLabel from "./SectionLabel.jsx";

const interests = [
  {
    title: "PC Gaming",
    copy: "Systems, reflex, atmosphere, and the satisfaction of mastering complex worlds.",
    Icon: Gamepad2,
    image: "/media/gaming.jpg",
  },
  {
    title: "Cubing",
    copy: "Pattern recognition, speed, algorithmic thinking, and calm repetition under pressure.",
    Icon: Box,
    image: "/media/cubing.jpg",
  },
  {
    title: "Sketching",
    copy: "Visual observation translated into quiet studies of form, proportion, and texture.",
    Icon: PenLine,
    image: "/media/sketching.jpg",
  },
  {
    title: "Pop Culture Enthusiast",
    copy: "Films, music, games, internet culture, and the references that shape modern taste.",
    Icon: Music2,
    image: "/media/popculture.jpg",
  },
];

const spring = { type: "spring", stiffness: 110, damping: 20, mass: 0.7 };

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1680px] px-5 py-28 sm:px-8 lg:px-12"
    >
      <SectionLabel index="02" label="About" kicker="Interests + Audio" />
      <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={spring}
            className="max-w-4xl text-4xl font-semibold leading-tight text-crisp md:text-5xl lg:text-6xl"
          >
            Driven by a profound passion for new technologies and continuous
            innovation.
          </motion.h2>
        </div>
        <div className="space-y-4">
          {interests.map(({ title, copy, Icon, image }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ...spring, delay: index * 0.05 }}
              className="flex flex-col gap-6 border-t border-divider py-5 sm:flex-row sm:items-center"
            >
              {/* Image holder with interactive cover image */}
              <div className="aspect-[16/10] w-full shrink-0 overflow-hidden border border-divider bg-surface sm:w-72">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover grayscale brightness-[0.8] transition-all duration-700 ease-out hover:scale-105 hover:grayscale-0 hover:brightness-100"
                />
              </div>
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <Icon size={19} strokeWidth={1.8} className="text-crisp" />
                  <h3 className="text-xl font-semibold leading-none text-crisp">
                    {title}
                  </h3>
                </div>
                <p className="max-w-xl text-[15px] leading-7 text-muted">{copy}</p>
              </div>
            </motion.article>
          ))}
          <div className="pt-8">
            <AudioPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}
