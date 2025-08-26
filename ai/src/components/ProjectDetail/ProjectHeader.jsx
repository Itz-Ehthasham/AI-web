import { motion } from 'framer-motion';
import { Star, Calendar, Users, Github, ExternalLink } from 'lucide-react';
import ProjectImage from './ProjectImage';
import { getTagColor } from '@/utils/projectUtils';

const ProjectHeader = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ProjectImage
              src={project.image}
              alt={`${project.title} Screenshot`}
            />
            {project.featured && <FeaturedBadge />}
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6">
          <ProjectTitle project={project} />
          <ProjectStats project={project} />
          <ProjectActions project={project} />
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedBadge = () => (
  <div className="absolute top-4 right-4">
    <div className="bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
      <Star size={16} />
      Featured
    </div>
  </div>
);

const ProjectTitle = ({ project }) => (
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
);

const ProjectStats = ({ project }) => (
  <div className="grid grid-cols-2 gap-4">
    <StatCard icon={Calendar} label="Duration" value={project.duration} iconColor="text-blue-500" />
    <StatCard icon={Users} label="Team Size" value={project.teamSize} iconColor="text-green-500" />
  </div>
);

const StatCard = ({ icon: Icon, label, value, iconColor }) => (
  <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
    <Icon className={`w-5 h-5 ${iconColor}`} />
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const ProjectActions = ({ project }) => (
  <div className="flex flex-wrap gap-4">
    <ActionButton 
      href={project.githubUrl || '#'}
      icon={Github}
      text="View Code"
      primary
    />
    <ActionButton 
      href={project.liveUrl || '#'}
      icon={ExternalLink}
      text="Live Demo"
    />
  </div>
);

const ActionButton = ({ href, icon: Icon, text, primary = false }) => (
  <motion.a
    href={href}
    className={primary 
      ? "flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      : "flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
    }
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={20} />
    {text}
  </motion.a>
);

export default ProjectHeader;
