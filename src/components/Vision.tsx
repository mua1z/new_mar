import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { CheckCircle2 } from 'lucide-react';

const Vision: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    t.vision.transparency,
    t.vision.accountability,
    t.vision.inclusiveness,
  ];

  const mission = [
    "Digital governance reform.",
    "Promoting sustainable development.",
    "Fostering civic engagement."
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-b from-slate-50 to-blue-50/50 relative">
      <div className="container mx-auto px-6">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gov-blue mb-4">{t.vision.title}</h2>
          <div className="w-12 h-1.5 bg-gov-accent mx-auto rounded-full mb-8"></div>
          <p className="text-base text-center text-gov-muted max-w-2xl mx-auto mb-10 leading-relaxed max-w-xl mx-auto">
            A fully dedicated public servant ensuring transparency, inclusive policy-making, and impactful institutional reforms.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-card border border-slate-100/50 p-8 hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto border-t-4 border-t-gov-accent overflow-hidden relative"
        >
          {/* Faint watermark icon */}
          <div className="absolute -right-20 -top-20 opacity-5 w-64 h-64 text-gov-primary pointer-events-none">
            <CheckCircle2 className="w-full h-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10 p-4 md:p-8">

            {/* Vision Column */}
            <div>
              <h3 className="text-2xl font-black text-gov-blue mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                Our Vision
              </h3>
              <ul className="space-y-4">
                {values.map((v, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100"
                  >
                    <CheckCircle2 className="text-gov-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-gov-text font-bold text-[15px]">{v}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Mission Column */}
            <div>
              <h3 className="text-2xl font-black text-gov-blue mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                Strategic Mission
              </h3>
              <ul className="space-y-4">
                {mission.map((m, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100"
                  >
                    <CheckCircle2 className="text-gov-primary shrink-0 mt-0.5" size={20} />
                    <span className="text-gov-text font-bold text-[15px]">{m}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Vision;