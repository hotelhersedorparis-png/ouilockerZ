'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, Lock, Package, MapPin, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'how-it-works', label: t.nav.howItWorks, icon: HelpCircle },
    { id: 'sizes', label: t.nav.sizes, icon: Package },
    { id: 'locations', label: t.nav.locations, icon: MapPin },
    { id: 'faq', label: t.nav.faq, icon: HelpCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-brand-green/20 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-10 h-10"
            >
              <Image
                src="/logo-officiel.png"
                alt="OuiLockers"
                fill
                className="object-contain"
              />
            </motion.div>
            <span className="text-xl font-heading font-bold text-white">
              Oui Lockers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-brand-green transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </button>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-gray-300 hover:text-brand-green hover:bg-brand-green/10">
                  <Globe className="w-4 h-4" />
                  {languages.find((l) => l.code === language)?.label}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-brand-green/20">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`hover:bg-brand-green/10 hover:text-brand-green ${language === lang.code ? 'bg-brand-green/10 text-brand-green' : ''}`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection('locations')}
              className="bg-brand-green text-white hover:bg-brand-green-light font-semibold hover:shadow-glow-green-sm transition-all duration-300"
            >
              {t.nav.bookNow}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-brand-green/10 transition-colors text-gray-300 hover:text-brand-green"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-brand-green/20 bg-background/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-brand-green/10 transition-colors text-left"
                >
                  <link.icon className="w-5 h-5 text-brand-green" />
                  <span className="font-medium">{link.label}</span>
                </button>
              ))}

              {/* Language Switcher Mobile */}
              <div className="pt-3 border-t border-brand-green/20">
                <p className="px-4 py-2 text-sm text-gray-400 font-medium">
                  Language
                </p>
                <div className="flex flex-col gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                        language === lang.code
                          ? 'bg-brand-green text-white font-semibold'
                          : 'hover:bg-brand-green/10 hover:text-brand-green text-gray-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Button Mobile */}
              <Button
                onClick={() => scrollToSection('locations')}
                className="w-full bg-brand-green text-white hover:bg-brand-green-light font-semibold hover:shadow-glow-green-sm transition-all duration-300 mt-4"
              >
                {t.nav.bookNow}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
