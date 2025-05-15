import React from 'react';
import { Article } from '../../types';
import { formatDate } from '../../lib/utils';
import { BrushBorder } from '../ui/BrushBorder';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleDetailProps {
  article: Article;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  if (!article) return null;

  return (
    <BrushBorder>
      <article className="max-w-3xl mx-auto py-6">
        <Link to="/articles" className="inline-flex items-center text-blue-800 dark:text-blue-400 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
          <span>{article.author}</span>
          <span className="mx-2">·</span>
          <span>{formatDate(article.date)}</span>
          <span className="mx-2">·</span>
          <span>{article.readTime}</span>
        </div>
        
        <div className="mb-8">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris euismod, nisi vel tincidunt ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl. Nulla facilisi. Mauris euismod, nisi vel tincidunt ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
          </p>
          <p>
            Aliquam erat volutpat. Suspendisse potenti. Donec auctor, nisl eget ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl. Nulla facilisi. Mauris euismod, nisi vel tincidunt ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
          </p>
          <h2>The Importance of Authentic Sources</h2>
          <p>
            Aliquam erat volutpat. Suspendisse potenti. Donec auctor, nisl eget ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl. Nulla facilisi. Mauris euismod, nisi vel tincidunt ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris euismod, nisi vel tincidunt ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl. Nulla facilisi. Mauris euismod, nisi vel tincidunt ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
          </p>
          <blockquote>
            "The search for authentic knowledge should be the primary concern of every Muslim seeking to understand their religion."
          </blockquote>
          <p>
            Aliquam erat volutpat. Suspendisse potenti. Donec auctor, nisl eget ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl. Nulla facilisi. Mauris euismod, nisi vel tincidunt ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl vel nisl.
          </p>
        </div>
      </article>
    </BrushBorder>
  );
};