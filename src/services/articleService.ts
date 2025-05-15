import { Article } from '../types';

// Sample articles data
const articles: Article[] = [
  {
    id: 1,
    title: 'The Importance of Authentic Hadiths in Islamic Jurisprudence',
    excerpt: 'Understanding the role of verified hadiths in establishing Islamic rulings and their significance in the Salafi methodology.',
    author: 'Abu Yusuf Alhamdy',
    date: '2023-07-15',
    readTime: '8 min read',
    imageUrl: 'https://images.pexels.com/photos/5257664/pexels-photo-5257664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Full article content here...'
  },
  {
    id: 2,
    title: 'Distinguishing Between Sahih and Da\'if Narrations',
    excerpt: 'A comprehensive guide to understanding the science of hadith authentication and the methodology of classification.',
    author: 'Abu Yusuf Alhamdy',
    date: '2023-08-23',
    readTime: '12 min read',
    imageUrl: 'https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Full article content here...'
  },
  {
    id: 3,
    title: 'The Path of the Salaf in Understanding Tawhid',
    excerpt: 'Exploring the methodology of the righteous predecessors in comprehending and implementing the concept of Divine Oneness.',
    author: 'Abu Yusuf Alhamdy',
    date: '2023-09-10',
    readTime: '10 min read',
    imageUrl: 'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Full article content here...'
  },
  {
    id: 4,
    title: 'The Significance of Isnad in Preserving Islamic Knowledge',
    excerpt: 'How the chain of narration became the backbone of Islamic scholarship and preserved authentic knowledge through generations.',
    author: 'Abu Yusuf Alhamdy',
    date: '2023-10-17',
    readTime: '15 min read',
    imageUrl: 'https://images.pexels.com/photos/2833993/pexels-photo-2833993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Full article content here...'
  },
  {
    id: 5,
    title: 'Understanding Bidah: Innovation in Religious Matters',
    excerpt: 'A detailed explanation of religious innovation, its categories, and the stance of scholars regarding new matters in worship.',
    author: 'Abu Yusuf Alhamdy',
    date: '2023-11-05',
    readTime: '9 min read',
    imageUrl: 'https://images.pexels.com/photos/6045388/pexels-photo-6045388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Full article content here...'
  }
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticleById(id: number): Article | undefined {
  return articles.find(article => article.id === id);
}