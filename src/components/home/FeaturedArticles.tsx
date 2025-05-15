import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types';
import { BrushBorder } from '../ui/BrushBorder';
import { formatDate } from '../../lib/utils';

interface FeaturedArticlesProps {
  articles: Article[];
}

export const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  // Display only the first 3 articles
  const featuredArticles = articles.slice(0, 3);
  
  return (
    <BrushBorder className="mb-8">
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-blue-100">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <div key={article.id} className="group">
              <div className="overflow-hidden rounded-lg mb-3">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {formatDate(article.date)} · {article.readTime}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link 
                  to={`/articles/${article.id}`} 
                  className="text-blue-800 dark:text-blue-400 hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            to="/articles" 
            className="inline-block px-6 py-2 border-2 border-blue-800 dark:border-blue-700 text-blue-800 dark:text-blue-400 font-medium rounded-md hover:bg-blue-800 hover:text-white dark:hover:bg-blue-800 dark:hover:text-white transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </BrushBorder>
  );
};