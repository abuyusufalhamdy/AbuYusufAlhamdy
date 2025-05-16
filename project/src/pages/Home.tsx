import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { fetchLatestVideo } from '../api/youtube';
import { YouTubeVideo } from '../types';
import { ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  const [latestVideo, setLatestVideo] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getLatestVideo = async () => {
      try {
        const video = await fetchLatestVideo();
        setLatestVideo(video);
      } catch (error) {
        console.error('Error fetching latest video:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getLatestVideo();
  }, []);
  
  // Text animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const textItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="mb-16">
        <motion.div 
          className="flex flex-col items-start mb-12"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-primary-400 font-light mb-2 ml-1 font-display"
            variants={textItem}
          >
            Welcome to
          </motion.h2>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white dark:text-white font-display tracking-tight animate-glow relative z-10"
            variants={textItem}
          >
            Abu Yusuf Alhamdy's
          </motion.h1>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl text-primary-400 font-light font-display ml-auto -mt-1"
            variants={textItem}
          >
            website
          </motion.h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12"
        >
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-medium text-white dark:text-white mb-3 flex items-center">
              Latest Video
              <div className="ml-3 h-2 w-2 rounded-full bg-primary-500 animate-pulse"></div>
            </h3>
            <div className="h-1 w-20 bg-primary-500/30 rounded-full"></div>
          </div>
          
          {loading ? (
            <div className="w-full aspect-video bg-dark-800/70 rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
            </div>
          ) : latestVideo ? (
            <div>
              <YouTubeEmbed videoId={latestVideo.id} title={latestVideo.title} />
              <div className="mt-4">
                <h4 className="text-lg text-white dark:text-white font-medium mb-2">{latestVideo.title}</h4>
                <p className="text-sm text-gray-300 dark:text-gray-300 mb-3 line-clamp-2">
                  {latestVideo.description}
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Watch on YouTube
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-video bg-dark-800/70 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">No videos found</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;