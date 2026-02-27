'use client';

import { Users, Clock, KeyRound, MapPin, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: t.features.noQueues,
      description: t.features.noQueuesDesc,
      gradient: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Clock,
      title: t.features.flexible,
      description: t.features.flexibleDesc,
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: KeyRound,
      title: t.features.pinCode,
      description: t.features.pinCodeDesc,
      gradient: 'from-brand-green to-teal-400',
      bgGradient: 'from-brand-green/10 to-teal-400/10',
    },
    {
      icon: MapPin,
      title: t.features.locations,
      description: t.features.locationsDesc,
      gradient: 'from-teal-400 to-cyan-400',
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden text-foreground">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid-dark opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark-card border-brand-green/30 text-brand-green mb-6"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{t.features.title}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full glass-dark-card border-2 border-white/10 hover:border-brand-green/50 transition-all duration-500 rounded-3xl p-6 hover:shadow-glow-green overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Glow Behind */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Learn More Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-brand-green text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
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
