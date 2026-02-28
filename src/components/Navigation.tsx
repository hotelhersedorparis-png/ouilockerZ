'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, Package, MapPin, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <Image
                src="/logo-officiel.png"
                alt="OuiLockers"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </button>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-50">
                  <Globe className="w-4 h-4" />
                  {languages.find((l) => l.code === language)?.label}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border-slate-200">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`hover:bg-slate-50 hover:text-emerald-600 ${language === lang.code ? 'bg-slate-50 text-emerald-600 font-medium' : ''}`}
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
              className="bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
              {t.nav.bookNow}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-600"
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
            className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors text-left"
                >
                  <link.icon className="w-5 h-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">{link.label}</span>
                </button>
              ))}

              {/* Language Switcher Mobile */}
              <div className="pt-3 border-t border-slate-200">
                <p className="px-4 py-2 text-sm text-slate-500 font-medium">
                  Language
                </p>
                <div className="flex flex-col gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                        language === lang.code
                          ? 'bg-emerald-600 text-white font-semibold'
                          : 'hover:bg-slate-50 text-slate-600'
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
                className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-semibold shadow-sm hover:shadow-md transition-all duration-200 mt-4"
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
