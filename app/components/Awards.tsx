export default function Awards() {
    const awards = [
      {
        title: "Research Paper Accepted",
        description: "\"Robotic Plant Health Monitoring and Disease Control System\" accepted at ICTIS 2025 Bangkok for oral presentation and publication in Springer LNNS series.",
        icon: "🏆"
      },
      {
        title: "NPTEL Certifications",
        description: "Python for Data Science, Database Management Systems (DBMS).",
        icon: "🎓"
      },
      {
        title: "Udemy Full-Stack Development Certification",
        description: "Completed comprehensive course on modern web development technologies.",
        icon: "🌐"
      },
      {
        title: "Finalist in HackTrix Hackathon",
        description: "Organized by IEEE Club, SRMIST.",
        icon: "💻"
      },
      {
        title: "Winner of NASA Space Settlement Design Contest",
        description: "Global 1st Place achievement.",
        icon: "🚀"
      }
    ];
  
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Awards & <span className="text-green-400">Achievements</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-400/30"></div>
              
              <div className="space-y-12">
                {awards.map((award, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1"></div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-xl">
                        {award.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className={`bg-black p-6 rounded-lg shadow-lg border border-gray-800 mx-6 ${index % 2 === 0 ? 'text-right' : ''}`}>
                        <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
                        <p className="text-gray-400">{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }