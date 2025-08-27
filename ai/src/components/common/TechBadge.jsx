const TechBadge = ({ techInfo }) => {
  const IconComponent = techInfo.icon;
  
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-blue-200 dark:border-blue-400">
      {IconComponent && typeof IconComponent === 'function' ? (
        <IconComponent
          className="w-4 h-4 flex-shrink-0"
          style={{ color: techInfo.color }}
        />
      ) : (
        <div 
          className="w-4 h-4 flex-shrink-0 rounded-full"
          style={{ backgroundColor: techInfo.color }}
        />
      )}
      <span>{techInfo.name}</span>
    </div>
  );
};

export default TechBadge;