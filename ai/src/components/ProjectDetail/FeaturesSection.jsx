import { Star } from 'lucide-react';
import { getFeatureColor } from '@/utils/projectUtils';

const FeaturesSection = ({ features }) => {
  if (!features) return null;
  
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Star className="w-6 h-6 text-yellow-500" />
        Key Features
      </h2>
      <div className="space-y-4">
        {features.slice(0, 4).map((feature, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className={`w-2 h-2 rounded-full ${getFeatureColor(index)}`}></div>
            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesSection;