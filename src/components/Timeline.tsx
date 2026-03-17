import { motion } from 'motion/react';

const timelineData = [
  {
    month: 'April',
    items: [
      '12 B2B targeted meetings',
      '150 new Google reviews',
      'Website improvements',
      '20 Wedding planner intros',
      '5 store quality checks'
    ]
  },
  {
    month: 'May',
    items: [
      '15 B2B follow-up meetings',
      '220 new Google reviews',
      'B2B ordering flow testing',
      '6 Wedding proposal discussions',
      'Odoo system adoption push'
    ]
  },
  {
    month: 'June',
    items: [
      '18 B2B proposal shares',
      '300 new Google reviews',
      '350k brand discovery reach',
      '3–5 Wedding event confirmations',
      'Basic reporting discipline'
    ]
  }
];

export default function Timeline() {
  return (
    <div className="px-2 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-teal mb-4">Execution Timeline</h2>
        <p className="text-sm md:text-base text-brand-charcoal/70 max-w-2xl leading-relaxed">
          A structured 90-day sprint focusing on compounding actions. Execution begins March 20th, leveraging the SRCC Crossroads festival.
        </p>
      </motion.div>

      <div className="relative border-l border-brand-beige ml-2 md:ml-8 space-y-16 md:y-24">
        {timelineData.map((phase, index) => (
          <motion.div 
            key={phase.month}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-6 md:pl-16"
          >
            {/* Node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-cream border-2 border-brand-teal ring-4 ring-brand-cream"></div>
            
            <h3 className="text-xl md:text-2xl font-display font-medium text-brand-teal mb-6 md:mb-8">{phase.month}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {phase.items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                  className="bg-white p-3 md:p-4 rounded-xl border border-brand-beige shadow-sm flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-brown/50 shrink-0"></div>
                  <span className="text-brand-charcoal/80 text-xs md:text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
