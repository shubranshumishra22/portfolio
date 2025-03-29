export default function About() {
    return (
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            About <span className="text-green-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-white mb-4">Electronics & Communication Engineer</h3>
              <p className="text-gray-300 mb-4">
                I'm an ECE undergrad at SRM Institute of Science and Technology, passionate about blending hardware knowledge with software expertise.
              </p>
              <p className="text-gray-300 mb-6">
                With a focus on AI, Machine Learning, and Full-Stack Development, I create solutions that bridge the gap between 
                cutting-edge technology and practical applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xl font-medium text-green-400 mb-2">Education</h4>
                  <p className="text-gray-300">
                    B.Tech in Electronics and Communication Engineering
                    <span className="block text-gray-400">CGPA: 8.6/10</span>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-green-400 mb-2">Interests</h4>
                  <ul className="text-gray-300 list-disc list-inside">
                    <li>Machine Learning</li>
                    <li>Full-Stack Development</li>
                    <li>IoT & Robotics</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href="mailto:shubranshumishra22@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Email</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 border-2 border-green-400/50 rounded-full"></div>
                <div className="absolute inset-4 bg-gray-900 rounded-full overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-4xl font-bold text-green-400">
                      <img
                        src="app/welcome/profileimage.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }