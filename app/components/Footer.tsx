export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="py-10 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-white">Shubranshu<span className="text-green-400">.</span></span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <a href="about" className="text-gray-400 hover:text-green-400 transition">About</a>
              <a href="skills" className="text-gray-400 hover:text-green-400 transition">Skills</a>
              <a href="projects" className="text-gray-400 hover:text-green-400 transition">Projects</a>
              <a href="contact" className="text-gray-400 hover:text-green-400 transition">Contact</a>
            </div>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400">
                &copy; {currentYear} Shubranshu Shekhar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }