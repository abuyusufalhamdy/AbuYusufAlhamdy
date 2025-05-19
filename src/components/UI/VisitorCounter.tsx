import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const VisitorCounter: React.FC = () => {
  const { isDayMode } = useTheme();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get count from localStorage
    let visitorCount = localStorage.getItem('visitorCount');
    if (!visitorCount) {
      visitorCount = '0';
    }
    
    // Increment count
    const newCount = parseInt(visitorCount) + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setCount(newCount);
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 z-10 font-mono text-xs md:text-sm py-1 px-3 rounded border ${
      isDayMode 
        ? 'bg-white/50 text-[#005555] border-[#005555] shadow-[0_0_5px_#005555]' 
        : 'bg-black/50 text-[#0ff] border-[#0ff] shadow-[0_0_5px_#0ff]'
    }`}>
      Visitors: 
      <span className={`ml-2 inline-block px-2 py-1 rounded ${
        isDayMode 
          ? 'bg-white shadow-[inset_0_0_5px_#005555]' 
          : 'bg-black shadow-[inset_0_0_5px_#0ff]'
      }`}>
        {count.toString().padStart(6, '0')}
      </span>
    </div>
  );
};

export default VisitorCounter;