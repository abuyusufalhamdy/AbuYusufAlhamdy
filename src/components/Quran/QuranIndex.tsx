import React from 'react';
import { surahNames } from '../../data/quranData';
import { useTheme } from '../../contexts/ThemeContext';

interface QuranIndexProps {
  onSelectSurah: (surahNumber: number) => void;
}

const QuranIndex: React.FC<QuranIndexProps> = ({ onSelectSurah }) => {
  const { isDayMode } = useTheme();
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
      {surahNames.map((name, index) => (
        <a
          key={index}
          href={`#quran/surah-${index + 1}`}
          onClick={(e) => {
            e.preventDefault();
            onSelectSurah(index + 1);
          }}
          className={`surah-link p-4 text-center rounded-lg transition-all transform hover:scale-105 ${
            isDayMode 
              ? 'bg-white/50 border border-[#005555] text-[#005555] hover:shadow-[0_0_15px_#005555]' 
              : 'bg-black/30 border border-[#0ff] text-[#0ff] hover:shadow-[0_0_15px_#0ff]'
          }`}
        >
          <div className="font-arabic text-lg">{name}</div>
          <div className="text-sm mt-1">{index + 1}</div>
        </a>
      ))}
    </div>
  );
};

export default QuranIndex;