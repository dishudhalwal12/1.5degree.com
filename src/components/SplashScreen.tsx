import { motion } from 'motion/react';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-cream p-6 overflow-hidden"
    >
      {/* Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 opacity-20"
      >
        <div className="w-full h-full bg-brand-teal rounded-full blur-3xl"></div>
      </motion.div>
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 opacity-20"
      >
        <div className="w-full h-full bg-brand-yellow rounded-full blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-brand-teal">
            1.5 Degree
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-medium text-brand-charcoal/90 tracking-tight">
            Growth Execution Blueprint
          </h2>
          <p className="text-lg md:text-xl text-brand-brown font-medium italic opacity-80">
            "90 days of focused execution."
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={onEnter}
            className="group relative px-12 py-4 bg-brand-teal text-brand-cream rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-teal/20"
          >
            <span className="relative z-10">Enter</span>
            <motion.div 
              className="absolute inset-0 bg-brand-charcoal"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
