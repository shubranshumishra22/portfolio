export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, opportunities, or partnerships.
                Feel free to reach out using the form or through my social profiles.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a href="mailto:shubranshumishra22@gmail.com" className="text-gray-400 hover:text-green-400 transition">
                      shubranshumishra22@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                <div className="mr-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <a href="tel:+919123691604" className="text-gray-400 hover:text-green-400 transition">
                    +91 9123691604
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <form>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-green-400 transition"
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-green-400 transition"
                    placeholder="Your Email" 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-green-400 transition"
                  placeholder="Subject" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-black border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:border-green-400 transition"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}