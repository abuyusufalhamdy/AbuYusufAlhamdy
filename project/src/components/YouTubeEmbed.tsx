import React from 'react';
import { motion } from 'framer-motion';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  className = '',
}) => {
  return (
    <motion.div
      className={`aspect-video w-full overflow-hidden rounded-lg border border-primary-500/30 shadow-lg shadow-primary-500/5 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
};

export default YouTubeEmbed;