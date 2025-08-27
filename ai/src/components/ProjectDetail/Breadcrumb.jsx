import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const Breadcrumb = ({ projectTitle, onBack, onHome, onPortfolio }) => {
  return (
    <>
      <motion.button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        whileHover={{ x: -5 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowLeft size={20} />
        Back to Portfolio
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <button
            onClick={onHome}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={onPortfolio}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Portfolio
          </button>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{projectTitle}</span>
        </nav>
      </motion.div>
    </>
  );
};

export default Breadcrumb;