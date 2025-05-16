import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/logo.png" 
        alt="Abu Yusuf Alhamdy" 
        className="w-full h-full object-contain"
      />
    </Link>
  );
};

export default Logo;