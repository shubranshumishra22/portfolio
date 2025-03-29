import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  // Check if user has dark mode preference
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

  // Apply dark mode class to the document
  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
}