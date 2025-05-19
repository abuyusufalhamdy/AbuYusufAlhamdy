import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const NeonGlow: React.FC = () => {
  const { isDayMode } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Initial position
    setPosition({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight / 2
    });
    
    // Animation interval
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 2
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`neon-glow fixed w-[300px] h-[300px] rounded-full blur-[50px] opacity-50 transition-all duration-[5s] ease-in-out animate-pulse z-[-1]`}
      style={{
        background: isDayMode 
          ? 'radial-gradient(circle, rgba(0, 85, 85, 0.5), transparent 70%)' 
          : 'radial-gradient(circle, rgba(0, 255, 255, 0.5), transparent 70%)',
        left: `${position.x - 150}px`,
        top: `${position.y - 150}px`,
        transition: 'background 0.5s, transform 8s, left 8s, top 8s',
      }}
    />
  );
};

export default NeonGlow;