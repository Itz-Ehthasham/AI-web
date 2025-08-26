import { motion } from 'framer-motion';

const TechStackHeader = ({ techStack }) => {
  const categories = [
    { name: 'Backend', key: 'backend', color: 'blue' },
    { name: 'Frontend', key: 'frontend', color: 'green' },
    { name: 'AI/ML', key: 'ai', color: 'purple' },
    { name: 'Cloud', key: 'cloud', color: 'orange' },
    { name: 'Mobile', key: 'mobile', color: 'red' }
  ];

  return (
    <div className="space-y-6">
      <motion.h2 
        className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Modern Tech Stack
      </motion.h2>
      
      <motion.p 
        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We leverage cutting-edge technologies to build robust and scalable solutions. 
        Our expertise spans across backend development, frontend frameworks, artificial intelligence, 
        cloud infrastructure, and mobile applications.
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {categories.map(category => (
          <CategoryBadge 
            key={category.key}
            category={category}
            count={techStack.filter(tech => tech.category === category.key).length}
          />
        ))}
      </motion.div>
    </div>
  );
};

const CategoryBadge = ({ category, count }) => (
  <span className={`px-3 py-1 bg-${category.color}-100 dark:bg-${category.color}-900 text-${category.color}-800 dark:text-${category.color}-200 text-sm font-medium rounded-full`}>
    {count} {category.name}
  </span>
);

export default TechStackHeader;
