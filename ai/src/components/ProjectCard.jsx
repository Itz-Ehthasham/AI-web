'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Link from 'next/link';
import { techStack } from '@/data/tech';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

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

  // Helper function to get tech info by name
  const getTechInfo = (techName) => {
    return techStack.find(tech => tech.name === techName) || {
      name: techName,
      icon: null,
      color: '#6B7280'
    };
  };

  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200 dark:border-blue-400 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-full">
        {/* Left Side - Text Content */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          {/* Top Section */}
          <div>
            {/* Tag Badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTagColor(project.tag)}`}>
                {project.tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div>
            {/* Technologies */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((techName, index) => {
                  const techInfo = getTechInfo(techName);
                  const IconComponent = techInfo.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-blue-200 dark:border-blue-400"
                    >
                      {IconComponent && typeof IconComponent === 'function' ? (
                        <IconComponent
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: techInfo.color }}
                        />
                      ) : (
                        <div 
                          className="w-4 h-4 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: techInfo.color }}
                        />
                      )}
                      <span>{techInfo.name}</span>
                    </div>
                  );
                })}
                {project.tech.length > 4 && (
                  <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-blue-200 dark:border-blue-400">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Action Button */}
            <Link href={`/projects/${project.id}`}>
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Side - Project Image */}
        <div className="relative w-80 h-full overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Project Screenshot
            </span>
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <motion.div 
              className="absolute top-4 right-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                <Star size={14} />
                Featured
              </div>
            </motion.div>
          )}
          
          {/* Hover Overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={24} className="text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
