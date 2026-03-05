import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Leaf, Building2, MonitorSmartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

type Card = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accent: string;
  tag: string;
  tagColor: string;
  highlights: string[];
};

const Initiatives: React.FC = () => {
  const { t } = useLanguage();

  const cards: Card[] = [
    {
      title: 'Digital Service Delivery',
      desc: 'Introducing technology-driven platforms to streamline public services, reduce bureaucratic delays, and improve residents\u2019 daily experiences.',
      icon: <MonitorSmartphone size={28} />,
      iconBg: 'bg-blue-50',
      iconColor: 'text-[#2563eb]',
      accent: 'border-t-[#2563eb]',
      tag: 'Technology',
      tagColor: 'text-[#2563eb] bg-blue-50 border-blue-100',
      highlights: ['Online civil registration', 'Digital complaint system', 'e-Government portal'],
    },
    {
      title: t.initiatives.development,
      desc: 'Empowering citizens through inclusive social programs, cooperatives, and locally-driven projects targeting sustainable growth.',
      icon: <Leaf size={28} />,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-[#059669]',
      accent: 'border-t-[#059669]',
      tag: 'Social Impact',
      tagColor: 'text-[#059669] bg-emerald-50 border-emerald-100',
      highlights: ['Youth empowerment', 'Women cooperatives', 'Poverty reduction'],
    },
    {
      title: 'Infrastructure Reform',
      desc: 'Developing roads, public utilities, and essential facilities while enforcing transparent procurement processes and accountability.',
      icon: <Building2 size={28} />,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      accent: 'border-t-indigo-500',
      tag: 'Infrastructure',
      tagColor: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      highlights: ['Road & utility upgrades', 'Public facility access', 'Transparent tendering'],
    },
  ];

  return (
    <section id="initiatives" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-emerald-50 text-[#059669] border border-emerald-100 mb-5 tracking-wide">
            Key Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5">{t.initiatives.title}</h2>
          <div className="w-16 h-1.5 bg-[#059669] mx-auto rounded-full mb-8" />
          <p className="text-[#64748b] max-w-2xl mx-auto text-lg leading-relaxed">
            Driving community transformation through measurable, accountable, and citizen-centered programs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`group bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border-t-4 ${card.accent}`}
            >
              {/* Card Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center shadow-sm`}>
                    {card.icon}
                  </div>
                  <span className={`text-xs font-black px-3 py-1.5 rounded-full border ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#1e3a8a] mb-3 group-hover:text-[#2563eb] transition-colors">{card.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{card.desc}</p>
              </div>

              {/* Highlights */}
              <div className="px-8 pb-6 flex-1">
                <div className="border-t border-slate-100 pt-6 space-y-3">
                  {card.highlights.map((h: string) => (
                    <div key={h} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className={card.iconColor} />
                      <span className="text-sm font-semibold text-[#334155]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-8 pb-8">
                <button className={`w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-black border-2 transition-all duration-300 group-hover:gap-4 ${card.iconColor} border-current hover:bg-slate-50`}>
                  View Initiative Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 mx-auto max-w-4xl grid grid-cols-3 divide-x divide-slate-200 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.07)] overflow-hidden"
        >
          {[
            { value: '15+', label: 'Active Initiatives', color: 'text-[#2563eb]' },
            { value: '50k+', label: 'Citizens Benefited', color: 'text-[#059669]' },
            { value: '98%', label: 'Completion Rate', color: 'text-indigo-600' },
          ].map((stat, i) => (
            <div key={i} className="py-8 px-6 text-center hover:bg-slate-50 transition-colors">
              <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm font-semibold text-[#64748b]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Initiatives;