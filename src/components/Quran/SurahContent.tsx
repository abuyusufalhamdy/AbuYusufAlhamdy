import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { surahNames } from '../../data/quranData';
import ArabicHeader from '../UI/ArabicHeader';

interface SurahContentProps {
  surahNumber: number;
  onBackToIndex: () => void;
}

interface Ayah {
  text: string;
  numberInSurah: number;
}

interface Surah {
  name: string;
  ayahs: Ayah[];
}

const SurahContent: React.FC<SurahContentProps> = ({ surahNumber, onBackToIndex }) => {
  const { isDayMode } = useTheme();
  const [surah, setSurah] = useState<Surah | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.hafs`);
        if (!response.ok) {
          throw new Error(`Failed to fetch surah: ${response.status}`);
        }
        const data = await response.json();
        setSurah(data.data);
      } catch (err) {
        console.error('Error fetching surah:', err);
        setError('Failed to load Surah. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSurah();
  }, [surahNumber]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0ff]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500">{error}</p>
        <button
          onClick={onBackToIndex}
          className={`mt-4 flex items-center gap-2 py-2 px-4 rounded mx-auto ${
            isDayMode ? 'bg-[#005555] text-white' : 'bg-[#0ff] text-black'
          }`}
        >
          <ArrowLeft size={16} />
          Back to Qur'an Index
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {surah && (
        <div className={`p-6 rounded-lg ${
          isDayMode 
            ? 'bg-white/50 border border-[#005555] shadow-[0_0_20px_#005555]' 
            : 'bg-black/20 border border-[#0ff] shadow-[0_0_20px_#0ff]'
        }`}>
          <ArabicHeader text={`سورة ${surah.name}`} className="text-2xl mb-6" />
          
          <div 
            className="font-quran text-right text-xl leading-relaxed"
            style={{ direction: 'rtl' }}
          >
            {surah.ayahs.map((ayah) => (
              <p key={ayah.numberInSurah} className="mb-4">
                {ayah.text} <span className="inline-block text-sm px-2 py-1 rounded-full bg-opacity-20 bg-gray-500">
                  {ayah.numberInSurah}
                </span>
              </p>
            ))}
          </div>
          
          <button
            onClick={onBackToIndex}
            className={`mt-6 flex items-center gap-2 py-2 px-4 rounded mx-auto ${
              isDayMode ? 'bg-[#005555] hover:bg-[#003f3f] text-white' : 'bg-[#0ff] hover:bg-[#00cc99] text-black'
            } transition-colors`}
          >
            <ArrowLeft size={16} />
            Back to Qur'an Index
          </button>
        </div>
      )}
    </div>
  );
};

export default SurahContent;