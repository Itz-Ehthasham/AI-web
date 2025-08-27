import { techStack } from '@/data/tech';
import TechBadge from './TechBadge';

export default function TechnologiesSection() {
  const categories = [
    { name: 'Frontend', key: 'frontend', limit: 6, hoverColor: 'hover:border-blue-400' },
    { name: 'Backend', key: 'backend', limit: 7, hoverColor: 'hover:border-green-400' },
    { name: 'Mobile Development', key: 'mobile', limit: null, hoverColor: 'hover:border-pink-400' }
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-12">
        <span className="bg-clip-text text-transparent font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-300% animate-gradient">
          Technologies We Master
        </span>
      </h2>
      
      <div className="space-y-12">
        {categories.map((category) => (
          <TechCategory 
            key={category.key}
            name={category.name}
            technologies={techStack.filter(tech => tech.category === category.key)}
            limit={category.limit}
            hoverColor={category.hoverColor}
          />
        ))}
      </div>
    </div>
  );
}

function TechCategory({ name, technologies, limit, hoverColor }) {
  const displayTechs = limit ? technologies.slice(0, limit) : technologies;
  
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">{name}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {displayTechs.map((tech, index) => (
          <TechBadge key={index} tech={tech} hoverColor={hoverColor} />
        ))}
      </div>
    </div>
  );
}