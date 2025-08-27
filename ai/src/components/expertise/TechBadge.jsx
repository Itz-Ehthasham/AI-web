export default function TechBadge({ tech, hoverColor }) {
  const Icon = tech.icon;
  const isValidIcon = Icon && typeof Icon === 'function';

  return (
    <div className={`group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer border-2 border-gray-200 dark:border-gray-700 ${hoverColor}`}>
      <div className="flex items-center gap-3">
        {isValidIcon ? (
          <Icon 
            color={tech.color} 
            size={20}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
        ) : (
          <div 
            style={{ 
              width: 20, 
              height: 20, 
              backgroundColor: tech.color || '#888', 
              borderRadius: '50%' 
            }} 
          />
        )}
        <span className="font-semibold text-gray-700 dark:text-gray-300">
          {tech.name}
        </span>
      </div>
      {isValidIcon && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          {tech.name}
        </div>
      )}
    </div>
  );
}
