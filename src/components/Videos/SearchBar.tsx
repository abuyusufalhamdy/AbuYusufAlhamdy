import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { isDayMode } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(inputValue.trim());
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search by topic or speaker name..."
          className={`flex-grow py-2 px-4 rounded ${
            isDayMode 
              ? 'bg-transparent border border-[#005555] text-black placeholder-gray-500'
              : 'bg-transparent border border-[#0ff] text-white placeholder-gray-400'
          } focus:outline-none focus:ring-2 ${
            isDayMode ? 'focus:ring-[#005555]' : 'focus:ring-[#0ff]'
          }`}
        />
        <button
          type="submit"
          className={`py-2 px-4 rounded flex items-center justify-center gap-2 ${
            isDayMode 
              ? 'bg-[#005555] hover:bg-[#003f3f] text-white'
              : 'bg-[#0ff] hover:bg-[#00cc99] text-black'
          } transition-colors`}
        >
          <Search size={18} />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;