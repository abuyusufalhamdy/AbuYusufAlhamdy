import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Video, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from '../../context/SidebarContext';
import { cn } from '../../lib/utils';

export const Sidebar: React.FC = () => {
  const { isOpen, toggle, close } = useSidebar();
  
  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: { 
      x: '-100%',
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  const linkClass = "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40";
  const activeLinkClass = "bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100";

  const links = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/articles', icon: <BookOpen size={20} />, label: 'Articles' },
    { to: '/videos', icon: <Video size={20} />, label: 'Videos' },
    { to: '/contact', icon: <Mail size={20} />, label: 'Contact Us' }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={toggle}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black z-40"
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-xl z-40",
          "lg:relative lg:shadow-none",
          isOpen ? "w-64" : "w-0 lg:w-64"
        )}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="h-full flex flex-col p-4 overflow-y-auto">
          <div className="space-y-8">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => cn(
                    linkClass,
                    isActive && activeLinkClass
                  )}
                  onClick={() => {
                    // Close sidebar on mobile after navigation
                    if (window.innerWidth < 1024) {
                      close();
                    }
                  }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
            
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <a 
                href="https://www.youtube.com/@abuyusufaalhamdy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 hover:underline"
              >
                <Video size={16} />
                <span>Subscribe to YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};