import { motion } from 'framer-motion';
import { textVariants } from './heroAnimations';

const features = [
  { color: '#10b981', label: 'AI-Powered Solutions' },  // green-400
  { color: '#60a5fa', label: 'Modern Tech Stack' },     // blue-400
  { color: '#c084fc', label: 'Responsive Design' },     // purple-400
  { color: '#f472b6', label: 'Performance Optimized' }  // fuchsia-400
];

const HeroFeatures = () => {
  return (
    <motion.div 
      className="grid grid-cols-2 gap-6 pt-8"
      variants={textVariants}
    >
      {features.map((feature, index) => (
        <FeatureItem key={index} color={feature.color} label={feature.label} />
      ))}
    </motion.div>
  );
};

const FeatureItem = ({ color, label }) => (
  <div className="flex items-center space-x-3">
    <div 
      className="w-3 h-3 rounded-full animate-pulse"
      style={{ backgroundColor: color }}
    />
    <span className="text-gray-600 dark:text-gray-400">{label}</span>
  </div>
);

export default HeroFeatures;