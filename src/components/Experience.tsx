import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Briefcase, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t.experience.haramaya,
      period: t.experience.haramayaYears,
      desc: t.experience.haramayaDesc,
      current: true,
      tag: 'Current',
    },
    {
      role: t.experience.fedis,
      period: t.experience.fedisYears,
      desc: t.experience.fedisDesc,
      current: false,
      tag: 'Previous',
    }
  ];

  return (
    <section id="experience" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-[#2563eb] border border-blue-100 mb-5">
            Career Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5">{t.experience.title}</h2>
          <div className="w-16 h-1.5 bg-[#059669] mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 w-full order-first lg:order-none mb-8 lg:mb-0"
          >
            <motion.div
              whileHover={{ y: -8, rotateY: -3 }}
              style={{ transformPerspective: 800 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/hero-bg.jpg"
                  alt="Merawan at office"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-black text-lg">Community Leadership</span>
                  <p className="text-blue-200 text-sm mt-1">Serving Haramaya Woreda</p>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {['Public Service', 'Governance', 'Strategy'].map((tag) => (
                    <span key={tag} className="text-xs font-bold text-[#2563eb] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <div className="lg:w-7/12 relative pl-10">
            {/* Vertical line */}
            <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-[#059669] via-[#2563eb] to-slate-200 rounded-full" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  whileHover={{ x: 6, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.10)' }}
                  className="relative bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] p-8 transition-all duration-300"
                >
                  {/* Dot */}
                  <div className={`absolute -left-[2.6rem] top-8 w-5 h-5 rounded-full border-4 border-white shadow-md ${exp.current ? 'bg-[#059669]' : 'bg-slate-300'}`} />

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563eb] shrink-0">
                        <Briefcase size={20} />
                      </div>
                      <h3 className="text-xl font-black text-[#1e3a8a]">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 flex-wrap">
                      <span className="text-xs font-black tracking-wider text-[#64748b] bg-slate-100 px-3 py-1.5 rounded-lg">{exp.period}</span>
                      <span className={`${exp.current ? 'text-[#059669] bg-emerald-50 border-emerald-200' : 'text-slate-500 bg-slate-50 border-slate-200'} text-[10px] font-black px-2.5 py-1 rounded-full border`}>{exp.tag}</span>
                    </div>
                  </div>

                  <p className="text-[#64748b] leading-relaxed text-[15px]">{exp.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#2563eb] group cursor-pointer">
                    <span>View Details</span>
                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
