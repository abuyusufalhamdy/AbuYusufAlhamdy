import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Articles: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-3 font-display">
          Knowledge & Articles
        </h1>
        <p className="text-gray-300 dark:text-gray-300 mb-4">
          A collection of writings and knowledge resources
        </p>
        <div className="h-1 w-20 bg-primary-500/30 rounded-full"></div>
      </motion.div>
      
      <motion.div
        className="flex flex-col items-center justify-center py-16 text-center max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <BookOpen className="h-20 w-20 text-primary-500/50 mb-6" />
        <h2 className="text-2xl font-medium text-white dark:text-white mb-3">
          Articles Coming Soon
        </h2>
        <p className="text-gray-300 dark:text-gray-300">
          Knowledge and article resources are currently being prepared. Check back later for insightful content.
        </p>
      </motion.div>
    </div>
  );
};

export default Articles;