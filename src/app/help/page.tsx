'use client';

import { Search, Phone, Mail, Clock, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const helpCategories = [
  {
    id: 'booking',
    icon: '📅',
    title: 'Booking & Reservations',
    questions: [
      {
        q: 'How do I book a locker?',
        a: 'You can book a locker directly through our website. Click the "Book Now" button, select your preferred time slot, and complete the payment. You will receive a confirmation email with your unique access code.',
      },
      {
        q: 'Can I cancel my booking?',
        a: 'Bookings can be cancelled up to 24 hours before your scheduled time. Cancellations within 24 hours are subject to a 50% fee. To cancel, please contact our customer service team.',
      },
      {
        q: 'How long can I store my luggage?',
        a: 'Each booking is for a maximum of 24 hours. If you need longer storage, you can book additional days. Storage beyond 24 hours requires a new booking.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cash payments at our location.',
      },
    ],
  },
  {
    id: 'access',
    icon: '🔐',
    title: 'Access & Security',
    questions: [
      {
        q: 'How do I access my locker?',
        a: 'After booking, you will receive a unique 4-digit PIN code via email and SMS. Enter this code on the keypad at our location to access your locker.',
      },
      {
        q: 'Is my luggage safe?',
        a: 'Absolutely! Our lockers are bank-grade secure with CCTV monitoring 24/7. Each locker is equipped with an electronic lock that can only be opened with your unique PIN code.',
      },
      {
        q: 'Can someone else access my locker?',
        a: 'No. Only you have access to your locker using your unique PIN code. Never share your code with anyone for security reasons.',
      },
      {
        q: 'What if I forget my PIN code?',
        a: 'Contact our customer service team at +33 1 85 73 72 47. After verifying your identity, we can help you access your locker.',
      },
    ],
  },
  {
    id: 'sizes',
    icon: '📦',
    title: 'Locker Sizes & Pricing',
    questions: [
      {
        q: 'What are the locker dimensions?',
        a: 'Our lockers are 59 x 48 x 85 cm, suitable for up to 4 cabin suitcases or equivalent luggage.',
      },
      {
        q: 'How much does it cost?',
        a: 'The price is €30 per 24 hours. There are no hidden fees - the price you see is what you pay.',
      },
      {
        q: 'Can I store any type of luggage?',
        a: 'Our lockers accommodate suitcases, backpacks, and bags. For specific item inquiries, please contact us in advance.',
      },
      {
        q: 'What items are prohibited?',
        a: 'Prohibited items include: flammable materials, weapons, illegal substances, perishable food, and valuable items exceeding €1,000.',
      },
    ],
  },
  {
    id: 'location',
    icon: '📍',
    title: 'Location & Hours',
    questions: [
      {
        q: 'Where are you located?',
        a: 'We are located at 20 Rue Saint-Antoine, 75004 Paris, in the heart of Le Marais, inside Hotel Herse d\'Or.',
      },
      {
        q: 'What are your opening hours?',
        a: 'We are open 24/7, 365 days a year. You can access your locker at any time.',
      },
      {
        q: 'How do I get there by metro?',
        a: 'The closest metro stations are: Bastille (Lines 1, 5, 8, 5 min walk), Saint-Paul (Line 1, 7 min), and Chemin Vert (Line 8, 8 min).',
      },
      {
        q: 'Is there parking available?',
        a: 'There is paid street parking nearby. We recommend using public transport for convenience.',
      },
    ],
  },
  {
    id: 'hotel',
    icon: '🏨',
    title: 'Hotel Guests',
    questions: [
      {
        q: 'Do Hotel Herse d\'Or guests get a discount?',
        a: 'Yes! Hotel Herse d\'Or guests receive 100% free locker storage. Please mention your room number when booking.',
      },
      {
        q: 'How do I claim my free locker as a hotel guest?',
        a: 'Simply present your room key or booking confirmation at the front desk. Our staff will assist you with locker access.',
      },
      {
        q: 'Are there any limitations for hotel guests?',
        a: 'Hotel guests can use lockers subject to availability. We recommend booking in advance during peak periods.',
      },
    ],
  },
  {
    id: 'contact',
    icon: '💬',
    title: 'Contact & Support',
    questions: [
      {
        q: 'How can I contact customer service?',
        a: 'You can reach us by phone at +33 1 85 73 72 47, email at ouilockers@hotel-herse-dor.com, or use our WhatsApp chat widget for instant support.',
      },
      {
        q: 'What is the response time for inquiries?',
        a: 'We aim to respond to all inquiries within 1 hour during business hours and within 24 hours outside of business hours.',
      },
      {
        q: 'Do you offer support in multiple languages?',
        a: 'Yes! Our customer service team can assist you in English, French, and Spanish.',
      },
      {
        q: 'Can I leave feedback about my experience?',
        a: 'Absolutely! We value your feedback. You can leave reviews on our website, Google Maps, or contact us directly with your comments.',
      },
    ],
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['booking']);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredCategories = helpCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-slate-900 mb-4">
              Help Center
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Find answers to common questions or contact our support team
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="font-semibold text-slate-900">+33 1 85 73 72 47</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-semibold text-slate-900">ouilockers@hotel-herse-dor.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Support Hours</p>
                <p className="font-semibold text-slate-900">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
            {searchQuery ? `Search Results (${filteredCategories.reduce((acc, cat) => acc + cat.questions.length, 0)} found)` : 'Frequently Asked Questions'}
          </h2>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No results found. Try different keywords.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <div key={category.id} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{category.icon}</span>
                      <span className="text-xl font-semibold text-slate-900">
                        {category.title}
                      </span>
                      <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                        {category.questions.length} questions
                      </span>
                    </div>
                    {expandedCategories.includes(category.id) ? (
                      <ChevronUp className="w-5 h-5 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-600" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.includes(category.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-slate-200"
                      >
                        <div className="p-6 space-y-4">
                          {category.questions.map((question, index) => (
                            <div key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                              <h3 className="font-semibold text-slate-900 mb-2">
                                {question.q}
                              </h3>
                              <p className="text-slate-600 leading-relaxed">
                                {question.a}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
            Still need help?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('tel:+33185737247')}
              className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold py-6 px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
            <Button
              onClick={() => window.location.href = 'mailto:ouilockers@hotel-herse-dor.com'}
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-50 font-semibold py-6 px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
