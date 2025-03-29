export default function Projects() {
  const projects = [
    {
      title: "Wafer Sensor Fault Detection System",
      description: "An automated fault detection system using Machine Learning for wafer quality prediction in semiconductor manufacturing.",
      technologies: ["Machine Learning", "Random Forest", "HTML/CSS/JS"],
      achievements: [
        "Implemented feature selection and an automated pipeline for real-time quality assessment",
        "Achieved 97.37% accuracy using Random Forest, improving defect detection",
        "Built and deployed a web interface for user-friendly data upload and results visualization"
      ],
      link: "",
      image: "/api/placeholder/600/400"
    },
    {
      title: "WellTech - Health Prediction Platform",
      description: "A disease prediction platform using Machine Learning, trained on medical datasets to predict conditions based on symptoms.",
      technologies: ["Machine Learning", "MySQL", "PHP", "Google Maps API"],
      achievements: [
        "Integrated MySQL for database management and PHP for backend logic",
        "Added Google Maps API for locating nearby hospitals and testing labs",
        "Integrated a Mental Health Chatbot for virtual counseling services"
      ],
      link: "#",
      image: "/api/placeholder/600/400"
    },
    {
      title: "PartySwipe – The Ultimate House Party Platform",
      description: "An interactive party discovery platform using Next.js, Node.js, and MongoDB.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Google Maps API"],
      achievements: [
        "Enabled users to switch between Host and Guest modes with a swipe-to-join system",
        "Implemented real-time geolocation-based party discovery via Google Maps API",
        "Integrated seamless UPI payments and AI-driven recommendations with safety features"
      ],
      link: "#",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Robotic Plant Health Monitoring System",
      description: "An IoT-enabled autonomous bot using CNN-based Machine Learning for real-time plant disease detection.",
      technologies: ["IoT", "CNN", "Machine Learning", "Robotics"],
      achievements: [
        "Achieved 99.37% accuracy in plant disease detection",
        "Integrated automated pesticide spraying and IoT-based monitoring",
        "Research paper accepted at ICTIS 2025 Bangkok for oral presentation"
      ],
      link: "#",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Featured <span className="text-green-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all hover:border-green-400/30 hover:shadow-xl hover:shadow-green-400/5">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-800 text-green-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="mb-6 space-y-1">
                  {project.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-gray-400 text-sm flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={project.link} className="inline-flex items-center text-green-400 hover:text-green-300">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
