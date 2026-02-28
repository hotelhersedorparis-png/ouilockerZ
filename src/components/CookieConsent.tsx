'use client';

import { X, Check, Info } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-bold text-slate-900">
                    RGPD & Cookie Consent
                  </h3>
                </div>
                <p className="text-slate-600 mb-2">
                  We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies in accordance with our{' '}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-emerald-600 font-semibold hover:underline"
                  >
                    {showDetails ? 'Hide' : 'Show'} details
                  </button>
                </p>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-slate-50 rounded-lg p-4 mt-3 text-sm text-slate-600 space-y-2">
                        <p>
                          <strong className="text-slate-900">Essential Cookies:</strong> Required for the website to function properly.
                        </p>
                        <p>
                          <strong className="text-slate-900">Analytics Cookies:</strong> Help us understand how visitors interact with our website.
                        </p>
                        <p>
                          <strong className="text-slate-900">Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads.
                        </p>
                        <p className="text-xs text-slate-500 mt-3">
                          You can change your cookie preferences at any time. For more information, please read our{' '}
                          <a href="/privacy" className="text-emerald-600 hover:underline">
                            Privacy Policy
                          </a>{' '}
                          and{' '}
                          <a href="/terms" className="text-emerald-600 hover:underline">
                            Terms of Service
                          </a>
                          .
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-3 lg:ml-6">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-colors text-sm"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
