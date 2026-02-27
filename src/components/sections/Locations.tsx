'use client';

import { MapPin, Navigation, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Location {
  id: string;
  name: string;
  address: string;
  deviceId: string;
  distance?: string;
  hours: string;
  status: 'open' | 'closed';
  image?: string;
  rating?: number;
}

export default function Locations() {
  const { t } = useLanguage();

  const locations: Location[] = [
    {
      id: '1',
      name: 'Le Marais - Saint-Antoine',
      address: '20 Rue Saint-Antoine, 75004 Paris',
      deviceId: '2100018368',
      distance: '0.1 km from center',
      hours: '24/7',
      status: 'open',
      image: '/images/photo-facade.jpg',
      rating: 4.9,
    },
    {
      id: '2',
      name: 'Bastille Station',
      address: '456 Railway Avenue, Paris',
      deviceId: '2100018369',
      distance: '0.5 km away',
      hours: '24/7',
      status: 'open',
      image: '/images/photo-interieur.jpg',
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Airport Terminal',
      address: '789 Airport Boulevard, Paris',
      deviceId: '2100018370',
      distance: '2.1 km away',
      hours: '24/7',
      status: 'open',
      image: '/images/hero-lockers.png',
      rating: 4.7,
    },
  ];

  const handleBookAtLocation = (deviceId: string) => {
    window.open(`https://ouilockers.bestwond.com/setDate/?device_id=${deviceId}`, '_blank');
  };

  return (
    <section id="locations" className="relative py-24 lg:py-32 bg-card overflow-hidden text-foreground">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid-dark opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{t.locations.title}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t.locations.subtitle}
          </p>
        </motion.div>

        {/* Map Placeholder with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-background border-2 border-brand-green/20 rounded-3xl overflow-hidden"
        >
          <div className="aspect-video relative">
            <Image
              src="/images/photo-facade.jpg"
              alt="OuiLockers Paris Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-end">
              <div className="p-8">
                <div className="flex items-center gap-2 text-brand-green mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">20 Rue Saint-Antoine, 75004 Paris</span>
                </div>
                <p className="text-gray-300">Located in the heart of Le Marais</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-background border-2 border-white/10 hover:border-brand-green/50 transition-all duration-300 hover:shadow-glow-green rounded-3xl p-6 overflow-hidden">
                {/* Location Image */}
                {location.image && (
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge
                    variant="default"
                    className={`${
                      location.status === 'open'
                        ? 'bg-brand-green text-white'
                        : ''
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse" />
                    {t.locations.open}
                  </Badge>
                  {location.rating && (
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Star className="w-4 h-4 fill-brand-green text-brand-green" />
                      {location.rating}
                    </div>
                  )}
                </div>

                {/* Location Info */}
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {location.address}
                </p>

                {/* Hours */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 text-brand-green" />
                  {location.hours}
                </div>

                {/* Distance */}
                {location.distance && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <Navigation className="w-4 h-4" />
                    {location.distance}
                  </div>
                )}

                {/* Book Button */}
                <Button
                  onClick={() => handleBookAtLocation(location.deviceId)}
                  className="w-full bg-gradient-to-r from-brand-green to-teal-500 text-white hover:scale-105 font-bold rounded-xl transition-all duration-300 shadow-lg group-hover:shadow-glow-green-sm border-2 border-brand-green/30"
                >
                  {t.locations.bookAtLocation}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
