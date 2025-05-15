import React from 'react';
import { Article } from '../../types';
import { Link } from 'react-router-dom';
import { formatDate } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.article 
      className="border-b border-gray-200 dark:border-gray-800 py-8 first:pt-0 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <Link to={`/articles/${article.id}`} className="group">
            <h2 className="text-xl font-bold mb-3 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
              {article.title}
            </h2>
          </Link>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span>{article.author}</span>
            <span className="mx-2">·</span>
            <span>{formatDate(article.date)}</span>
            <span className="mx-2">·</span>
            <span>{article.readTime}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {article.excerpt}
          </p>
          <Link 
            to={`/articles/${article.id}`} 
            className="text-blue-800 dark:text-blue-400 hover:underline font-medium"
          >
            Read more →
          </Link>
        </div>
        <div className="md:w-1/3">
          <Link to={`/articles/${article.id}`} className="block overflow-hidden rounded-lg">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};