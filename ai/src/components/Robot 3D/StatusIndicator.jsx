import { motion } from 'framer-motion';

const StatusIndicator = ({ text }) => {
  if (!text) return null;
  
  return (
    <motion.div
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {text}
    </motion.div>
  );
};

export default StatusIndicator;