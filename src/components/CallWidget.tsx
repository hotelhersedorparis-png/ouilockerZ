'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallWidget() {
  const handleCall = () => {
    window.open('https://1280.3cx.cloud/callus/#hoteldelahersedor', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleCall}
        className="w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
        <motion.span
          className="absolute -top-1 -right-1 flex h-4 w-4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
        </motion.span>
      </button>
    </motion.div>
  );
}
