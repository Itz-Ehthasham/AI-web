'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectTag from './ProjectTag';
import ProjectTechStack from './ProjectTechStack';
import ProjectImage from './ProjectImage';

const ResponsiveProjectCard = ({ project, layout = 'horizontal' }) => {
  const isVertical = layout === 'vertical';
  
  return (
    <motion.div
      className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200 dark:border-blue-400 ${
        isVertical ? 'max-w-sm' : 'h-80'
      }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${isVertical ? 'flex flex-col' : 'flex'} h-full`}>
        {/* For vertical layout, show image first */}
        {isVertical && (
          <div className="h-48 w-full">
            <ProjectImage 
              imageUrl={project.imageUrl}
              imageAlt={project.title}
              featured={project.featured}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </div>
        )}
        
        {/* Text Content */}
        <div className={`${isVertical ? 'p-6' : 'flex-1 p-8'} flex flex-col justify-between`}>
          {/* Top Section */}
          <div>
            <ProjectTag tag={project.tag} />
            
            <h3 className={`${
              isVertical ? 'text-xl' : 'text-2xl'
            } font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
              {project.title}
            </h3>

            <p className={`text-gray-600 dark:text-gray-300 ${
              isVertical ? 'text-sm' : 'text-base'
            } leading-relaxed mb-6 line-clamp-3`}>
              {project.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div>
            <ProjectTechStack 
              technologies={project.tech} 
              maxDisplay={isVertical ? 3 : 4}
            />

            <Link href={`/projects/${project.id}`}>
              <motion.button 
                className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${
                  isVertical ? 'text-sm py-2 px-4 w-full' : 'text-sm py-3 px-6'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </Link>
          </div>
        </div>

        {/* For horizontal layout, show image on the right */}
        {!isVertical && (
          <ProjectImage 
            imageUrl={project.imageUrl}
            imageAlt={project.title}
            featured={project.featured}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ResponsiveProjectCard;
