import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const impacts = [
  {
    category: 'Brand Discovery',
    progression: ['120k reach', '220k reach', '600k+ cumulative'],
    metric: 'Social Reach'
  },
  {
    category: 'Google Reviews',
    progression: ['150 reviews', '370 reviews', '670+ verified'],
    metric: 'Trust Signals'
  },
  {
    category: 'Wedding Pipeline',
    progression: ['20 intros', '6 proposals', '₹4L–₹8L pipeline'],
    metric: 'Event Revenue'
  },
  {
    category: 'B2B Partnerships',
    progression: ['12 meetings', '27 meetings', '45+ conversations'],
    metric: 'Institutional Growth'
  }
];

export default function ImpactVisualization() {
  return (
    <div className="px-2 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-teal mb-4">Growth Impact</h2>
        <p className="text-sm md:text-base text-brand-charcoal/70 max-w-2xl leading-relaxed">
          How small, consistent improvements compound into significant scale over time.
        </p>
      </motion.div>

      <div className="space-y-4 md:space-y-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={impact.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl p-5 md:p-6 border border-brand-beige shadow-sm"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
              <div className="md:w-1/4">
                <h3 className="text-sm md:text-base font-medium text-brand-charcoal">{impact.category}</h3>
                <p className="text-[10px] text-brand-brown uppercase tracking-wider mt-1">{impact.metric}</p>
              </div>
              
              <div className="flex-1 flex items-center justify-between md:justify-start md:gap-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {impact.progression.map((step, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-8 shrink-0">
                    <div className={`text-xs md:text-sm font-medium ${i === 2 ? 'text-brand-teal md:text-base font-bold' : 'text-brand-charcoal/60'}`}>
                      {step}
                    </div>
                    {i < 2 && (
                      <ArrowRight className="text-brand-beige w-3 h-3 md:w-5 md:h-5" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
