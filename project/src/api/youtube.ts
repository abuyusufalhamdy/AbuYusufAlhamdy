import { YouTubeVideo } from '../types';

const API_KEY = 'AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng';
const CHANNEL_ID = 'UCoXzWPTne8dHYrftHpdIopw';

export async function fetchLatestVideo(): Promise<YouTubeVideo | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1&type=video`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const item = data.items[0];
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        channelTitle: item.snippet.channelTitle,
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching latest video:', error);
    return null;
  }
}

export async function fetchAllVideos(pageToken = ''): Promise<{videos: YouTubeVideo[], nextPageToken?: string}> {
  try {
    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.append('key', API_KEY);
    url.searchParams.append('channelId', CHANNEL_ID);
    url.searchParams.append('part', 'snippet,id');
    url.searchParams.append('order', 'date');
    url.searchParams.append('maxResults', '12');
    url.searchParams.append('type', 'video');
    
    if (pageToken) {
      url.searchParams.append('pageToken', pageToken);
    }
    
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const videos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnailUrl: item.snippet.thumbnails.high.url,
        channelTitle: item.snippet.channelTitle,
      }));
      
      return {
        videos,
        nextPageToken: data.nextPageToken,
      };
    }
    
    return { videos: [] };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return { videos: [] };
  }
}