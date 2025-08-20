'use client';

import { motion } from 'framer-motion';
import { techStack } from '@/data/tech';

const MarqueeCard = ({ category, items }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        {category}
      </h3>
      
      <div className="relative overflow-hidden">
        <div className="flex space-x-4 animate-marquee hover:pause">
          {/* First set of items */}
          <div className="flex space-x-4 flex-shrink-0">
            {items.map((item, index) => (
              <span
                key={`first-${index}`}
                className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-lg whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-4 flex-shrink-0">
            {items.map((item, index) => (
              <span
                key={`second-${index}`}
                className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-lg whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechStackMarquee = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Modern Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust and scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <MarqueeCard
              key={tech.category}
              category={tech.category}
              items={tech.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
