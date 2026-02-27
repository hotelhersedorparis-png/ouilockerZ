'use client';

import { Smartphone, DoorOpen, Repeat, ArrowRight, CheckCircle } from 'lucide-react';
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
      color: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: DoorOpen,
      number: '02',
      title: t.howItWorks.step2,
      description: t.howItWorks.step2Desc,
      color: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Repeat,
      number: '03',
      title: t.howItWorks.step3,
      description: t.howItWorks.step3Desc,
      color: 'from-brand-green to-teal-400',
      bgGradient: 'from-brand-green/10 to-teal-400/10',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-background overflow-hidden text-foreground">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid-dark opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{t.howItWorks.title}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative h-full glass-dark-card border-2 border-white/10 hover:border-brand-green/50 transition-all duration-500 rounded-3xl p-8 hover:shadow-glow-green overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Glow Behind */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Number Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-brand-green to-teal-500 rounded-2xl flex items-center justify-center font-heading font-bold text-2xl text-white shadow-glow-green-sm border-2 border-white/20"
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Checkmark Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                    className="flex items-center gap-2 text-brand-green font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Simple & Fast</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
