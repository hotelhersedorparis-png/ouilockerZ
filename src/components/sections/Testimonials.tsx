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
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden text-foreground">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-circles opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{t.testimonials.title}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-brand-green/20 hover:border-brand-green/40 transition-all duration-500 glass-dark-card shadow-premium overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Image Column */}
                        <div className="md:col-span-1">
                          <div className="relative aspect-square rounded-2xl overflow-hidden group">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
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
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="w-16 h-16 bg-gradient-to-br from-brand-green/20 to-teal-400/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 border border-brand-green/30"
                          >
                            <Quote className="w-8 h-8 text-brand-green" />
                          </motion.div>

                          {/* Rating Stars */}
                          <div className="flex justify-center md:justify-start gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                              >
                                <Star className="w-6 h-6 fill-brand-green text-brand-green" />
                              </motion.div>
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-lg lg:text-xl text-white mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Author */}
                          <p className="font-bold text-brand-green text-lg">
                            {testimonial.author}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-2 border-brand-green/30 hover:bg-brand-green/20 hover:border-brand-green transition-all duration-300" />
            <CarouselNext className="hidden md:flex border-2 border-brand-green/30 hover:bg-brand-green/20 hover:border-brand-green transition-all duration-300" />
          </Carousel>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {[
            { label: '1,000+ Users', icon: '👥' },
            { label: '4.9/5 Rating', icon: '⭐' },
            { label: '24/7 Support', icon: '💬' },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-3 glass-dark-card rounded-full border border-brand-green/20"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-semibold text-white">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
