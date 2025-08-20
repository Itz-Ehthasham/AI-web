'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const FloatingCTA = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/contact">
        <motion.button
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 font-semibold text-lg"
          whileHover={{ 
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            y: -2
          }}
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">Get in touch</span>
          <span className="sm:hidden">Contact</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;
