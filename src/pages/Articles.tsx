import React from 'react';
import { ArticleCard } from '../components/articles/ArticleCard';
import { BrushBorder } from '../components/ui/BrushBorder';
import { getArticles } from '../services/articleService';

export const Articles: React.FC = () => {
  const articles = getArticles();

  return (
    <div>
      <BrushBorder>
        <div className="py-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-blue-100">
            Latest Articles
          </h1>
          <div className="max-w-4xl mx-auto">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </BrushBorder>
    </div>
  );
}