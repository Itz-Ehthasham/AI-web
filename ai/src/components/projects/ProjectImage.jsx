import { useState } from 'react';
import FeaturedBadge from './FeaturedBadge';
import ProjectHoverOverlay from './ProjectHoverOverlay';

const ProjectImage = ({ 
  imageUrl, 
  imageAlt, 
  featured, 
  githubUrl, 
  liveUrl 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-80 h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image or Placeholder */}
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={imageAlt || 'Project Screenshot'}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            Project Screenshot
          </span>
        </div>
      )}
      
      {/* Featured Badge */}
      {featured && <FeaturedBadge />}
      
      {/* Hover Overlay */}
      <ProjectHoverOverlay 
        isHovered={isHovered}
        githubUrl={githubUrl}
        liveUrl={liveUrl}
      />
    </div>
  );
};

export default ProjectImage;