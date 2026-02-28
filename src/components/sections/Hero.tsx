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
    <section className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden text-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-marais.jpg"
          alt="OuiLockers Paris Le Marais"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/95 to-slate-100/95" />
      </div>

      {/* Premium Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 pattern-grid opacity-50" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-emerald-200 bg-white text-emerald-700 mb-6 shadow-sm"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-semibold">Le Marais, Paris</span>
            </motion.div>

            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-emerald-200 bg-white text-emerald-700 mb-6 ml-2 shadow-sm"
            >
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">4.9/5 Rating</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-8"
            >
              <span className="text-slate-900 block mb-2">Premium 24/7</span>
              <span className="text-gradient">Luggage Storage</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Secure automated lockers in the heart of Paris Le Marais. Drop your bags and explore the city hands-free. €30/day, up to 4 bags per locker.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <Button
                onClick={scrollToLocations}
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-[length:200%_100%] text-white hover:scale-105 font-bold text-lg px-10 py-7 rounded-2xl transition-all duration-300 group border-2 border-emerald-600/30 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Now • €30/day
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </Button>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm"
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>20 Rue Saint-Antoine, 75004 Paris</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Gradient Elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-3xl transform rotate-12 blur-2xl"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 bg-gradient-to-tl from-emerald-100/40 to-teal-100/40 rounded-3xl transform -rotate-6 blur-xl"
              />

              {/* Main Glass Card */}
              <div className="relative glass-card border-2 border-slate-200 rounded-3xl p-8 shadow-corporate-lg backdrop-blur-2xl overflow-hidden bg-white">
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center border border-emerald-200 shadow-sm"
                  >
                    <Shield className="w-10 h-10 text-emerald-600" />
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 group cursor-pointer hover:bg-white hover:border-emerald-200 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center border border-emerald-200">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">24/7 Access</p>
                      <p className="text-sm text-slate-500">Anytime, anywhere</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 group cursor-pointer hover:bg-white hover:border-emerald-200 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center border border-emerald-200">
                      <Shield className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">Bank-Grade Security</p>
                      <p className="text-sm text-slate-500">CCTV monitored</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 group cursor-pointer hover:bg-white hover:border-emerald-200 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center border border-emerald-200">
                      <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">Instant Booking</p>
                      <p className="text-sm text-slate-500">No waiting, no queues</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-full px-6 py-3 font-bold shadow-lg border-2 border-white/30"
              >
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  4.9 Rating
                </span>
              </motion.div>

              {/* Additional Floating Badge */}
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white text-emerald-700 rounded-2xl px-5 py-3 font-semibold border border-emerald-200 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Up to 4 Bags
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2"
        >
          <motion.div
            animate={{
              opacity: [1, 0, 1],
              y: [0, 12, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-600"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
