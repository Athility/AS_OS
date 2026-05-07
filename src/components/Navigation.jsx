import { motion } from 'framer-motion';

export default function Navigation() {
  const links = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 px-8 py-6 mix-blend-difference bg-gradient-to-b from-base/50 to-transparent backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center text-sm tracking-widest font-semibold uppercase">
        <a href="#home" className="hover:opacity-70 transition-opacity text-primary">AS_OS</a>
        <div className="flex gap-8">
          {links.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-70 transition-opacity text-primary"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
