import { techStack } from '@/data/tech';

export const getTagColor = (tag) => {
  const colors = {
    'AI': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Web': 'bg-blue-100 text-blue-800 dark:bg-gray-900 dark:text-blue-200',
    'Mobile': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Data': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  };
  return colors[tag] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
};

export const getTechInfo = (techName) => {
  return techStack.find(tech => tech.name === techName) || {
    name: techName,
    icon: null,
    color: '#6B7280'
  };
};

export const getFeatureColor = (index) => {
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'];
  return colors[index % colors.length];
};