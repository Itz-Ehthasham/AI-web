import ValueCard from './ValueCard';
import { coreValues } from '@/data/valuesData';

export default function CoreValues() {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-300% animate-gradient">
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