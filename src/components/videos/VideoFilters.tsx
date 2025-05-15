import React from 'react';

interface VideoFiltersProps {
  speakers: string[];
  languages: string[];
  selectedSpeaker: string;
  selectedLanguage: string;
  onSpeakerChange: (speaker: string) => void;
  onLanguageChange: (language: string) => void;
}

export const VideoFilters: React.FC<VideoFiltersProps> = ({
  speakers,
  languages,
  selectedSpeaker,
  selectedLanguage,
  onSpeakerChange,
  onLanguageChange
}) => {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-1/2">
        <label htmlFor="speaker-filter" className="block text-sm font-medium mb-2">
          Filter by Speaker
        </label>
        <select
          id="speaker-filter"
          value={selectedSpeaker}
          onChange={(e) => onSpeakerChange(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
        >
          <option value="">All Speakers</option>
          {speakers.map((speaker) => (
            <option key={speaker} value={speaker}>
              {speaker}
            </option>
          ))}
        </select>
      </div>
      
      <div className="w-full sm:w-1/2">
        <label htmlFor="language-filter" className="block text-sm font-medium mb-2">
          Filter by Language
        </label>
        <select
          id="language-filter"
          value={selectedLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
        >
          <option value="">All Languages</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};