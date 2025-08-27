import { motion } from 'framer-motion';
import { Server, Monitor, Database, Code } from 'lucide-react';

const ArchitectureSection = ({ architecture }) => {
  if (!architecture) return null;

  const getIcon = (key) => {
    const icons = {
      frontend: Monitor,
      backend: Server,
      database: Database,
      ai: Code
    };
    return icons[key] || Code;
  };

  const getIconColor = (key) => {
    const colors = {
      frontend: 'text-green-500',
      backend: 'text-blue-500',
      database: 'text-purple-500',
      ai: 'text-orange-500'
    };
    return colors[key] || 'text-blue-500';
  };

  return (
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
        {Object.entries(architecture).map(([key, description]) => {
          const Icon = getIcon(key);
          const iconColor = getIconColor(key);
          
          return (
            <div key={key} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 capitalize">
                <Icon className={`w-5 h-5 ${iconColor}`} />
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ArchitectureSection;