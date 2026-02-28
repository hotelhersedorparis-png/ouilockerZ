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
      color: 'text-blue-600',
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
    <section className="bg-slate-50 border-b border-slate-200 py-6 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <item.icon className={`w-6 h-6 ${item.color}`} />
              <span className="font-medium text-slate-800">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
