import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { isDayMode } = useTheme();
  
  return (
    <div 
      className={`video-card rounded-lg overflow-hidden transition-transform hover:scale-105 ${
        isDayMode 
          ? 'bg-white/5 border border-[#005555]'
          : 'bg-black/10 border border-[#0ff]'
      }`}
    >
      <img 
        src={video.thumbnail} 
        alt={video.title}
        className="w-full aspect-video object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-sm font-medium h-12 overflow-hidden mb-3" title={video.title}>
          {video.title}
        </h3>
        
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-1 text-sm py-1 px-2 rounded ${
            isDayMode 
              ? 'text-[#005555] hover:text-[#003f3f]'
              : 'text-[#0ff] hover:text-[#00cc99]'
          } transition-colors`}
        >
          <ExternalLink size={14} />
          <span>Watch on YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default VideoCard;