import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const principles = [
  {
    title: 'Distribution before marketing',
    description: 'Ensure the product is easily accessible before driving demand. Visibility on shelves and platforms precedes ad spend.',
    image: '/philosophy-1.png'
  },
  {
    title: 'Consistency before scale',
    description: 'Nail the unit economics and operational flow at a small scale before attempting to multiply it.',
    image: '/philosophy-2.png'
  },
  {
    title: 'Systems before complexity',
    description: 'Build robust, documented processes for every repeatable action. Rely on systems, not individual heroics.',
    image: '/philosophy-3.png'
  }
];

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % principles.length);
    }, 4700); // Snappier, more dynamic pace
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-7xl font-medium text-brand-teal mb-6 md:mb-8 tracking-tight">Our Philosophy</h2>
          <p className="text-sm md:text-lg text-brand-charcoal/60 max-w-2xl leading-relaxed">
            The fundamental principles that guide our 90-day execution sprint and long-term brand building.
          </p>
        </motion.div>

        {/* Desktop Luxury Typographic Layout */}
        <div className="hidden md:block mb-40 relative min-h-[600px] flex flex-col justify-center overflow-hidden rounded-[3rem] bg-brand-yellow/5 p-16 lg:p-24">
          {/* Subtle Living Background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-[100px] pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative z-10 grid grid-cols-12 gap-12 items-center"
            >
              <div className="col-span-12 lg:col-span-9 space-y-12">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xs font-bold uppercase tracking-[0.4em] text-[#C5A059]"
                  >
                    Principle {String(activeIndex + 1).padStart(2, '0')}
                  </motion.div>
                  
                  <div className="overflow-hidden">
                    <motion.h3 
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="text-3xl md:text-7xl font-medium text-brand-teal leading-[1.1] tracking-tighter"
                    >
                      {principles[activeIndex].title}
                    </motion.h3>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="text-xl md:text-2xl text-brand-charcoal/70 leading-relaxed max-w-2xl font-medium"
                >
                  {principles[activeIndex].description}
                </motion.p>
              </div>

              {/* Decorative Gold Index */}
              <div className="hidden lg:block lg:col-span-3 text-right">
                <span className="text-[14rem] font-bold text-[#C5A059]/10 leading-none select-none">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Progress Indicators */}
          <div className="absolute bottom-16 left-16 right-16 flex gap-4 h-0.5">
            {principles.map((_, i) => (
              <div key={i} className="flex-1 h-full bg-brand-charcoal/5 rounded-full overflow-hidden">
                {i === activeIndex && (
                  <motion.div 
                    layoutId="desktop-track"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4.7, ease: "linear" }}
                    className="h-full bg-[#C5A059]"
                  />
                )}
                {i < activeIndex && <div className="w-full h-full bg-[#C5A059]/30" />}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Luxury Typographic Layout */}
        <div className="md:hidden mb-24 relative min-h-[500px] flex flex-col justify-center overflow-hidden rounded-[2.5rem] bg-brand-yellow shadow-2xl p-8">
          {/* Living Background Elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-brand-charcoal/5 rounded-full blur-3xl pointer-events-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 space-y-10"
            >
              <div className="space-y-4">
                <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.2 }}
                   className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059]"
                >
                  Principle {String(activeIndex + 1).padStart(2, '0')}
                </motion.div>
                
                <div className="overflow-hidden">
                  <motion.h3 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl font-medium text-brand-charcoal leading-[1.15] tracking-tight"
                  >
                    {principles[activeIndex].title}
                  </motion.h3>
                </div>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-brand-charcoal/60 leading-relaxed font-medium"
              >
                {principles[activeIndex].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Minimalist Progress Track */}
          <div className="absolute bottom-10 left-8 right-8 flex gap-2">
            {principles.map((_, i) => (
              <div key={i} className="flex-1 h-[2px] bg-brand-charcoal/10 rounded-full overflow-hidden">
                {i === activeIndex && (
                  <motion.div 
                    layoutId="track"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4.7, ease: "linear" }}
                    className="h-full bg-[#C5A059]"
                  />
                )}
                {i < activeIndex && <div className="w-full h-full bg-[#C5A059]/40" />}
              </div>
            ))}
          </div>
        </div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-yellow rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden text-brand-charcoal"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-7xl font-medium mb-6 md:mb-8 tracking-tight leading-tight">Execution beats ideas.</h2>
            <p className="text-base md:text-xl text-brand-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              The goal is to consistently improve the systems supporting the brand. Focus on the work that brings real visibility, stronger partnerships, and better operational clarity.
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-brand-teal/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full translate-x-1/3 translate-y-1/3" />
        </motion.div>
      </div>
    </section>
  );
}
