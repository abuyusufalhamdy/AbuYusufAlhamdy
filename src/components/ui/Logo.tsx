import React from 'react';
import { Bookmark } from 'lucide-react';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={cn('flex items-center font-bold', sizes[size], className)}>
      <Bookmark className="mr-2 h-6 w-6" />
      <span className="text-blue-900 dark:text-blue-100">Abu Yusuf</span>
      <span className="text-blue-700 dark:text-blue-300">Alhamdy</span>
    </div>
  );
};