import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 border-t border-gray-700 xl:ml-80 xl:mr-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 My Portfolio. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={16} fill="currentColor" />
            </motion.div>
            <span>and cutting-edge technology</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;