import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#1e3a8a] text-white selection:bg-white selection:text-blue-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-blue-800/50 pb-12">

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-black text-2xl tracking-tight">Merawan Mohammed</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed max-w-md">
              Official Leadership Portfolio for Merawan Mohammed, serving as a dedicated Woreda Administration Officer in Ethiopia.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-gov-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-gov-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-gov-primary transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-gov-primary transition-colors text-white">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-blue-200 font-medium font-sans">
              <li><Link to="/profile" className="hover:text-white transition-colors">Leadership Profile</Link></li>
              <li><Link to="/experience" className="hover:text-white transition-colors">Public Service</Link></li>
              <li><Link to="/initiatives" className="hover:text-white transition-colors">Key Initiatives</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Office</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-blue-200 font-medium font-sans">
              <li><a href="#" className="hover:text-white transition-colors">Press Room</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-blue-300">
          <div>
            © {year} {t.hero.name}. All Rights Reserved.
          </div>
          <div>
            Designed for Public Administration Leadership
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;