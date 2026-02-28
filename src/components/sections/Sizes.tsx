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
    },
    {
      icon: Briefcase,
      title: t.sizes.medium,
      description: t.sizes.mediumDesc,
      price: t.sizes.mediumPrice,
      size: 'M',
      dimensions: '55×60×50 cm',
      image: '/images/medium-locker-suitcase.png',
    },
    {
      icon: Trophy,
      title: t.sizes.large,
      description: t.sizes.largeDesc,
      price: t.sizes.largePrice,
      size: 'L',
      dimensions: '80×80×70 cm',
      image: '/images/photo-lockers.jpg',
    },
  ];

  const handleBookNow = () => {
    window.open('https://ouilockers.bestwond.com/setDate/?device_id=2100018368', '_blank');
  };

  return (
    <section id="sizes" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
            {t.sizes.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect size for your luggage
          </p>
        </motion.div>

        {/* Size Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {sizes.map((size, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="h-full"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 h-full hover:shadow-md transition-shadow hover:border-emerald-300">
                {/* Size Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-heading font-bold text-xl text-white -mt-12 -mr-2 shadow-md">
                  {size.size}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 border border-emerald-100">
                  <size.icon className="w-7 h-7 text-emerald-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-semibold text-slate-900 mb-2">
                  {size.title}
                </h3>

                {/* Dimensions */}
                <p className="text-sm text-slate-500 mb-3 font-mono">
                  {size.dimensions}
                </p>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {size.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-3xl font-bold text-emerald-600 mb-1">
                    {size.price}
                  </p>
                  <p className="text-xs text-slate-500">per day</p>
                </div>

                {/* Button */}
                <Button
                  onClick={handleBookNow}
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-semibold rounded-lg transition-colors"
                >
                  {t.sizes.bookNow}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-slate-600 inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            {t.sizes.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
