import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import SectionLabel from "./SectionLabel.jsx";
import { socials } from "../data/socials.js";

const spring = { type: "spring", stiffness: 150, damping: 22, mass: 0.7 };

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1680px] px-5 py-28 sm:px-8 lg:px-12"
    >
      <SectionLabel index="04" label="Contact" kicker="Connections" />
      <div className="grid gap-4">
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={spring}
          className="border border-divider bg-surface p-6 md:p-8"
        >
          <p className="mb-8 text-xs uppercase leading-none text-muted">
            // EMAIL
          </p>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="mb-4 text-4xl font-semibold leading-none text-crisp md:text-6xl">
                Say Hello
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Have a project in mind, a question, or just want to chat? Drop
                me a message.
              </p>
            </div>
            <a
              href="mailto:KRASHITOS96420@GMAIL.COM"
              className="inline-flex items-center gap-3 text-sm uppercase text-crisp transition-opacity duration-300 hover:opacity-70"
            >
              <Mail size={17} strokeWidth={1.7} />
              KRASHITOS96420@GMAIL.COM
            </a>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: 0.05 }}
          className="border border-divider bg-surface p-6 md:p-8"
        >
          <p className="mb-8 text-xs uppercase leading-none text-muted">
            // SOCIALS
          </p>
          <h2 className="mb-6 text-4xl font-semibold leading-none text-crisp md:text-6xl">
            Find Me Online
          </h2>
          <div className="space-y-2">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="grid gap-2 border border-divider bg-obsidian px-4 py-4 text-sm transition-opacity duration-300 hover:opacity-70 sm:grid-cols-[1fr_1fr_auto] sm:items-center"
              >
                <span className="font-medium text-crisp">{social.platform}</span>
                <span className="text-muted">{social.handle}</span>
                <span className="text-right text-crisp">→</span>
              </a>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...spring, delay: 0.1 }}
          className="border border-divider bg-surface p-6 md:p-8"
        >
          <p className="mb-8 text-xs uppercase leading-none text-muted">
            // RESUME
          </p>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="mb-4 text-4xl font-semibold leading-none text-crisp md:text-6xl">
                Download My CV
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted">
                Get a detailed overview of my skills, experience, and projects.
              </p>
            </div>
            <a
              href="/Atharva_Shinde_CV.txt"
              download
              className="inline-flex items-center justify-center gap-3 bg-crisp px-6 py-4 text-sm font-semibold uppercase text-obsidian transition-opacity duration-300 hover:opacity-70"
            >
              <Download size={17} strokeWidth={2} />
              DOWNLOAD CV
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
