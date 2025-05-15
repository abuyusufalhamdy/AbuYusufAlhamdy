import React from 'react';
import { BrushBorder } from '../ui/BrushBorder';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <BrushBorder className="mb-8">
      <div className="text-center max-w-3xl mx-auto py-8 px-4">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 dark:text-blue-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to the Official Website of Abu Yusuf Alhamdy
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This is a Salafi website strictly based on the science of Hadith.
        </motion.p>
        <motion.a
          href="https://www.youtube.com/@abuyusufaalhamdy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Visit Our YouTube Channel
        </motion.a>
      </div>
    </BrushBorder>
  );
};