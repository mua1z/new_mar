import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Users, Lightbulb, Target, ShieldCheck } from 'lucide-react';

const Competencies: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { name: t.competencies.admin, icon: <ShieldCheck size={36} />, color: 'from-[#1e3a8a] to-[#2563eb]', delay: 0 },
    { name: t.competencies.community, icon: <Users size={36} />, color: 'from-[#065f46] to-[#059669]', delay: 0.15 },
    { name: t.competencies.conflict, icon: <Target size={36} />, color: 'from-[#1e3a8a] to-[#6366f1]', delay: 0.3 },
    { name: t.competencies.strategic, icon: <Lightbulb size={36} />, color: 'from-[#b45309] to-[#f59e0b]', delay: 0.45 },
  ];

  return (
    <section id="competencies" className="py-28 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-[#2563eb] border border-blue-100 mb-5">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5">{t.competencies.title}</h2>
          <div className="w-16 h-1.5 bg-[#059669] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: skill.delay, duration: 0.6 }}
              whileHover={{ y: -12, rotateY: 5, scale: 1.03 }}
              style={{ transformPerspective: 600 }}
              className="group flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.07)] border border-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                {skill.icon}
              </div>

              <h3 className="font-black text-[#1e3a8a] text-base leading-tight mb-3">{skill.name}</h3>

              {/* Animated underline */}
              <div className={`h-1 rounded-full bg-gradient-to-r ${skill.color} w-0 group-hover:w-12 transition-all duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;