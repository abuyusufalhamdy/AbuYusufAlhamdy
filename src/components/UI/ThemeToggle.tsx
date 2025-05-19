import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDayMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 z-20 flex items-center gap-2 py-2 px-4 rounded-full shadow-lg transition-colors ${
        isDayMode ? 'bg-[#005555] text-white' : 'bg-[#0ff] text-black'
      }`}
    >
      {isDayMode ? <Moon size={16} /> : <Sun size={16} />}
      <span className="text-sm">{isDayMode ? 'Night Mode' : 'Day Mode'}</span>
    </button>
  );
};

export default ThemeToggle;