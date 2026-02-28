'use client';

import { Smartphone, DoorOpen, Repeat, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Smartphone,
      number: '01',
      title: t.howItWorks.step1,
      description: t.howItWorks.step1Desc,
    },
    {
      icon: DoorOpen,
      number: '02',
      title: t.howItWorks.step2,
      description: t.howItWorks.step2Desc,
    },
    {
      icon: Repeat,
      number: '03',
      title: t.howItWorks.step3,
      description: t.howItWorks.step3Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
            {t.howItWorks.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-heading font-bold text-lg text-white shadow-md">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 border border-emerald-100">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
