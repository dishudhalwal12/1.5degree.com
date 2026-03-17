import { motion } from 'motion/react';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section className="pt-12 md:pt-20 pb-20 md:pb-32 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl px-4"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-brand-teal/5 text-brand-teal text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
          Strategic Growth Plan • March 2026
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-brand-teal mb-6 md:mb-8 leading-[1.1]">
          Making 1.5° <br className="hidden md:block" />
          Impossible to Ignore
        </h1>
        
        <div className="text-xl md:text-4xl font-medium text-brand-charcoal/90 tracking-tight mb-8">
          We will build stronger <Typewriter />
        </div>

        <p className="text-sm md:text-base text-brand-charcoal/60 max-w-2xl mx-auto leading-relaxed">
          Designed to grow institutional revenue, build brand visibility, and establish 1.5 Degree as Delhi NCR's leading plant-based gelato brand.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 md:mt-20"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-brown font-semibold">Scroll to explore blueprint</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-brand-teal to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
