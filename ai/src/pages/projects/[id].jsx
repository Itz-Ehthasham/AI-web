'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Star, Calendar, Users, Globe, Code, Database, Server, Monitor } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { techStack } from '@/data/tech';

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProject = projects.find(p => p.id === id);
      setProject(foundProject);
      setLoading(false);
    }
  }, [id]);

  const getTagColor = (tag) => {
    switch (tag) {
      case 'AI':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Web':
        return 'bg-blue-100 text-blue-800 dark:bg-gray-900 dark:text-blue-200';
      case 'Mobile':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Data':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getTechInfo = (techName) => {
    return techStack.find(tech => tech.name === techName) || {
      name: techName,
      icon: null,
      color: '#6B7280'
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-500 dark:text-gray-400">Loading project...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
              <button
                onClick={() => router.push('/portfolio')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            onClick={() => router.push('/portfolio')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </motion.button>

          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <button
                onClick={() => router.push('/')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </button>
              <span>/</span>
              <button
                onClick={() => router.push('/portfolio')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Portfolio
              </button>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">{project.title}</span>
            </nav>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-lg">
                      Project Screenshot
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                        <Star size={16} />
                        Featured
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2 space-y-6">
                {/* Tag and Title */}
                <div>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getTagColor(project.tag)} mb-4`}>
                    {project.tag}
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Users className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Team Size</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{project.teamSize}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            {/* Technologies Used */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                Technologies Used
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.tech.map((techName, index) => {
                  const techInfo = getTechInfo(techName);
                  const IconComponent = techInfo.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {IconComponent && typeof IconComponent === 'function' ? (
                        <IconComponent
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: techInfo.color }}
                        />
                      ) : (
                        <div 
                          className="w-5 h-5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: techInfo.color }}
                        />
                      )}
                      <span className="font-medium text-gray-900 dark:text-white">{techInfo.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Project Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Key Features
              </h2>
              <div className="space-y-4">
                {project.challenges && project.challenges.slice(0, 4).map((challenge, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-green-500' : 
                      index === 2 ? 'bg-purple-500' : 'bg-orange-500'
                    }`}></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-green-500" />
              Project Overview
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {project.overview}
              </p>
            </div>
          </motion.div>

          {/* Achievements Section */}
          {project.achievements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{achievement}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technical Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Server className="w-6 h-6 text-purple-500" />
              Technical Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.architecture && Object.entries(project.architecture).map(([key, description], index) => (
                <div key={key} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 capitalize">
                    {key === 'frontend' ? <Monitor className="w-5 h-5 text-green-500" /> :
                     key === 'backend' ? <Server className="w-5 h-5 text-blue-500" /> :
                     key === 'database' ? <Database className="w-5 h-5 text-purple-500" /> :
                     key === 'ai' ? <Code className="w-5 h-5 text-orange-500" /> :
                     <Code className="w-5 h-5 text-blue-500" />}
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
