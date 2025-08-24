import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const teamMembers = [
    {
      name: "Ehthasham Mustafa",
      role: "Full Stack Developer",
      experience: "3+ years",
      icon:"🧠",
      gradient:"from-cyan-500 to-blue-500",
      expertise : [
        "Web - Development ",
        "Native- App Development",
        "Marketing",
        "Full Stack Development",
      ],
     description:"I’m Ehthasham Mustafa, a passionate Full Stack Developer with a strong focus on building modern, scalable, and user-friendly applications. With expertise in MERN stack, backend architecture, and UI/UX design. My interests also extend into AI development, data-driven systems, and cybersecurity, allowing me to work across diverse technologies with confidence."
    },
    {
      name: "MD.Haneef Siddiqui",
      role: "AI & Machine Learning Specialist",
      experience: "8+ years",
      icon: "👨‍💻",
      gradient: "from-violet-600 to-indigo-600",
      expertise: [
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning Models",
        "AI-Powered Applications"
      ],
      description: "With over 8 years of experience in Artificial Intelligence and Machine Learning, Aamir specializes in building AI-powered applications that enhance decision-making and automation. His work ensures our solutions remain cutting-edge and future-ready."
    },
    {
      name: "MD.Raheem",
      role: "Cybersecurity Expert",
      experience: "7 years",
      icon: "🔐",
      gradient: "from-emerald-600 to-teal-600",
      expertise: [
        "Network Security",
        "Cloud Infrastructure Protection",
        "Ethical Hacking",
        "Penetration Testing"
      ],
      description: "Raheem is our Cybersecurity Specialist, ensuring that all our applications are secure, compliant, and resilient against threats. Her expertise in encryption systems and threat detection frameworks makes her the guardian of our platforms and clients' data."
    },
    {
      name: "Syed Jahangir",
      role: "Data Science & Analytics Engineer",
      experience: "6+ years",
      icon: "📊",
      gradient: "from-blue-600 to-cyan-600",
      expertise: [
        "Big Data Analytics",
        "Predictive Modeling",
        "Machine Learning Algorithms",
        "Data Visualization"
      ],
      description: "Jahangir is a Data Scientist with a strong background in transforming raw data into business insights through advanced statistical modeling. His ability to uncover patterns and trends ensures that our clients make data-driven decisions with confidence."
    },
    {
      name: "Nouman shaik",
      role: "Project Manager",
      experience: "10+ years",
      icon: "👨‍💼",
      gradient: "from-purple-600 to-pink-600",
      expertise: [
        "Project Management",
        "MERN Stack Development",
        "API Development",
        "Scalable System Architecture"
      ],
      description: "Nouman has 10+ years of experience managing and delivering complex software projects. As both a certified project manager and senior full stack developer, she bridges the gap between technical execution and client goals, ensuring projects are delivered on time and with high quality."
    },
    {
      name: "MD. Abdullah",
      role: "UI/UX & Frontend Architect",
      experience: "7 years",
      icon: "🎨",
      gradient: "from-orange-500 to-red-600",
      expertise: [
        "UI/UX Design",
        "React & Next.js",
        "Design Systems",
        "User Journey Optimization"
      ],
      description: "Abdullah is our UI/UX Designer and Frontend Specialist, creating user-friendly, modern, and accessible interfaces. His focus on visual storytelling ensures that our applications deliver a seamless experience for end users."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="pt-20 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Section with Animation */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate technologists, dedicated to delivering innovative solutions 
              that transform businesses through cutting-edge technology and expertise.
            </p>
          </div>

          {/* Mission Statement with Glass Effect */}
          <div className="mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-10 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
                  Our Mission
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with intelligent, secure, and scalable technology solutions 
                  that drive growth and innovation. We combine expertise in AI, cybersecurity, data science, 
                  and full-stack development to create transformative digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Team Grid with Staggered Animation */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Member Header with Custom Gradient */}
                  <div className={`relative bg-gradient-to-r ${member.gradient} p-6 text-white`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative">
                      <div className="text-5xl mb-3 animate-bounce-slow">{member.icon}</div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-sm font-medium">{member.role}</p>
                      <p className="text-white/75 text-xs mt-1 flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        {member.experience} Experience
                      </p>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="relative p-6">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Expertise Tags with Hover Effect */}
                    <div className="space-y-3">
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Key Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:shadow-md transform hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          

          {/* Values Section with Cards */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Pushing boundaries with cutting-edge technology solutions
                </p>
              </div>
              <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Security</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Protecting data and systems with enterprise-grade security
                </p>
              </div>
              <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Delivering quality solutions that exceed expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Add Custom Styles for Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
