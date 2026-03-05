import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.profile, href: '/profile' },
    { name: t.nav.education, href: '/education' },
    { name: t.nav.experience, href: '/experience' },
    { name: t.nav.initiatives, href: '/initiatives' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isCurrent = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-white/80 py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold text-[#1e3a8a] flex items-center gap-2"
        >
          <Link to="/" className="tracking-tight hover:text-[#2563eb] transition-colors">{t.hero.name}</Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-semibold transition-colors ${isCurrent(link.href) ? 'text-[#2563eb]' : 'text-[#64748b] hover:text-[#2563eb]'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer text-sm font-medium z-50 hidden sm:block">
            <div className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-2 rounded-full shadow-sm hover:bg-blue-800 transition-colors">
              <Globe size={16} />
              <span>{(language || 'en').toUpperCase()}</span>
              <ChevronDown size={14} />
            </div>
            {/* Dropdown menu */}
            <div className="absolute right-0 top-full mt-2 w-24 bg-white rounded-lg shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden flex flex-col">
              {(['en', 'om', 'am'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-full text-left px-4 py-3 text-xs font-bold hover:bg-slate-50 transition-colors ${language === lang ? 'text-[#2563eb] bg-blue-50/50' : 'text-[#64748b]'
                    }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#1e3a8a]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-semibold ${isCurrent(link.href) ? 'text-[#2563eb]' : 'text-[#334155]'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                {(['en', 'om', 'am'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setIsMobileMenuOpen(false); }}
                    className={`px-4 py-2 rounded-md text-sm font-bold flex-1 ${language === lang ? 'bg-[#2563eb] text-white' : 'bg-slate-100 text-[#64748b]'
                      }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
