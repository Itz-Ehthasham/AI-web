import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect, useRef } from 'react';
import { techStack } from '@/data/tech';

export default function Expertise() {
  // Counter animation state
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    support: 0
  });
  
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    
    const targets = {
      experience: 10,
      projects: 100,
      clients: 50,
      support: 24
    };

    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounters({
        experience: Math.floor(targets.experience * easeOutQuart),
        projects: Math.floor(targets.projects * easeOutQuart),
        clients: Math.floor(targets.clients * easeOutQuart),
        support: Math.floor(targets.support * easeOutQuart)
      });

      if (currentStep === steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);
  };
  const coreStrengths = [
    {
      title: "AI Application Development",
      description: "Designing and deploying intelligent applications that leverage the latest advancements in Artificial Intelligence and Machine Learning.",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      lightGradient: "from-purple-100 to-pink-100",
      borderColor: "border-purple-200",
      iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Full Stack & MERN Stack Solutions",
      description: "Proficiency in MongoDB, Express.js, React, Node.js, as well as other modern frameworks and technologies to deliver seamless user experiences.",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-100 to-cyan-100",
      borderColor: "border-blue-200",
      iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Backend Architecture & APIs",
      description: "Building secure, efficient, and scalable backends with clean APIs and integration capabilities.",
      icon: "⚙️",
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-100 to-emerald-100",
      borderColor: "border-green-200",
      iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
    },
    {
      title: "UI/UX Excellence",
      description: "Crafting user-centric interfaces with a strong focus on accessibility, usability, and aesthetic design for high-quality digital experiences.",
      icon: "🎨",
      gradient: "from-orange-500 to-red-500",
      lightGradient: "from-orange-100 to-red-100",
      borderColor: "border-orange-200",
      iconBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
    },
    {
      title: "Enterprise-Grade Applications",
      description: "From startups to large-scale businesses, delivering applications that meet industry standards for security, scalability, and performance.",
      icon: "🏢",
      gradient: "from-indigo-500 to-purple-500",
      lightGradient: "from-indigo-100 to-purple-100",
      borderColor: "border-indigo-200",
      iconBg: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
    },
    {
      title: "AI/ML Solutions",
      description: "Building AI/ML solutions that are scalable, efficient, and can handle large amounts of data.",
      icon: "🔮",
      gradient: "from-purple-500 to-pink-500",
      lightGradient: "from-purple-100 to-pink-100",
      borderColor: "border-purple-200",
      iconBg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      {/* Animated Background Elements
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div> */}
      
      <main className="pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section with Gradient Text */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Our Expertise
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We are a team of highly skilled{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Full Stack Developers
                </span>{" "}
                with{" "}
                <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  5–10+ years of professional experience
                </span>{" "}
                in building robust, scalable, and future-ready digital solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our group of engineers brings together deep expertise across both{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">frontend</span> and{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">backend development</span>, 
                ensuring end-to-end product delivery with precision and quality.
              </p>
            </div>
          </div>

          {/* Core Strengths Section with Colorful Cards */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Our Core Strengths
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreStrengths.map((strength, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className={`relative bg-white dark:bg-gray-800 border-2 ${strength.borderColor} dark:border-gray-700 rounded-3xl p-8`}>
                    {/* Icon with colored background */}
                    <div className={`w-16 h-16 ${strength.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{strength.icon}</span>
                    </div>
                    
                    {/* Title with gradient */}
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${strength.gradient} bg-clip-text text-transparent mb-4`}>
                      {strength.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {strength.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${strength.gradient} opacity-10 rounded-full blur-2xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section with Counting Animation */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">
                <span className="inline-block min-w-[100px]">
                  {counters.experience === 10 ? '5-10' : counters.experience}
                  {counters.experience > 0 && '+'}
                </span>
              </div>
              <div className="text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">
                <span className="inline-block min-w-[100px]">
                  {counters.projects}
                  {counters.projects > 0 && '+'}
                </span>
              </div>
              <div className="text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">
                <span className="inline-block min-w-[100px]">
                  {counters.clients}
                  {counters.clients > 0 && '+'}
                </span>
              </div>
              <div className="text-sm uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold mb-2">
                <span className="inline-block min-w-[100px]">
                  {counters.support === 24 ? '24/7' : counters.support}
                </span>
              </div>
              <div className="text-sm uppercase tracking-wide">Support</div>
            </div>
          </div>

          {/* Bottom Section with Vibrant Gradient */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="relative bg-black/30 backdrop-blur-sm p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Delivering Excellence at Every Step
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
                Our collective expertise allows us to deliver solutions that are not only{" "}
                <span className="font-bold text-yellow-300">technically sound</span> but also aligned with the{" "}
                <span className="font-bold text-cyan-300">business goals</span> of our clients. 
                Whether it's building <span className="font-bold text-green-300">AI-powered platforms</span>, 
                developing <span className="font-bold text-orange-300">end-to-end full stack applications</span>, 
                or designing intuitive <span className="font-bold text-pink-300">UI/UX experiences</span>, 
                our team ensures innovation and excellence at every step.
              </p>
            </div>
          </div>

          {/* Technologies Section with Icons and Categories */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                Technologies We Master
              </span>
            </h2>
            
            {/* Technology Categories */}
            <div className="space-y-12">
              {/* Frontend Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {techStack.filter(tech => tech.category === 'frontend').slice(0, 6).map((tech, index) => {
                    const Icon = tech.icon;
                    // Check if Icon is a valid component
                    if (!Icon || typeof Icon !== 'function') {
                      return (
                        <div
                          key={index}
                          className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400"
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              style={{ 
                                width: 20, 
                                height: 20, 
                                backgroundColor: tech.color || '#888', 
                                borderRadius: '50%' 
                              }} 
                            />
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={index}
                        className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400"
                      >
                        <div className="flex items-center gap-3">
                          <Icon 
                            color={tech.color} 
                            size={20}
                            className="group-hover:rotate-12 transition-transform duration-300"
                          />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                        {/* Tooltip on hover */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {tech.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Backend Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Backend</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {techStack.filter(tech => tech.category === 'backend').slice(0, 7).map((tech, index) => {
                    const Icon = tech.icon;
                    // Check if Icon is a valid component
                    if (!Icon || typeof Icon !== 'function') {
                      return (
                        <div
                          key={index}
                          className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-green-400"
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              style={{ 
                                width: 20, 
                                height: 20, 
                                backgroundColor: tech.color || '#888', 
                                borderRadius: '50%' 
                              }} 
                            />
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={index}
                        className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-green-400"
                      >
                        <div className="flex items-center gap-3">
                          <Icon 
                            color={tech.color} 
                            size={20}
                            className="group-hover:rotate-12 transition-transform duration-300"
                          />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI & Data Science */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">AI & Data Science</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {techStack.filter(tech => tech.category === 'ai').map((tech, index) => {
                    const Icon = tech.icon;
                    // Check if Icon is a valid component
                    if (!Icon || typeof Icon !== 'function') {
                      return (
                        <div
                          key={index}
                          className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400"
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              style={{ 
                                width: 20, 
                                height: 20, 
                                backgroundColor: tech.color || '#888', 
                                borderRadius: '50%' 
                              }} 
                            />
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={index}
                        className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400"
                      >
                        <div className="flex items-center gap-3">
                          <Icon 
                            color={tech.color} 
                            size={20}
                            className="group-hover:rotate-12 transition-transform duration-300"
                          />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Cloud & DevOps</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {techStack.filter(tech => tech.category === 'cloud').map((tech, index) => {
                    const Icon = tech.icon;
                    // Check if Icon is a valid component
                    if (!Icon || typeof Icon !== 'function') {
                      return (
                        <div
                          key={index}
                          className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400"
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              style={{ 
                                width: 20, 
                                height: 20, 
                                backgroundColor: tech.color || '#888', 
                                borderRadius: '50%' 
                              }} 
                            />
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={index}
                        className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400"
                      >
                        <div className="flex items-center gap-3">
                          <Icon 
                            color={tech.color} 
                            size={20}
                            className="group-hover:rotate-12 transition-transform duration-300"
                          />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Development */}
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Mobile Development</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {techStack.filter(tech => tech.category === 'mobile').map((tech, index) => {
                    const Icon = tech.icon;
                    // Check if Icon is a valid component
                    if (!Icon || typeof Icon !== 'function') {
                      return (
                        <div
                          key={index}
                          className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400"
                        >
                          <div className="flex items-center gap-3">
                            <div 
                              style={{ 
                                width: 20, 
                                height: 20, 
                                backgroundColor: tech.color || '#888', 
                                borderRadius: '50%' 
                              }} 
                            />
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={index}
                        className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-pink-400"
                      >
                        <div className="flex items-center gap-3">
                          <Icon 
                            color={tech.color} 
                            size={20}
                            className="group-hover:rotate-12 transition-transform duration-300"
                          />
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Custom CSS for animations */}
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
