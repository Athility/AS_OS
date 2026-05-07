import { Mail, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const socials = [
    { name: 'LinkedIn', handle: 'atharva-shinde-b12b3b2a0', link: 'https://www.linkedin.com/in/atharva-shinde-b12b3b2a0' },
    { name: 'GitHub', handle: '@Athility', link: 'https://github.com/Athility' },
    { name: 'Instagram', handle: '@yor.mungndr', link: 'https://www.instagram.com/yor.mungndr' }
  ];

  return (
    <section id="contact" className="py-32 px-8 max-w-3xl mx-auto border-t border-line">
      <motion.div 
        className="flex flex-col gap-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        
        {/* Block 1: Email */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-muted mb-6">// EMAIL</h5>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">Say Hello</h3>
          <p className="text-muted text-base mb-8 max-w-md leading-relaxed">Have a project in mind, a question, or just want to chat? Drop me a message.</p>
          <a 
            href="mailto:KRASHITOS96420@GMAIL.COM"
            className="inline-flex items-center gap-4 bg-surface border border-line px-8 py-4 rounded-md hover:bg-[#1a1a1a] transition-colors text-sm font-semibold tracking-wide text-primary"
          >
            <Mail size={18} className="text-muted" />
            KRASHITOS96420@GMAIL.COM
          </a>
        </div>

        {/* Block 2: Socials */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-muted mb-6">// SOCIALS</h5>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 text-primary tracking-tight">Find Me Online</h3>
          <div className="flex flex-col gap-4">
            {socials.map(social => (
              <a 
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-surface border border-line p-6 rounded-md hover:bg-[#1a1a1a] transition-colors"
              >
                <div>
                  <p className="font-semibold text-base mb-1 text-primary">{social.name}</p>
                  <p className="text-sm text-muted">{social.handle}</p>
                </div>
                <ArrowRight size={20} className="text-muted group-hover:text-primary transition-colors group-hover:translate-x-2 duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Block 3: Resume */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-widest text-muted mb-6">// RESUME</h5>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">Download My CV</h3>
          <p className="text-muted text-base mb-8 max-w-md leading-relaxed">Get a detailed overview of my skills, experience, and projects.</p>
          <motion.a 
            href="/media/cv.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-3 bg-primary text-base px-10 py-5 rounded-md text-sm font-bold tracking-widest uppercase shadow-xl"
          >
            <Download size={18} />
            DOWNLOAD CV
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}
