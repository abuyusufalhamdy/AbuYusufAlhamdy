import React, { useState, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home/Home';
import Quran from './components/Quran/Quran';
import Videos from './components/Videos/Videos';
import Donate from './components/Donate/Donate';
import Contact from './components/Contact/Contact';
import VisitorCounter from './components/UI/VisitorCounter';
import ThemeToggle from './components/UI/ThemeToggle';
import NeonGlow from './components/UI/NeonGlow';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check if there's a hash in the URL and set the active section accordingly
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    }
    
    // Handle URL changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash) {
        setActiveSection(newHash);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        <NeonGlow />
        
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          {activeSection === 'home' && <Home />}
          {activeSection === 'quran' && <Quran />}
          {activeSection === 'videos' && <Videos />}
          {activeSection === 'donate' && <Donate />}
          {activeSection === 'contact' && <Contact />}
        </main>
        
        <VisitorCounter />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;