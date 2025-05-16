import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const VideoDetail: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [title, setTitle] = useState('Video');
  
  useEffect(() => {
    // We would ideally fetch the video details here
    // For now, we'll just use the videoId
    document.title = `Video - Abu Yusuf Alhamdy`;
    
    return () => {
      document.title = 'Abu Yusuf Alhamdy';
    };
  }, [videoId]);

  if (!videoId) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">Video not found</p>
        <Link to="/videos" className="text-primary-500 mt-4 inline-block">
          Back to Videos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Link 
          to="/videos" 
          className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Videos
        </Link>
        
        <YouTubeEmbed videoId={videoId} title={title} className="mb-6" />
        
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-xl md:text-2xl font-medium text-white dark:text-white">
            {title}
          </h1>
          
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            Watch on YouTube
            <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoDetail;