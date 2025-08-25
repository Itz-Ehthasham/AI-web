import ValueCard from './ValueCard';
import { coreValues } from '@/data/valuesData';

export default function CoreValues() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Our Core Values
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <ValueCard key={index} value={value} />
        ))}
      </div>
    </div>
  );
}