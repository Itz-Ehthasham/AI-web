import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { getTechInfo } from '@/utils/projectUtils';

const TechnologiesSection = ({ technologies }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Code className="w-6 h-6 text-blue-500" />
        Technologies Used
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {technologies.map((techName, index) => (
          <TechCard key={index} techName={techName} />
        ))}
      </div>
    </>
  );
};

const TechCard = ({ techName }) => {
  const techInfo = getTechInfo(techName);
  const IconComponent = techInfo.icon;
  
  return (
    <motion.div
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
};

export default TechnologiesSection;