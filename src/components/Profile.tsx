import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Quote, Award, Briefcase } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Profile: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: 'Years of Service', value: '10+', icon: <Briefcase size={20} /> },
    { label: 'Community Projects', value: '50+', icon: <Award size={20} /> },
  ];

  return (
    <section id="profile" className="py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative 3D floating shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-emerald-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-[#2563eb] border border-blue-100 mb-5">
            Leadership Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5">{t.profile.title}</h2>
          <div className="w-16 h-1.5 bg-[#059669] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-10 items-stretch"
        >
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
            className="lg:w-7/12 bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-2xl border border-slate-100 p-10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563eb]"><Quote size={16} /></span>
                Professional Biography
              </h3>
              <div className="space-y-5 text-[#64748b] leading-relaxed text-[15px] relative">
                <div className="absolute -top-4 -left-2 text-blue-100 opacity-30 pointer-events-none">
                  <Quote size={90} fill="currentColor" />
                </div>
                <p className="relative z-10">{t.profile.bio1}</p>
                <p className="relative z-10">{t.profile.bio2}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#2563eb] shrink-0">{s.icon}</div>
                  <div>
                    <div className="text-2xl font-black text-[#1e3a8a]">{s.value}</div>
                    <div className="text-xs text-[#64748b] font-medium">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="lg:w-5/12 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-3xl overflow-hidden relative shadow-2xl flex flex-col items-center justify-center p-10 text-center"
          >
            {/* Decorative rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-white/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-2 border-white/10" />

            <div className="relative z-10 w-44 h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden mb-8">
              <img
                src="/hero-bg.jpg"
                alt="Marewan Mohamed"
                className="w-full h-full object-cover object-center scale-150 -translate-y-4"
              />
            </div>
            <h3 className="relative z-10 text-2xl font-black text-white mb-2">{t.hero.name}</h3>
            <p className="relative z-10 text-sm text-blue-200 font-semibold mb-6">{t.hero.title}</p>

            <div className="relative z-10 flex flex-wrap justify-center gap-2">
              {['Public Service', 'Governance', 'Leadership'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded-full border border-white/20 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
