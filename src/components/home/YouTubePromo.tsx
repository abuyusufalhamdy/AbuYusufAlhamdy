import React from 'react';
import { Video } from 'lucide-react';
import { BrushBorder } from '../ui/BrushBorder';
import { motion } from 'framer-motion';

export const YouTubePromo: React.FC = () => {
  return (
    <BrushBorder>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
            Subscribe to Our YouTube Channel
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Stay updated with our latest videos, lectures, and Islamic content. 
            We regularly post authentic knowledge based on reliable hadith.
          </p>
          <motion.a
            href="https://www.youtube.com/@abuyusufaalhamdy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Video className="w-5 h-5 mr-2" />
            Subscribe Now
          </motion.a>
        </div>

        <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=UUoXzWPTne8dHYrftHpdIopw"
              title="Abu Yusuf Alhamdy YouTube Channel"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </BrushBorder>
  );
};