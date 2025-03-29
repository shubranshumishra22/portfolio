import { Link } from 'react-router-dom';
import logoDark from '@/assets/logo-dark.svg';  // Use correct alias path
import logoLight from '@/assets/logo-light.svg';

interface WelcomeProps {
  isDarkMode: boolean;
}

export default function Welcome({ isDarkMode }: WelcomeProps) {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <img 
            src={isDarkMode ? logoDark : logoLight} 
            alt="Shubranshu Shekhar Logo" 
            className="mx-auto h-16 mb-8" 
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to my <span className="text-green-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-300 mb-8">
            Explore my projects, skills, and journey as an Electronics & Communication Engineer with a passion for AI and Web Development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/home" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition"
            >
              Enter Portfolio
            </Link>
            <a 
              href="mailto:shubranshumishra22@gmail.com" 
              className="px-6 py-3 bg-transparent hover:bg-gray-200 text-black dark:text-white font-medium rounded-md border border-gray-300 dark:border-white/30 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg border border-gray-300 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-green-400 mb-4">Latest Achievements</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">Research Paper accepted at ICTIS 2025 Bangkok</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">Winner of NASA Space Settlement Design Contest (Global 1st Place)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span className="text-gray-700 dark:text-gray-300">Finalist in HackTrix Hackathon by IEEE Club, SRMIST</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
