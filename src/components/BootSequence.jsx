import { motion } from 'framer-motion';

export default function BootSequence({ onComplete }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-base pointer-events-none overflow-hidden">
      <motion.div
        className="w-full bg-primary"
        initial={{ height: '2px', scaleX: 0, opacity: 1 }}
        animate={{ 
          scaleX: [0, 1, 1],
          height: ['2px', '2px', '100vh'],
          opacity: [1, 1, 0]
        }}
        transition={{ 
          duration: 1.5,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
        onAnimationComplete={onComplete}
      />
    </div>
  );
}
