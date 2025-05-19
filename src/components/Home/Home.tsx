import React, { useEffect, useState } from 'react';
import ArabicHeader from '../UI/ArabicHeader';
import LatestVideo from './LatestVideo';
import { useTheme } from '../../contexts/ThemeContext';

const Home: React.FC = () => {
  const { isDayMode } = useTheme();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="section min-h-screen flex flex-col items-center justify-start pt-10 px-4">
      <ArabicHeader text="بسم الله الرحمن الرحيم" className="text-2xl md:text-3xl mb-2" />
      <ArabicHeader text="السلام عليكم ورحمة الله وبركاته" className="text-xl md:text-2xl mb-6" />
      
      <div className="home-text text-center">
        <div 
          className={`transform ${animate ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} transition-all duration-1000 text-xl md:text-2xl uppercase`}
        >
          Welcome to
        </div>
        
        <div 
          className={`transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 delay-300 text-3xl md:text-4xl my-3 font-bold ${isDayMode ? 'text-[#005555]' : 'text-[#0ff]'}`}
        >
          Abu Yusuf Alhamdy's
        </div>
        
        <div 
          className={`transform ${animate ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} transition-all duration-1000 delay-600 text-xl md:text-2xl uppercase`}
        >
          Website
        </div>
      </div>
      
      <div className="mt-10 md:mt-16 w-full max-w-3xl">
        <LatestVideo />
      </div>
    </div>
  );
};

export default Home;