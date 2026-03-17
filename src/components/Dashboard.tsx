import { motion } from 'motion/react';
import DashboardGrid from './DashboardGrid';
import Timeline from './Timeline';
import ImpactVisualization from './ImpactVisualization';
import Philosophy from './Philosophy';
import NavigationHeader from './NavigationHeader';
import Hero from './Hero';

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="min-h-screen pb-20 md:pb-32"
    >
      <NavigationHeader />
      
      <main className="max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-32 space-y-24 md:space-y-40">
        <Hero />

        <section id="initiatives">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12 px-2 md:px-0"
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-teal mb-4">Key Initiatives</h2>
            <p className="text-sm md:text-base text-brand-charcoal/70 max-w-2xl leading-relaxed">
              Core operational areas requiring immediate focus to establish distribution, build trust, and streamline systems.
            </p>
          </motion.div>
          <DashboardGrid />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex flex-col items-center"
          >
            <a 
              href="/Q2 Growth Commitments.pdf" 
              download
              className="group flex items-center gap-3 bg-brand-teal text-brand-cream px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-teal/20"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform group-hover:-translate-y-0.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download Q2 Growth Commitments (PDF)
            </a>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-medium">
              Full strategy report for the founder
            </p>
          </motion.div>
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="impact">
          <ImpactVisualization />
        </section>

        <section id="philosophy">
          <Philosophy />
        </section>

        <section id="commitment" className="pt-12 border-t border-brand-beige px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-teal p-8 md:p-12 rounded-[2rem] text-center text-brand-cream"
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Our Commitment</h2>
            <p className="text-sm md:text-lg text-brand-cream/80 max-w-2xl mx-auto leading-relaxed mb-8">
              "Stay consistent, stay practical, and gradually build systems that make growth easier for the team. These commitments are realistic for the next three months and we are ready to begin execution immediately."
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 pt-8 border-t border-brand-cream/10">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Prepared By</p>
                <p className="font-display font-medium">Divyanshu & Lakshya</p>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-brand-cream/20"></div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Status</p>
                <p className="font-display font-medium">Pre-Series A • Scaling Phase</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="mt-24 py-12 text-center border-t border-brand-beige">
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-charcoal/40">
          1.5 Degree • Natturz Bio Kontrol Pvt. Ltd. • Delhi NCR
        </p>
      </footer>
    </motion.div>
  );
}
