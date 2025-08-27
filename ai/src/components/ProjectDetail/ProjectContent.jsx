import { motion } from 'framer-motion';
import TechnologiesSection from './TechnologiesSection';
import FeaturesSection from './FeaturesSection';
import OverviewSection from './OverviewSection';
import AchievementsSection from './AchievementsSection';
import ArchitectureSection from './ArchitectureSection';

const ProjectContent = ({ project }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
      >
        <div className="lg:col-span-2">
          <TechnologiesSection technologies={project.tech} />
        </div>
        <div>
          <FeaturesSection features={project.challenges} />
        </div>
      </motion.div>

      <OverviewSection overview={project.overview} />
      
      {project.achievements && (
        <AchievementsSection achievements={project.achievements} />
      )}
      
      {project.architecture && (
        <ArchitectureSection architecture={project.architecture} />
      )}
    </>
  );
};

export default ProjectContent;