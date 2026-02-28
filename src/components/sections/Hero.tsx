'use client';

import { ArrowRight, Shield, Clock, Zap, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const { t, language } = useLanguage();

  const scrollToLocations = () => {
    const element = document.getElementById('locations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-marais.jpg"
          alt="OuiLockers Paris Le Marais"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-slate-100/85" />
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 mb-6 shadow-sm"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold">Le Marais, Paris</span>
            </motion.div>

            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 mb-6 ml-2 shadow-sm"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold">4.9/5 Rating</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
            >
              <span className="text-slate-900 block mb-2">Premium 24/7</span>
              <span className="text-gradient">Luggage Storage</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Secure automated lockers in the heart of Paris Le Marais. Drop your bags and explore the city hands-free. €30/day, up to 4 bags per locker.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={scrollToLocations}
                size="lg"
                className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold px-8 py-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="flex items-center gap-2">
                  Book Now • €30/day
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>20 Rue Saint-Antoine, 75004 Paris</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Card */}
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-200">
                    <Shield className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">24/7 Access</p>
                      <p className="text-sm text-slate-500">Anytime, anywhere</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Bank-Grade Security</p>
                      <p className="text-sm text-slate-500">CCTV monitored</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-emerald-200 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Instant Booking</p>
                      <p className="text-sm text-slate-500">No waiting, no queues</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute -top-3 -right-3 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700">4.9</span>
                </div>
              </div>

              {/* Capacity Badge */}
              <div className="absolute -bottom-3 -left-3 bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-semibold text-slate-700">Up to 4 Bags</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
