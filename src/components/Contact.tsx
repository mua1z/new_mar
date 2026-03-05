import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin, Map } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gov-blue mb-4">{t.contact.title}</h2>
          <div className="w-12 h-1.5 bg-gov-accent mx-auto rounded-full mb-8"></div>
          <p className="text-center text-gov-muted max-w-2xl mx-auto">
            Get in touch with the Woreda Administration Office for inquiries, community concerns, or an official meeting.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-card border border-slate-100/50 p-8 hover:shadow-xl transition-shadow duration-300 shadow-lg bg-white"
          >
            <h3 className="text-2xl font-bold text-gov-blue mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gov-text mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gov-primary/50 focus:border-gov-primary transition-all text-sm font-medium"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gov-text mb-2">{t.contact.email} / Phone</label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gov-primary/50 focus:border-gov-primary transition-all text-sm font-medium"
                  placeholder="Your email or phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gov-text mb-2">{t.contact.message}</label>
                <textarea
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gov-primary/50 focus:border-gov-primary transition-all resize-none text-sm font-medium"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gov-primary hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-colors shadow-blue-500/30 active:scale-[0.98]">
                {t.contact.send}
              </button>
            </form>
          </motion.div>

          {/* Right: Office Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white rounded-3xl shadow-card border border-slate-100/50 p-8 hover:shadow-xl transition-shadow duration-300 bg-slate-50 border-slate-200 shadow-sm p-8 flex-1">
              <h3 className="text-2xl font-bold text-gov-blue mb-8">Office Details</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-200 text-gov-primary group-hover:scale-110 transition-transform shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gov-muted mb-1">Phone Number</p>
                    <p className="font-bold text-gov-text text-lg">+251 911 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-200 text-gov-accent group-hover:scale-110 transition-transform shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gov-muted mb-1">Email Address</p>
                    <p className="font-bold text-gov-text text-lg">office@merawan.gov.et</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-slate-200 text-gov-primary group-hover:scale-110 transition-transform shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gov-muted mb-1">Office Location</p>
                    <p className="font-bold text-gov-text text-lg">Haramaya Woreda Administration Office, Oromia, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-48 rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 border border-slate-200 flex flex-col items-center justify-center text-gov-primary shadow-inner">
              <Map size={32} className="mb-2 opacity-50" />
              <span className="font-bold text-sm text-gov-primary">View Location on Google Maps</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;