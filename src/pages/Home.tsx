import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedArticles } from '../components/home/FeaturedArticles';
import { YouTubePromo } from '../components/home/YouTubePromo';
import { getArticles } from '../services/articleService';

export const Home: React.FC = () => {
  const articles = getArticles();
  
  return (
    <div>
      <Hero />
      <FeaturedArticles articles={articles} />
      <YouTubePromo />
    </div>
  );
};