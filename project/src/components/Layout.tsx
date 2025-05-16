import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-neon-corner dark:bg-neon-corner opacity-80 dark:opacity-80 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-neon-corner-light light:bg-neon-corner-light opacity-0 light:opacity-80 blur-3xl"></div>
      </div>
      
      <Navbar />
      
      <motion.main 
        className="pt-20 pb-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.main>
      
      <ThemeToggle />
    </div>
  );
};

export default Layout;