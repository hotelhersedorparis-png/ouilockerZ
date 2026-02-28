'use client';

import { MapPin, Clock, Star, Phone, Mail, Shield, Navigation, Train, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Locations() {
  const { t } = useLanguage();

  const handleBookNow = () => {
    window.open('https://ouilockers.bestwond.com/setDate/?device_id=2100018368', '_blank');
  };

  const nearbyTransport = [
    {
      station: 'Bastille Metro',
      lines: 'Lines 1, 5, 8',
      time: '5 min',
    },
    {
      station: 'Saint-Paul Metro',
      lines: 'Line 1',
      time: '7 min',
    },
    {
      station: 'Chemin Vert Metro',
      lines: 'Line 8',
      time: '8 min',
    },
  ];

  const nearbyAttractions = [
    'Place des Vosges',
    'Notre-Dame',
    'The Louvre',
    'Bastille',
  ];

  return (
    <section id="locations" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
            Find Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In the heart of Le Marais
          </p>
          <p className="text-slate-500 mt-2">
            Easily accessible by metro, steps away from main attractions
          </p>
        </motion.div>

        {/* Main Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-12"
        >
          {/* Featured Image */}
          <div className="aspect-video relative">
            <Image
              src="/images/photo-facade.jpg"
              alt="OuiLockers Paris Location - Façade"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-3xl font-heading font-bold text-white mb-2">OuiLockers Paris</h3>
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-white">20 Rue Saint-Antoine, 75004 Paris, France</span>
                </div>
                <div className="flex items-center gap-4 text-white/90 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">4.9/5 (250 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">24/7 Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900">Heart of Le Marais</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Hours</p>
                  <p className="font-semibold text-slate-900">24/7 • Open Now</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Price</p>
                  <p className="font-semibold text-slate-900">€€/day</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium text-slate-900">+33 1 85 73 72 47</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium text-slate-900">ouilockers@hotel-herse-dor.com</p>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <Button
              onClick={handleBookNow}
              className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-semibold py-6 text-lg rounded-lg transition-colors"
            >
              Book Now at This Location
            </Button>
          </div>
        </motion.div>

        {/* Our Establishment - Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Our Establishment</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/photo-facade.jpg"
                alt="Façade OuiLockers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                <p className="text-white font-semibold">Façade OuiLockers</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/photo-interieur.jpg"
                alt="Salle d'attente OuiLockers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                <p className="text-white font-semibold">Salle d'attente OuiLockers</p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/photo-lockers.jpg"
                alt="Les lockers OuiLockers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                <p className="text-white font-semibold">Les lockers OuiLockers</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Le Marais - Directions & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Google Maps Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-emerald-600" />
              Le Marais
            </h3>
            <p className="text-slate-600 mb-6">Google Maps directions to OuiLockers Paris</p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">OuiLockers Paris</p>
                  <p className="text-slate-600">20 Rue Saint-Antoine</p>
                  <p className="text-slate-600">75004 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Landmark className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Inside Hotel Herse d'Or</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-2">Hours</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-slate-900">Open 24/7</p>
                    <p className="text-slate-600">365 days a year</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.open('https://maps.google.com/?q=20+Rue+Saint-Antoine,+75004+Paris,+France', '_blank')}
              className="w-full mt-6 bg-slate-900 text-white hover:bg-slate-800 font-semibold py-3 rounded-lg transition-colors"
            >
              Open in Google Maps
            </Button>
          </div>

          {/* Nearby Transport */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Train className="w-6 h-6 text-emerald-600" />
              Nearby Transport
            </h3>
            <p className="text-slate-600 mb-6">Easily accessible by metro</p>

            <div className="space-y-3 mb-6">
              {nearbyTransport.map((transport, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{transport.station}</p>
                    <p className="text-sm text-slate-500">{transport.lines}</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{transport.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">Nearby</p>
              <div className="flex flex-wrap gap-2">
                {nearbyAttractions.map((attraction, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                  >
                    {attraction}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
