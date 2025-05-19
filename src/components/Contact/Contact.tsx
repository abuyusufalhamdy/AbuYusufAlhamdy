import React from 'react';
import { Mail } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDayMode } = useTheme();
  
  return (
    <div className="section min-h-screen py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Contact
      </h1>
      
      <div className="max-w-xl mx-auto">
        <div className={`p-6 rounded-lg text-center ${
          isDayMode 
            ? 'bg-white/50 shadow-md'
            : 'bg-black/20 shadow-md'
        }`}>
          <p className="text-lg mb-6">
            Feel free to reach out with any questions, suggestions, or just to say hello!
          </p>
          
          <a
            href="mailto:abuyusufalhamdy@gmail.com"
            className={`inline-flex items-center gap-2 py-3 px-6 rounded-lg text-lg ${
              isDayMode 
                ? 'text-[#005555] hover:text-[#003f3f]'
                : 'text-[#0ff] hover:text-[#00cc99]'
            } transition-colors`}
          >
            <Mail size={24} />
            <span>Send an email to abuyusufalhamdy@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;