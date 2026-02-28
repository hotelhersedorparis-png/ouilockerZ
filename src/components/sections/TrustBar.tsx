'use client';

import { Users, Camera, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function TrustBar() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Users,
      text: t.trust.users,
      color: 'text-emerald-600',
    },
    {
      icon: Camera,
      text: t.trust.cctv,
      color: 'text-emerald-600',
    },
    {
      icon: Lock,
      text: t.trust.ssl,
      color: 'text-emerald-600',
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center gap-3 p-4"
            >
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <span className="font-medium text-slate-700">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
