import React from 'react';
import { Mail, Youtube } from 'lucide-react';
import { BrushBorder } from '../ui/BrushBorder';

export const ContactInfo: React.FC = () => {
  return (
    <BrushBorder className="mb-8">
      <div className="py-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-blue-100">
          Get in Touch
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8 text-gray-700 dark:text-gray-300">
            We'd love to hear from you. Feel free to reach out with any questions, 
            suggestions, or feedback regarding our content or Islamic knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <Mail className="w-6 h-6 text-blue-800 dark:text-blue-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                <a 
                  href="mailto:abuyusufalhamdy@gmail.com" 
                  className="text-blue-800 dark:text-blue-400 hover:underline"
                >
                  abuyusufalhamdy@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <Youtube className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">YouTube</p>
                <a 
                  href="https://www.youtube.com/@abuyusufaalhamdy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-red-600 dark:text-red-400 hover:underline"
                >
                  @abuyusufaalhamdy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrushBorder>
  );
};