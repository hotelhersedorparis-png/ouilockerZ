'use client';

import { Backpack, Briefcase, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Sizes() {
  const { t } = useLanguage();

  const sizes = [
    {
      icon: Backpack,
      title: t.sizes.small,
      description: t.sizes.smallDesc,
      price: t.sizes.smallPrice,
      size: 'S',
      dimensions: '35×50×40 cm',
      image: '/images/small-locker-backpack.png',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-300',
      priceColor: 'text-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Briefcase,
      title: t.sizes.medium,
      description: t.sizes.mediumDesc,
      price: t.sizes.mediumPrice,
      size: 'M',
      dimensions: '55×60×50 cm',
      image: '/images/medium-locker-suitcase.png',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-300',
      priceColor: 'text-purple-600',
      bgGradient: 'from-purple-50 to-pink-50',
    },
    {
      icon: Trophy,
      title: t.sizes.large,
      description: t.sizes.largeDesc,
      price: t.sizes.largePrice,
      size: 'L',
      dimensions: '80×80×70 cm',
      image: '/images/photo-lockers.jpg',
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-300',
      priceColor: 'text-emerald-600',
      bgGradient: 'from-emerald-50 to-teal-50',
    },
  ];

  const handleBookNow = () => {
    window.open('https://ouilockers.bestwond.com/setDate/?device_id=2100018368', '_blank');
  };

  return (
    <section id="sizes" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden text-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-emerald-200 bg-white text-emerald-700 mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Choose Your Size</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{t.sizes.title}</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {sizes.map((size, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <div className="group relative h-full glass-card border-2 ${size.borderColor} hover:border-emerald-400 transition-all duration-500 rounded-3xl overflow-hidden hover:shadow-corporate-lg bg-white">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${size.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                  {/* Size Badge */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-2xl flex items-center justify-center font-heading font-bold text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {size.size}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                    <size.icon className="w-8 h-8 text-emerald-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                    {size.title}
                  </h3>

                  {/* Dimensions */}
                  <p className="text-sm text-slate-500 mb-2 font-mono">
                    {size.dimensions}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {size.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <p className={`text-3xl font-bold ${size.priceColor} mb-1 group-hover:text-emerald-600 transition-colors`}>
                      {size.price}
                    </p>
                    <p className="text-xs text-slate-500">per day</p>
                  </div>

                  {/* Button */}
                  <Button
                    onClick={handleBookNow}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:scale-105 font-bold rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-xl border-2 border-emerald-600/30"
                  >
                    {t.sizes.bookNow}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-slate-600 inline-flex items-center gap-2 px-6 py-3 rounded-full glass bg-white border border-slate-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            {t.sizes.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
