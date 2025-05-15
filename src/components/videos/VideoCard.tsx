import React from 'react';
import { YouTubeVideo } from '../../types';
import { formatDate } from '../../lib/utils';
import { motion } from 'framer-motion';

interface VideoCardProps {
  video: YouTubeVideo;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <a 
        href={`https://www.youtube.com/watch?v=${video.id}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-lg mb-3">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
      <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
        {video.title}
      </h3>
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>{formatDate(video.publishedAt)}</span>
        <div className="flex items-center space-x-2">
          {video.language && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
              {video.language}
            </span>
          )}
          {video.speaker && (
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded text-xs text-blue-800 dark:text-blue-200">
              {video.speaker}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};