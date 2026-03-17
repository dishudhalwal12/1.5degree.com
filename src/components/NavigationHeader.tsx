import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';

export default function NavigationHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-brand-cream/80 backdrop-blur-md border-b border-brand-beige' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
          <span className="font-display font-medium text-brand-teal tracking-tight">1.5 Degree</span>
          <span className="text-brand-charcoal/40 mx-2">/</span>
          <span className="text-sm text-brand-charcoal/60">Growth Blueprint</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-charcoal/60">
          <a href="#initiatives" className="hover:text-brand-teal transition-colors">Initiatives</a>
          <a href="#timeline" className="hover:text-brand-teal transition-colors">Timeline</a>
          <a href="#impact" className="hover:text-brand-teal transition-colors">Impact</a>
          <a href="#philosophy" className="hover:text-brand-teal transition-colors">Philosophy</a>
        </nav>
      </div>
    </motion.header>
  );
}
