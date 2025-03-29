export default function Hero() {
    return (
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-black bg-opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-green-400">Shubranshu Shekhar</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Electronics & Communication Engineer with a passion for Machine Learning and Web Development
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Building innovative solutions with AI, ML, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="projects" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition">
                View Projects
              </a>
              <a href="contact" className="px-6 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-md border border-white/30 transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </div>
      </section>
    );
  }