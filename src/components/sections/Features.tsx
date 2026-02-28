'use client';

import { Wifi, Zap, Coffee, Armchair, Sofa, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Features() {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'High-speed internet connection available free of charge for all our customers.',
    },
    {
      icon: Zap,
      title: 'USB & Power Outlets',
      description: 'USB ports and power outlets available in abundance to charge your devices.',
    },
    {
      icon: Coffee,
      title: 'Vending Machines',
      description: 'Cold drinks, hot drinks and snacks available 24/7.',
    },
    {
      icon: Armchair,
      title: 'Small Lounge',
      description: 'A comfortable space to relax and rest before continuing your journey.',
    },
    {
      icon: Sofa,
      title: 'Relaxation Area',
      description: 'Enjoy our fitted-out space for a pleasant break.',
    },
    {
      icon: Shield,
      title: 'Transparent pricing',
      description: 'No hidden fees, no surprises. Clear and honest pricing.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
            At your disposal
          </h2>
          <p className="text-lg text-slate-600 font-semibold mb-2">
            Amenities & Services
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Everything you need for optimal comfort
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-corporate p-6 h-full hover:border-emerald-300 transition-colors">
                {/* Icon */}
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                  <amenity.icon className="w-7 h-7 text-emerald-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
