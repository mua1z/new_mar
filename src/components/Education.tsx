import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      title: t.education.masters,
      subtitle: 'Haramaya University',
      icon: <GraduationCap size={28} />,
      bgIcon: 'bg-[#2563eb]',
      tags: ['Public Policy', 'Leadership', 'Administration'],
      year: '2018',
    },
    {
      title: t.education.bsc,
      subtitle: 'Haramaya University',
      icon: <GraduationCap size={28} />,
      bgIcon: 'bg-[#059669]',
      tags: ['Management', 'Civics', 'Planning'],
      year: '2013',
    }
  ];

  return (
    <section id="education" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-50 text-[#059669] border border-emerald-100 mb-5">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5">{t.education.title}</h2>
          <div className="w-16 h-1.5 bg-[#059669] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {items.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{
                y: -8,
                boxShadow: '0 30px 60px -10px rgba(0,0,0,0.10)',
                rotateX: -1,
              }}
              style={{ transformPerspective: 800 }}
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-start gap-6"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg ${edu.bgIcon}`}>
                {edu.icon}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-black text-[#1e3a8a]">{edu.title}</h3>
                  <span className="inline-block bg-slate-100 text-slate-600 text-xs font-black px-3 py-1.5 rounded-full">
                    Graduated {edu.year}
                  </span>
                </div>
                <p className="text-[#64748b] font-semibold mb-5">{edu.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-[#2563eb] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;