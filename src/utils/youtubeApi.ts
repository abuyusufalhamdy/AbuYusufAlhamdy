// YouTube API configuration
const API_KEY = 'AIzaSyBxjceYQcKUaSwU12QLeu6meNmuIBunMng';
const CHANNEL_ID = 'UCoXzWPTne8dHYrftHpdIopw';

export const fetchLatestVideo = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch video: ${response.status}`);
    }
    
    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      throw new Error('No videos found');
    }

    const video = data.items[0];
    return {
      id: video.id.videoId,
      title: video.snippet.title
    };
  } catch (err) {
    console.error('Error fetching latest video:', err);
    throw err;
  }
};

export const fetchVideos = async (pageToken = '', query = '') => {
  try {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=12&pageToken=${pageToken}`;
    
    if (query) {
      url += `&q=${encodeURIComponent(query)}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch videos: ${response.status}`);
    }

    const data = await response.json();
    
    return {
      items: data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url
      })),
      nextPageToken: data.nextPageToken || null
    };
  } catch (err) {
    console.error('Error fetching videos:', err);
    throw err;
  }
};