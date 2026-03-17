import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map, 
  Search, 
  ShieldCheck, 
  Building2, 
  HeartHandshake, 
  Zap, 
  GraduationCap, 
  Settings 
} from 'lucide-react';

const cards = [
  {
    id: 'b2b',
    title: 'B2B Partnership Pipeline',
    description: 'Institutional conversations with cafés, QSR operators, and wedding planners.',
    icon: Building2,
    details: 'April: 12 targeted meetings. May: 15 meetings with active follow-ups. June: 18 meetings and proposals shared. Goal: 45+ institutional conversations and a strong partnership pipeline.'
  },
  {
    id: 'digital',
    title: 'Website & Digital Infrastructure',
    description: 'Establishing a working digital ordering structure and steady incoming leads.',
    icon: Zap,
    details: 'April: Website improvements and internal coordination. May: B2B ordering flow tested. June: System stabilized with consistent order tracking.'
  },
  {
    id: 'brand',
    title: 'Brand Discovery (Social)',
    description: 'Cumulative brand discovery across platforms through structured campaigns.',
    icon: Search,
    details: 'April: 3 campaigns (120k reach). May: 3 additional campaigns (220k reach). June: 3 campaigns + creator collaborations (350k reach). Total goal: 600k+ reach.'
  },
  {
    id: 'reviews',
    title: 'Google Review Growth',
    description: 'Systematizing review generation to build localized authority and trust.',
    icon: ShieldCheck,
    details: 'April: 150 new reviews. May: 220 new reviews. June: 300 new reviews. Goal: 670+ verified customer reviews and stronger local credibility.'
  },
  {
    id: 'field',
    title: 'Field Execution & Store Coordination',
    description: 'Store quality monitoring and strengthening team communication.',
    icon: Map,
    details: 'April: 5 store visits for quality checks. May: 6 visits with operational feedback. June: 7 visits including follow-up and partner alignment.'
  },
  {
    id: 'wedding',
    title: 'Wedding Channel Development',
    description: 'Positioning as a premium gifting and catering option for the wedding market.',
    icon: HeartHandshake,
    details: 'April: 20 planner introductions and 8 meetings. May: Follow-ups and 6 proposal discussions. June: 3–5 event confirmations. Goal: ₹4L–₹8L seasonal event pipeline.'
  },
  {
    id: 'qcommerce',
    title: 'Quick Commerce Coordination',
    description: 'Optimizing presence on Blinkit and Zepto for faster readiness.',
    icon: Zap,
    details: 'April: Support onboarding for Blinkit and Zepto. May: Assist in listing preparation. June: Coordinate with internal team to accelerate execution.'
  },
  {
    id: 'operations',
    title: 'Operational Systems & ERP',
    description: 'Encouraging reporting discipline and better operational visibility.',
    icon: Settings,
    details: 'April: Understand current usage of Odoo. May: Help teams adopt systems more consistently. June: Encourage basic reporting and tracking discipline.'
  }
];

export default function DashboardGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-2 md:px-0">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isExpanded = expandedId === card.id;

        return (
          <motion.div
            key={card.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => setExpandedId(isExpanded ? null : card.id)}
            className={`cursor-pointer bg-white rounded-2xl p-5 md:p-6 border border-brand-beige shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${
              isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''
            }`}
          >
            <motion.div layout className="flex items-start gap-3 md:gap-4">
              <div className="p-2.5 md:p-3 bg-brand-beige/50 rounded-xl text-brand-teal shrink-0">
                <Icon size={20} md:size={24} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <motion.h3 layout className="text-base md:text-lg font-medium text-brand-charcoal mb-1 md:mb-2">
                  {card.title}
                </motion.h3>
                <motion.p layout className="text-xs md:text-sm text-brand-charcoal/70 leading-relaxed">
                  {card.description}
                </motion.p>
              </div>
            </motion.div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-brand-beige"
                >
                  <h4 className="text-[10px] font-semibold uppercase tracking-wider text-brand-brown mb-2 md:mb-3">
                    Execution Details
                  </h4>
                  <p className="text-xs md:text-sm text-brand-charcoal/80 leading-relaxed">
                    {card.details}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
