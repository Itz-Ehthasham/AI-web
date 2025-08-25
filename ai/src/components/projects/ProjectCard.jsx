'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectTag from './ProjectTag';
import ProjectTechStack from './ProjectTechStack';
import ProjectImage from './ProjectImage';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200 dark:border-blue-400 h-80"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-full">
        {/* Left Side - Text Content */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          {/* Top Section */}
          <div>
            {/* Tag Badge */}
            <ProjectTag tag={project.tag} />

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
            <ProjectTechStack technologies={project.tech} />

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
        <ProjectImage 
          imageUrl={project.imageUrl}
          imageAlt={project.title}
          featured={project.featured}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
