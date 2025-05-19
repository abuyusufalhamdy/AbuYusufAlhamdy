import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';
import VideoGrid from './VideoGrid';
import { useTheme } from '../../contexts/ThemeContext';

const Videos: React.FC = () => {
  const { isDayMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="section min-h-screen py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        All Videos
      </h1>
      
      <SearchBar onSearch={handleSearch} />
      <VideoGrid searchQuery={searchQuery} />
    </div>
  );
};

export default Videos;