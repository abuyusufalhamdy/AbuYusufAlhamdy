import axios from 'axios';
import { YouTubeVideo } from '../types';

const API_KEY = 'AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng';
const CHANNEL_ID = 'UCoXzWPTne8dHYrftHpdIopw';

export async function fetchVideos(): Promise<YouTubeVideo[]> {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        params: {
          part: 'snippet',
          channelId: CHANNEL_ID,
          maxResults: 50,
          order: 'date',
          type: 'video',
          key: API_KEY
        }
      }
    );

    // Process the response data
    return response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      // These would ideally come from YouTube video tags or description
      // For now, we'll extract them from the title as a simulation
      speaker: extractSpeaker(item.snippet.title),
      language: detectLanguage(item.snippet.title)
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}

// Function to extract speaker from title (simplified example)
function extractSpeaker(title: string): string {
  const commonSpeakers = ['Abu Yusuf Alhamdy', 'Sheikh Abdullah', 'Imam Ahmad'];
  for (const speaker of commonSpeakers) {
    if (title.includes(speaker)) {
      return speaker;
    }
  }
  return 'Abu Yusuf Alhamdy'; // Default speaker
}

// Function to detect language (simplified example)
function detectLanguage(title: string): string {
  // Check for Arabic script characters
  const arabicPattern = /[\u0600-\u06FF]/;
  if (arabicPattern.test(title)) {
    return 'Arabic';
  }
  return 'English'; // Default to English
}

export function getUniqueSpeakers(videos: YouTubeVideo[]): string[] {
  const speakers = videos.map(video => video.speaker || '');
  return [...new Set(speakers)].filter(Boolean);
}

export function getUniqueLanguages(videos: YouTubeVideo[]): string[] {
  const languages = videos.map(video => video.language || '');
  return [...new Set(languages)].filter(Boolean);
}