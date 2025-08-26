'use client';

import { motion } from 'framer-motion';
import { getUniqueTechStack } from '@/data/tech';
import TechStackHeader from './TechStackHeader';
import ScrollColumn from './ScrollColumn';

const TechStackMarquee = () => {
  const uniqueTechStack = getUniqueTechStack();

  // Divide technologies into three groups
  const groupSize = Math.ceil(uniqueTechStack.length / 3);
  const columns = [
    { items: uniqueTechStack.slice(0, groupSize), speed: 0.5 },
    { items: uniqueTechStack.slice(groupSize, groupSize * 2), speed: 0.3 },
    { items: uniqueTechStack.slice(groupSize * 2), speed: 0.7 }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <TechStackHeader techStack={uniqueTechStack} />
            
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {columns.map((column, index) => (
                <ScrollColumn 
                  key={index}
                  items={column.items}
                  speed={column.speed}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackMarquee;