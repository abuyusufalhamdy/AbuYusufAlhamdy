import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { YouTubeVideo } from '../types';

interface VideoCardProps {
  video: YouTubeVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const formattedDate = new Date(video.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <motion.div
      className="rounded-lg overflow-hidden bg-dark-800/50 dark:bg-dark-800/50 border border-primary-500/20 shadow-md hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Link to={`/videos/${video.id}`} className="text-white">
            <PlayCircle className="w-16 h-16 text-primary-500 drop-shadow-glow" />
          </Link>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-base font-medium text-white dark:text-white line-clamp-2 mb-2">
          {video.title}
        </h3>
        
        <p className="text-xs text-gray-400 dark:text-gray-400 mb-3">
          Published: {formattedDate}
        </p>
        
        <div className="flex justify-between items-center">
          <Link
            to={`/videos/${video.id}`}
            className="text-xs inline-flex items-center text-primary-400 hover:text-primary-300"
          >
            <span>Watch</span>
            <PlayCircle className="ml-1 w-3 h-3" />
          </Link>
          
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs inline-flex items-center text-gray-400 hover:text-primary-300"
          >
            <span>YouTube</span>
            <ExternalLink className="ml-1 w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;