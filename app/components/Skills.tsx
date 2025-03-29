export default function Skills() {
    const skillCategories = [
      {
        title: "Languages",
        skills: ["C/C++", "Python", "JavaScript", "TypeScript"]
      },
      {
        title: "Frontend",
        skills: ["HTML", "CSS", "React", "Tailwind", "Next.js"]
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "Mongoose", "DBMS"]
      },
      {
        title: "Data Science",
        skills: ["NumPy", "Pandas", "Matplotlib", "Feature Engineering", "Statistics", "Machine Learning"]
      }
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Technical <span className="text-green-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 transition-all hover:border-green-400/30 hover:shadow-lg hover:shadow-green-400/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">Skills Overview</h3>
            
            <div className="grid gap-6">
              {[
                { name: "Web Development", percentage: 90 },
                { name: "Machine Learning", percentage: 85 },
                { name: "IoT & Hardware", percentage: 75 },
                { name: "Data Analysis", percentage: 80 }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-green-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-300 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }