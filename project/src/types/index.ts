export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  channelTitle: string;
}

export interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}