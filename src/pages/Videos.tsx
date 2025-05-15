import React, { useEffect, useState } from 'react';
import { VideoCard } from '../components/videos/VideoCard';
import { VideoFilters } from '../components/videos/VideoFilters';
import { BrushBorder } from '../components/ui/BrushBorder';
import { YouTubeVideo } from '../types';
import { fetchVideos, getUniqueSpeakers, getUniqueLanguages } from '../services/youtubeApi';

export const Videos: React.FC = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<YouTubeVideo[]>([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const fetchedVideos = await fetchVideos();
        setVideos(fetchedVideos);
        setFilteredVideos(fetchedVideos);
      } catch (err) {
        setError('Failed to load videos. Please try again later.');
        console.error('Error loading videos:', err);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  useEffect(() => {
    let filtered = [...videos];

    if (selectedSpeaker) {
      filtered = filtered.filter(video => video.speaker === selectedSpeaker);
    }

    if (selectedLanguage) {
      filtered = filtered.filter(video => video.language === selectedLanguage);
    }

    setFilteredVideos(filtered);
  }, [selectedSpeaker, selectedLanguage, videos]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <BrushBorder>
        <div className="py-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-blue-100">
            Latest Videos
          </h1>
          
          <VideoFilters
            speakers={getUniqueSpeakers(videos)}
            languages={getUniqueLanguages(videos)}
            selectedSpeaker={selectedSpeaker}
            selectedLanguage={selectedLanguage}
            onSpeakerChange={setSelectedSpeaker}
            onLanguageChange={setSelectedLanguage}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
              No videos found matching the selected filters.
            </p>
          )}
        </div>
      </BrushBorder>
    </div>
  );
}