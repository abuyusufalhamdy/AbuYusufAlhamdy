import React, { useEffect, useState } from 'react';
import { Youtube } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { fetchLatestVideo } from '../../utils/youtubeApi';

interface VideoData {
  id: string;
  title: string;
}

const LatestVideo: React.FC = () => {
  const { isDayMode } = useTheme();
  const [video, setVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLatestVideo = async () => {
      try {
        setLoading(true);
        const videoData = await fetchLatestVideo();
        setVideo(videoData);
      } catch (err) {
        setError('Failed to load the latest video. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getLatestVideo();
  }, []);

  return (
    <div className="latest-video w-full">
      <h2 className={`text-xl font-semibold mb-4 ${isDayMode ? 'text-[#005555]' : 'text-[#0ff]'}`}>Latest Video</h2>
      
      {loading && (
        <div className="flex justify-center items-center h-64 animate-pulse">
          <p>Loading latest video...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center p-4 border border-red-500 rounded">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && video && (
        <div className={`video-player relative w-full rounded-lg p-4 bg-opacity-10 ${isDayMode ? 'bg-black/5 border border-[#005555] shadow-lg shadow-[#005555]/20' : 'bg-white/5 border border-[#0ff] shadow-lg shadow-[#0ff]/20'}`}>
          <div className="aspect-video">
            <iframe 
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div>
          
          <a 
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 flex items-center justify-center gap-2 py-2 px-4 rounded ${isDayMode ? 'bg-[#005555] hover:bg-[#003f3f] text-white' : 'bg-[#0ff] hover:bg-[#00cc99] text-black'} transition-colors`}
          >
            <Youtube size={18} />
            <span>Watch on YouTube</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default LatestVideo;