'use client';

import { Shield, Clock, Package, MapPin, Lock, Sparkles, Users, Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Sizes() {
  const { t } = useLanguage();

  const handleBookNow = () => {
    window.open('https://ouilockers.bestwond.com/setDate/?device_id=2100018368', '_blank');
  };

  const specialOffers = [
    {
      discount: '100%',
      title: 'Hotel Guests',
      description: 'Free for Hotel Herse d\'Or guests.',
      action: 'Book your room',
      icon: Users,
    },
    {
      discount: '-10%',
      title: 'Early Bird',
      description: 'Book 7 days in advance',
      icon: Calendar,
    },
    {
      discount: '-10%',
      title: 'Group',
      description: 'For 5 lockers or more',
      icon: Package,
    },
  ];

  return (
    <section id="sizes" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
            One simple price
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No surprises, no hidden fees
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">Per locker / 24h</span>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-6xl font-heading font-bold text-slate-900 mb-2">
                30€
              </p>
              <p className="text-slate-500">per day</p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Dimensions: 59 x 48 x 85 cm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">24/7 access</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Secure personal code</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Up to 4 cabin suitcases</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Maximum 24h storage</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Central location</p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">Important:</p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Rental runs from 0h to 24h for each day. Example: a rental from 11pm to 6am = 2 days (€60).
                  </p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <Button
              onClick={handleBookNow}
              className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-semibold py-6 text-lg rounded-lg transition-colors"
            >
              Book now
            </Button>
          </div>
        </motion.div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-8 text-center">
            Special offers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all h-full">
                  {/* Discount Badge */}
                  <div className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-full font-bold text-lg mb-4">
                    {offer.discount}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                    <offer.icon className="w-7 h-7 text-emerald-600" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-2">
                    {offer.title}
                  </h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Action Link (only for Hotel Guests) */}
                  {offer.action && (
                    <Button
                      variant="link"
                      className="p-0 h-auto text-emerald-600 font-semibold hover:text-emerald-700"
                      onClick={() => window.open('https://hotel-herse-dor.com', '_blank')}
                    >
                      {offer.action} →
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
