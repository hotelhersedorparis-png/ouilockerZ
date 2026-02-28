'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Sizes from '@/components/sections/Sizes';
import Locations from '@/components/sections/Locations';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import CallWidget from '@/components/CallWidget';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Sizes />
        <Locations />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <CallWidget />
    </div>
  );
}
