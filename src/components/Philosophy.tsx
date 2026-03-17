import { motion } from 'motion/react';

const principles = [
  {
    title: 'Distribution before marketing',
    description: 'Ensure the product is easily accessible before driving demand. Visibility on shelves and platforms precedes ad spend.'
  },
  {
    title: 'Consistency before scale',
    description: 'Nail the unit economics and operational flow at a small scale before attempting to multiply it.'
  },
  {
    title: 'Systems before complexity',
    description: 'Build robust, documented processes for every repeatable action. Rely on systems, not individual heroics.'
  }
];

export default function Philosophy() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-brand-teal mb-8 tracking-tighter">Our Philosophy</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-brand-charcoal leading-tight">{principle.title}</h3>
              <p className="text-lg text-brand-charcoal/60 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-brand-yellow rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-bold text-brand-charcoal mb-8 tracking-tighter">Execution beats ideas.</h2>
            <p className="text-xl md:text-2xl text-brand-charcoal/70 max-w-3xl mx-auto leading-relaxed">
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
