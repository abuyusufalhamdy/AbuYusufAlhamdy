import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import VideoCard from '../components/VideoCard';
import { fetchAllVideos } from '../api/youtube';
import { YouTubeVideo } from '../types';
import { ChevronDown } from 'lucide-react';

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(undefined);
  const [loadingMore, setLoadingMore] = useState(false);
  
  useEffect(() => {
    const getVideos = async () => {
      try {
        const result = await fetchAllVideos();
        setVideos(result.videos);
        setNextPageToken(result.nextPageToken);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getVideos();
  }, []);
  
  const loadMoreVideos = async () => {
    if (!nextPageToken || loadingMore) return;
    
    setLoadingMore(true);
    try {
      const result = await fetchAllVideos(nextPageToken);
      setVideos(prev => [...prev, ...result.videos]);
      setNextPageToken(result.nextPageToken);
    } catch (error) {
      console.error('Error fetching more videos:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-3 font-display">
          All Videos
        </h1>
        <p className="text-gray-300 dark:text-gray-300 mb-4">
          Browse through all videos from Abu Yusuf Alhamdy's YouTube channel
        </p>
        <div className="h-1 w-20 bg-primary-500/30 rounded-full"></div>
      </motion.div>
      
      {loading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
        </div>
      ) : videos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 dark:text-gray-400">No videos found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          
          {nextPageToken && (
            <div className="mt-12 text-center">
              <motion.button
                className="inline-flex items-center px-6 py-3 bg-primary-600/20 hover:bg-primary-600/30 text-primary-300 rounded-full"
                onClick={loadMoreVideos}
                disabled={loadingMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loadingMore ? (
                  <span className="flex items-center">
                    <div className="w-5 h-5 border-2 border-primary-500/20 border-t-primary-300 rounded-full animate-spin mr-2"></div>
                    Loading...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Load More
                    <ChevronDown className="ml-2 w-5 h-5" />
                  </span>
                )}
              </motion.button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Videos;