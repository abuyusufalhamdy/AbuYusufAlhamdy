import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { useTheme } from '../../contexts/ThemeContext';
import { fetchVideos } from '../../utils/youtubeApi';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoGridProps {
  searchQuery: string;
}

const VideoGrid: React.FC<VideoGridProps> = ({ searchQuery }) => {
  const { isDayMode } = useTheme();
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        const { items, nextPageToken } = await fetchVideos('', searchQuery);
        setVideos(items);
        setNextPageToken(nextPageToken);
        setError(null);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, [searchQuery]);

  const loadMoreVideos = async () => {
    if (!nextPageToken) return;
    
    try {
      const { items, nextPageToken: newNextPageToken } = await fetchVideos(nextPageToken, searchQuery);
      setVideos(prev => [...prev, ...items]);
      setNextPageToken(newNextPageToken);
    } catch (err) {
      console.error('Error fetching more videos:', err);
      setError('Failed to load more videos. Please try again later.');
    }
  };

  if (loading && videos.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ff]"></div>
      </div>
    );
  }

  if (error && videos.length === 0) {
    return (
      <div className="text-center p-4 border border-red-500 rounded max-w-xl mx-auto">
        <p>{error}</p>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center p-4">
        <p className="text-xl">No videos found. Try a different search.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      
      {nextPageToken && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreVideos}
            className={`py-2 px-6 rounded ${
              isDayMode 
                ? 'bg-[#005555] hover:bg-[#003f3f] text-white'
                : 'bg-[#0ff] hover:bg-[#00cc99] text-black'
            } transition-colors`}
          >
            Load More Videos
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;