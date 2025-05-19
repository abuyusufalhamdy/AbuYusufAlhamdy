import React, { useState } from 'react';
import QuranIndex from './QuranIndex';
import SurahContent from './SurahContent';

const Quran: React.FC = () => {
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);

  const handleSelectSurah = (surahNumber: number) => {
    setSelectedSurah(surahNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToIndex = () => {
    setSelectedSurah(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="section min-h-screen py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Read Qur'an
      </h1>
      
      {selectedSurah ? (
        <SurahContent surahNumber={selectedSurah} onBackToIndex={handleBackToIndex} />
      ) : (
        <QuranIndex onSelectSurah={handleSelectSurah} />
      )}
    </div>
  );
};

export default Quran;