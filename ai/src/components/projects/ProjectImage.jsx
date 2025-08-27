import { useState } from 'react';
import Image from 'next/image';
import FeaturedBadge from './FeaturedBadge';
import ProjectHoverOverlay from './ProjectHoverOverlay';

const ProjectImage = ({ 
  src, 
  alt, 
  className = '', 
  featured, 
  githubUrl, 
  liveUrl 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative aspect-video overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image or Placeholder */}
      {src ? (
        <Image
          src={src}
          alt={alt || 'Project Screenshot'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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