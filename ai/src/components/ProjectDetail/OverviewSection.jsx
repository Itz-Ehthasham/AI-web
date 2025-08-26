import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const OverviewSection = ({ overview }) => {
  if (!overview) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Globe className="w-6 h-6 text-green-500" />
        Project Overview
      </h2>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {overview}
        </p>
      </div>
    </motion.div>
  );
};

export default OverviewSection;