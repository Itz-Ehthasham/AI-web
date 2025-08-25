import { getTagColor } from '@/utils/projectHelpers';

const ProjectTag = ({ tag }) => {
  return (
    <div className="mb-4">
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}>
        {tag}
      </span>
    </div>
  );
};

export default ProjectTag;