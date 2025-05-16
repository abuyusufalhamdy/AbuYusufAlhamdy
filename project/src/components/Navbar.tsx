import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Film, BookOpen, Mail } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/videos', label: 'Videos', icon: <Film className="w-5 h-5" /> },
    { path: '/articles', label: 'Knowledge', icon: <BookOpen className="w-5 h-5" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-900/80 dark:bg-dark-900/80 border-b border-primary-500/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-3">
          <Logo className="h-12 w-auto" />
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium transition-all duration-200 hover:text-primary-400 flex items-center gap-2 
                  ${isActive 
                    ? 'text-primary-500 border-b-2 border-primary-500' 
                    : 'text-gray-300 dark:text-gray-300 border-b-2 border-transparent'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="md:hidden flex items-center">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-xs transition-all duration-200
                    ${isActive 
                      ? 'text-primary-500' 
                      : 'text-gray-300 dark:text-gray-300'}`
                  }
                >
                  {item.icon}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;