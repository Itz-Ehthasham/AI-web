import { coreStrengthsData } from '@/data/coreStrengths';

export default function CoreStrengths() {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-4xl bg-clip-text text-transparent  font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% mb-4">
          Our Core Strengths
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreStrengthsData.map((strength, index) => (
          <StrengthCard key={index} strength={strength} />
        ))}
      </div>
    </div>
  );
}

function StrengthCard({ strength }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className={`absolute inset-0 bg-gradient-to-br ${strength.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      
      <div className={`relative bg-white dark:bg-gray-800 border-2 ${strength.borderColor} dark:border-gray-700 rounded-3xl p-8`}>
        <div className={`w-16 h-16 ${strength.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-3xl">{strength.icon}</span>
        </div>
        
        <h3 className={`text-xl font-bold bg-gradient-to-r ${strength.gradient} bg-clip-text text-transparent mb-4`}>
          {strength.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {strength.description}
        </p>
        
        <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${strength.gradient} opacity-10 rounded-full blur-2xl`}></div>
      </div>
    </div>
  );
}
