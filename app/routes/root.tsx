import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '../welcome/welcome';
import Home from './home';

export default function Root() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    } else {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome isDarkMode={isDarkMode} />} />
        <Route 
          path="/home" 
          element={<Home />} 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
