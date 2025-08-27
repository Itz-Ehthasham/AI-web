import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const FeaturedBadge = () => {
  return (
    <motion.div 
      className="absolute top-4 right-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
        <Star size={14} />
        Featured
      </div>
    </motion.div>
  );
};

export default FeaturedBadge;