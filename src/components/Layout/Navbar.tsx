import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDayMode } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
    window.location.hash = section;
  };

  return (
    <nav className={`flex items-center justify-center p-5 sticky top-0 z-10 ${isDayMode ? 'bg-white/80' : 'bg-black/80'} backdrop-blur-sm`}>
      <div className="absolute left-5">
        <span className={`text-2xl font-bold ${isDayMode ? 'text-[#005555]' : 'text-[#0ff]'}`}>
          Abu Yusuf
        </span>
      </div>
      
      <button 
        className={`md:hidden absolute right-5 ${isDayMode ? 'text-[#005555]' : 'text-[#0ff]'}`}
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>
      
      <div 
        className={`nav-menu ${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-[70px] md:top-0 left-0 w-full md:w-auto ${isDayMode ? 'bg-white/90 md:bg-transparent' : 'bg-black/90 md:bg-transparent'} md:p-0 p-5`}
      >
        <a 
          href="#home" 
          onClick={() => handleSectionChange('home')} 
          className={`${activeSection === 'home' ? (isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]') : (isDayMode ? 'text-[#005555]' : 'text-[#0ff]')} mx-4 my-2 md:my-0 uppercase font-medium hover:${isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]'} transition-colors`}
        >
          Home
        </a>
        <a 
          href="#quran" 
          onClick={() => handleSectionChange('quran')} 
          className={`${activeSection === 'quran' ? (isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]') : (isDayMode ? 'text-[#005555]' : 'text-[#0ff]')} mx-4 my-2 md:my-0 uppercase font-medium hover:${isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]'} transition-colors`}
        >
          Read Qur'an
        </a>
        <a 
          href="#videos" 
          onClick={() => handleSectionChange('videos')} 
          className={`${activeSection === 'videos' ? (isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]') : (isDayMode ? 'text-[#005555]' : 'text-[#0ff]')} mx-4 my-2 md:my-0 uppercase font-medium hover:${isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]'} transition-colors`}
        >
          All Videos
        </a>
        <a 
          href="#donate" 
          onClick={() => handleSectionChange('donate')} 
          className={`${activeSection === 'donate' ? (isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]') : (isDayMode ? 'text-[#005555]' : 'text-[#0ff]')} mx-4 my-2 md:my-0 uppercase font-medium hover:${isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]'} transition-colors`}
        >
          Donate
        </a>
        <a 
          href="#contact" 
          onClick={() => handleSectionChange('contact')} 
          className={`${activeSection === 'contact' ? (isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]') : (isDayMode ? 'text-[#005555]' : 'text-[#0ff]')} mx-4 my-2 md:my-0 uppercase font-medium hover:${isDayMode ? 'text-[#003f3f]' : 'text-[#00cc99]'} transition-colors`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;