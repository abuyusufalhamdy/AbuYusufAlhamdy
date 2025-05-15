import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface BrushBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const BrushBorder: React.FC<BrushBorderProps> = ({ children, className }) => {
  return (
    <div className={cn('relative p-1', className)}>
      {/* Top border */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1 bg-blue-900 dark:bg-blue-700"
        style={{ 
          borderRadius: '2px',
          clipPath: 'polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)' 
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Right border */}
      <motion.div 
        className="absolute top-0 right-0 bottom-0 w-1 bg-blue-900 dark:bg-blue-700"
        style={{ 
          borderRadius: '2px',
          clipPath: 'polygon(0% 3%, 100% 0%, 100% 100%, 0% 97%)' 
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      />
      
      {/* Bottom border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900 dark:bg-blue-700"
        style={{ 
          borderRadius: '2px',
          clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)' 
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      
      {/* Left border */}
      <motion.div 
        className="absolute top-0 left-0 bottom-0 w-1 bg-blue-900 dark:bg-blue-700"
        style={{ 
          borderRadius: '2px',
          clipPath: 'polygon(0% 0%, 100% 3%, 100% 97%, 0% 100%)' 
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      />
      
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};