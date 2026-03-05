import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { ChevronDown, ShieldCheck, Star, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({ target: containerRef as React.RefObject<HTMLElement> });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse-tracking 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-6, 6]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Particle positions (static so no re-render)
  const particles = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      yMove: -(Math.random() * 80 + 40),
    }))
  ).current;

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* === BACKGROUND IMAGE with parallax === */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-bg.jpg"
          alt="Marewan Mohamed in office"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#1e3a8a]/70 to-[#0f172a]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-[#0f172a]/30" />
      </motion.div>

      {/* === Floating Particles === */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/20"
            style={{ width: p.width, height: p.height, top: p.top, left: p.left }}
            animate={{ y: [0, p.yMove, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* === Animated grid overlay === */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* === Main Content with 3D tilt === */}
      <motion.div
        style={{ opacity, y: textY, rotateX, rotateY, transformPerspective: 1200 }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-bold tracking-wide text-blue-200 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
        >
          <ShieldCheck size={16} className="text-emerald-400" />
          {t.hero.title}
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Name with letter-by-letter animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight leading-none">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="inline-flex flex-wrap justify-center"
          >
            {t.hero.name.split('').map((char: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100 mb-12 leading-relaxed font-medium"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '50k+', label: 'Citizens Served' },
            { value: '15+', label: 'Initiatives Led' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(5,150,105,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/contact')}
            className="px-8 py-4 rounded-xl font-bold text-lg transition-all bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-900/40 inline-flex items-center justify-center gap-2"
          >
            <Globe size={20} />
            {t.hero.cta1}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/initiatives')}
            className="px-8 py-4 rounded-xl font-bold text-lg transition-all border-2 border-white/30 hover:border-white/60 bg-white/10 backdrop-blur-md text-white inline-flex items-center justify-center gap-2"
          >
            <Star size={20} />
            {t.hero.cta2}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* === Scroll indicator === */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
