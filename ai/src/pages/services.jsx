import { Brain, Globe, Database, Shield, Palette, Code, Sparkles, ArrowRight, CheckCircle, Zap, TrendingUp, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BorderWrapper from '../components/BorderWrapper';
const services = [
  {
    icon: Brain,
    title: "AI Application Development",
    description: "We design and develop AI-powered applications that transform ideas into intelligent digital products.",
    features: [
      "Chatbots & Virtual Assistants",
      "Recommendation Systems",
      "Predictive Analytics",
      "Automation Tools"
    ],
    technologies: ["Machine Learning", "NLP", "Computer Vision"],
    gradient: "from-purple-600 to-blue-600"
  },
  {
    icon: Globe,
    title: "Full Stack & MERN Development",
    description: "Our team builds complete solutions using MERN stack and other modern frameworks.",
    features: [
      "Frontend User Interfaces",
      "Backend APIs",
      "Database Architecture",
      "Seamless Integration"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    gradient: "from-green-600 to-teal-600"
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "We turn raw data into valuable insights through advanced analytics and visualization.",
    features: [
      "Data Visualization",
      "Predictive Models",
      "Advanced Analytics",
      "Business Intelligence"
    ],
    technologies: ["Python", "TensorFlow", "Tableau", "Power BI"],
    gradient: "from-orange-600 to-red-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Secure Development",
    description: "Security is at the heart of everything we build with enterprise-grade protection.",
    features: [
      "Penetration Testing",
      "Data Encryption",
      "Security Audits",
      "Compliance Architecture"
    ],
    technologies: ["OWASP", "SSL/TLS", "OAuth", "Zero Trust"],
    gradient: "from-red-600 to-pink-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design & Frontend",
    description: "We craft modern, intuitive, and responsive user interfaces for exceptional experiences.",
    features: [
      "User-Centric Design",
      "Responsive Layouts",
      "Interactive Prototypes",
      "Design Systems"
    ],
    technologies: ["Figma", "React", "Tailwind", "Framer Motion"],
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built to meet your unique business needs and challenges.",
    features: [
      "Scalable Architecture",
      "Agile Development",
      "Quality Assurance",
      "Ongoing Support"
    ],
    technologies: ["Agile", "CI/CD", "Docker", "Kubernetes"],
    gradient: "from-yellow-600 to-orange-600"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
        
        <div className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We specialize in delivering <span className="font-semibold text-gray-900 dark:text-white">end-to-end technology solutions</span> with 
                a strong focus on <span className="font-semibold text-gray-900 dark:text-white">Artificial Intelligence</span> and <span className="font-semibold text-gray-900 dark:text-white">Full Stack Development</span>
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
                Every project we build is intelligent, scalable, and user-friendly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Zap, label: "Projects Delivered", value: "500+" },
            { icon: Users, label: "Happy Clients", value: "100+" },
            { icon: TrendingUp, label: "Success Rate", value: "98%" },
            { icon: Code, label: "Lines of Code", value: "2M+" }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white dark:bg-gray-800 m-[1px] rounded-3xl p-8 hover:p-9 transition-all duration-300">
                  {/* Decorative Element */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-full blur-3xl`}></div>
                  
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`relative p-3 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features with enhanced styling */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 group/item">
                        <div className="relative">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                          <div className="absolute inset-0 bg-green-400 blur-lg opacity-0 group-hover/item:opacity-40 transition-opacity duration-200"></div>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies with gradient background on hover */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                      Technologies & Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30 hover:scale-105 transition-all duration-200 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Hover Action */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore service
                      <ArrowRight className="h-4 w-4 ml-2 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      Available
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
