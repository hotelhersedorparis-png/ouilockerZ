'use client';

import { MapPin, Navigation, Clock, Star, Phone, Mail, Shield } from 'lucide-react';
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
  reviews?: number;
  phone?: string;
  email?: string;
  coordinates?: { lat: string; lng: string };
  priceRange?: string;
}

export default function Locations() {
  const { t } = useLanguage();

  const locations: Location[] = [
    {
      id: '1',
      name: 'Le Marais - Saint-Antoine',
      address: '20 Rue Saint-Antoine, 75004 Paris, France',
      deviceId: '2100018368',
      distance: 'Heart of Le Marais',
      hours: '24/7 • Open Now',
      status: 'open',
      image: '/images/photo-facade.jpg',
      rating: 4.9,
      reviews: 250,
      phone: '+33 1 85 73 72 47',
      email: 'ouilockers@hotel-herse-dor.com',
      coordinates: { lat: '48.8534', lng: '2.3652' },
      priceRange: '€€/day',
    },
    {
      id: '2',
      name: 'Bastille Station',
      address: 'Place de la Bastille, 75004 Paris, France',
      deviceId: '2100018369',
      distance: '5 min walk',
      hours: '24/7 • Open Now',
      status: 'open',
      image: '/images/photo-interieur.jpg',
      rating: 4.8,
      reviews: 180,
      phone: '+33 1 85 73 72 47',
      email: 'ouilockers@hotel-herse-dor.com',
      coordinates: { lat: '48.8534', lng: '2.3652' },
      priceRange: '€€/day',
    },
    {
      id: '3',
      name: 'City Center',
      address: 'Central Paris, France',
      deviceId: '2100018370',
      distance: 'Nearby',
      hours: '24/7 • Open Now',
      status: 'open',
      image: '/images/hero-lockers.png',
      rating: 4.7,
      reviews: 150,
      phone: '+33 1 85 73 72 47',
      email: 'ouilockers@hotel-herse-dor.com',
      coordinates: { lat: '48.8566', lng: '2.3522' },
      priceRange: '€€/day',
    },
  ];

  const handleBookAtLocation = (deviceId: string) => {
    window.open(`https://ouilockers.bestwond.com/setDate/?device_id=${deviceId}`, '_blank');
  };

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
            Our Location
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Premium luggage storage in the heart of Paris Le Marais. 24/7 access, secure automated lockers.
          </p>
        </motion.div>

        {/* Featured Location Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-video relative">
            <Image
              src="/images/photo-facade.jpg"
              alt="OuiLockers Paris Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <div className="flex items-center gap-2 text-emerald-400 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold text-white">20 Rue Saint-Antoine, 75004 Paris</span>
                </div>
                <div className="flex items-center gap-4 text-white/90">
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
        </motion.div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-white border border-slate-200 hover:border-emerald-300 transition-colors rounded-2xl p-6 shadow-sm hover:shadow-md">
                {/* Location Image */}
                {location.image && (
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Status & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="default"
                    className={`${
                      location.status === 'open'
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : ''
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
                    Open
                  </Badge>
                  {location.rating && (
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="font-medium text-slate-900">{location.rating}</span>
                      {location.reviews && (
                        <span className="text-slate-500">({location.reviews})</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Location Info */}
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                  {location.name}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {location.address}
                </p>

                {/* Hours */}
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>{location.hours}</span>
                </div>

                {/* Distance */}
                {location.distance && (
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <Navigation className="w-4 h-4" />
                    <span>{location.distance}</span>
                  </div>
                )}

                {/* Price */}
                {location.priceRange && (
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                    <span className="font-semibold text-emerald-600">{location.priceRange}</span>
                  </div>
                )}

                {/* Contact Info */}
                {location.phone && (
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span>{location.phone}</span>
                  </div>
                )}

                {location.email && (
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span className="truncate">{location.email}</span>
                  </div>
                )}

                {/* Book Button */}
                <Button
                  onClick={() => handleBookAtLocation(location.deviceId)}
                  className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-semibold rounded-lg transition-colors"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                24/7 Access
              </h4>
              <p className="text-sm text-slate-600">
                Access your luggage any time, day or night. No waiting in lines or queues.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                Bank-Grade Security
              </h4>
              <p className="text-sm text-slate-600">
                CCTV monitored, secure PIN code access. Your bags are safe with us.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                Prime Location
              </h4>
              <p className="text-sm text-slate-600">
                Located in the heart of Le Marais, near Bastille and major attractions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
