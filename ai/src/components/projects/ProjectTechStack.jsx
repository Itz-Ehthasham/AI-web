import TechBadge from '@/components/common/TechBadge';
import { getTechInfo } from '@/utils/projectHelpers';

const ProjectTechStack = ({ technologies, maxDisplay = 4 }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {technologies.slice(0, maxDisplay).map((techName, index) => {
          const techInfo = getTechInfo(techName);
          return <TechBadge key={index} techInfo={techInfo} />;
        })}
        
        {technologies.length > maxDisplay && (
          <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-blue-200 dark:border-blue-400">
            +{technologies.length - maxDisplay}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectTechStack;