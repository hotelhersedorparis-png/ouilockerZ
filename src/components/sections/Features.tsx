'use client';

import { Users, Clock, KeyRound, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t.features.noQueues,
      description: t.features.noQueuesDesc,
    },
    {
      icon: Clock,
      title: t.features.flexible,
      description: t.features.flexibleDesc,
    },
    {
      icon: KeyRound,
      title: t.features.pinCode,
      description: t.features.pinCodeDesc,
    },
    {
      icon: MapPin,
      title: t.features.locations,
      description: t.features.locationsDesc,
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
            {t.features.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-corporate p-6 h-full hover:border-emerald-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 border border-emerald-100">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
