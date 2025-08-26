import Image from 'next/image';

const ProjectImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative w-full h-96 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center rounded-2xl">
          <span className="text-gray-500 dark:text-gray-400 text-lg">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectImage;
