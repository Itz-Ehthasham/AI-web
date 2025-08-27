import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectHoverOverlay = ({ isHovered, githubUrl, liveUrl }) => {
  return (
    <motion.div 
      className="absolute inset-0 bg-black/60 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-4">
        {githubUrl && (
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={24} className="text-white" />
          </motion.a>
        )}
        
        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={24} className="text-white" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectHoverOverlay;