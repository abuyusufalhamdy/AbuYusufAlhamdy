import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="videos" element={<Videos />} />
            <Route path="videos/:videoId" element={<VideoDetail />} />
            <Route path="articles" element={<Articles />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;