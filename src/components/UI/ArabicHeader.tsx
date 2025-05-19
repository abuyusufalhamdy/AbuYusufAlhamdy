import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ArabicHeaderProps {
  text: string;
  className?: string;
}

const ArabicHeader: React.FC<ArabicHeaderProps> = ({ text, className = '' }) => {
  const { isDayMode } = useTheme();
  
  return (
    <div 
      className={`font-arabic text-center ${isDayMode ? 'text-[#005555]' : 'text-[#0ff]'} ${isDayMode ? 'shadow-[0_0_10px_#005555]' : 'shadow-[0_0_10px_#0ff]'} ${className}`}
      style={{ direction: 'rtl' }}
    >
      {text}
    </div>
  );
};

export default ArabicHeader;