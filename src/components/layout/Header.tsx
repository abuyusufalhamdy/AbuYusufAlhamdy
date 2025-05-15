import React from 'react';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';

export const Header: React.FC = () => {
  const { toggle } = useSidebar();
  
  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={toggle}
            className="mr-3 lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          <Logo />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};