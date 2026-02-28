'use client';

import { Quote, Star, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t.testimonials.quote1,
      author: t.testimonials.quote1Author,
      rating: 5,
      image: '/images/traveler-using-locker.png',
      role: 'Traveler',
    },
    {
      quote: t.testimonials.quote2,
      author: t.testimonials.quote2Author,
      rating: 5,
      image: '/images/small-locker-backpack.png',
      role: 'Student',
    },
    {
      quote: t.testimonials.quote3,
      author: t.testimonials.quote3Author,
      rating: 5,
      image: '/images/photo-interieur.jpg',
      role: 'Local',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 text-slate-900">
            {t.testimonials.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border border-slate-200 bg-white shadow-sm">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Image Column */}
                        <div className="md:col-span-1">
                          <div className="relative aspect-square rounded-xl overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center gap-2 text-white">
                                <User className="w-5 h-5" />
                                <span className="font-semibold text-sm">{testimonial.role}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Column */}
                        <div className="md:col-span-2 text-center md:text-left">
                          {/* Quote Icon */}
                          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 border border-emerald-100">
                            <Quote className="w-6 h-6 text-emerald-600" />
                          </div>

                          {/* Rating Stars */}
                          <div className="flex justify-center md:justify-start gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Author */}
                          <p className="font-semibold text-emerald-600 text-lg">
                            {testimonial.author}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border border-slate-300 hover:bg-slate-50" />
            <CarouselNext className="hidden md:flex border border-slate-300 hover:bg-slate-50" />
          </Carousel>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {[
            { label: '1,000+ Users', icon: '👥' },
            { label: '4.9/5 Rating', icon: '⭐' },
            { label: '24/7 Support', icon: '💬' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-semibold text-slate-800">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
