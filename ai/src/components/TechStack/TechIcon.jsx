const TechIcon = ({ tech }) => {
  const IconComponent = tech.icon;
  
  // Fallback to colored circle if icon is invalid
  if (!IconComponent || typeof IconComponent !== 'function') {
    return (
      <TechIconWrapper tech={tech}>
        <div 
          className="w-6 h-6 flex-shrink-0 rounded-full"
          style={{ backgroundColor: tech.color }}
        />
      </TechIconWrapper>
    );
  }

  return (
    <TechIconWrapper tech={tech}>
      <IconComponent
        className="w-6 h-6 flex-shrink-0"
        style={{ color: tech.color }}
      />
    </TechIconWrapper>
  );
};

const TechIconWrapper = ({ tech, children }) => (
  <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-blue-200 dark:border-blue-400 hover:shadow-md transition-shadow duration-200">
    {children}
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

export default TechIcon;
