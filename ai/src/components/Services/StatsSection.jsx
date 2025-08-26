import { Zap, Users, TrendingUp, Code } from 'lucide-react';

const statsData = [
  { icon: Zap, label: "Projects Delivered", value: "100+" },
  { icon: Users, label: "Happy Clients", value: "100+" },
  { icon: TrendingUp, label: "Success Rate", value: "98%" },
  { icon: Code, label: "Lines of Code", value: "2M+" }
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {statsData.map((stat, idx) => (
        <StatCard key={idx} stat={stat} />
      ))}
    </div>
  );
};

const StatCard = ({ stat }) => {
  const Icon = stat.icon;
  
  return (
    <div className="text-center group cursor-pointer">
      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
    </div>
  );
};

export default StatsSection;