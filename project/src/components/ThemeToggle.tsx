import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      className="fixed bottom-6 right-6 p-3 rounded-full bg-dark-800/80 dark:bg-dark-800/80 backdrop-blur-sm border border-primary-500/30 shadow-lg shadow-primary-500/10 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-primary-300" />
      ) : (
        <Moon className="w-5 h-5 text-primary-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;