'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { getUniqueTechStack } from '@/data/tech';

const TechIcon = ({ tech }) => {
  const IconComponent = tech.icon;
  
  // Check if the icon is a valid React component
  if (!IconComponent || typeof IconComponent !== 'function') {
    // Fallback to a colored circle if icon is invalid
    return (
      <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-blue-200 dark:border-blue-400 hover:shadow-md transition-shadow duration-200">
        <div 
          className="w-6 h-6 flex-shrink-0 rounded-full"
          style={{ backgroundColor: tech.color }}
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {tech.name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-blue-200 dark:border-blue-400 hover:shadow-md transition-shadow duration-200">
      <IconComponent
        className="w-6 h-6 flex-shrink-0"
        style={{ color: tech.color }}
      />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
};

const TechStackMarquee = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const animationRef1 = useRef(null);
  const animationRef2 = useRef(null);
  const animationRef3 = useRef(null);

  const uniqueTechStack = getUniqueTechStack();

  // Divide technologies into three groups
  const groupSize = Math.ceil(uniqueTechStack.length / 3);
  const column1 = uniqueTechStack.slice(0, groupSize);
  const column2 = uniqueTechStack.slice(groupSize, groupSize * 2);
  const column3 = uniqueTechStack.slice(groupSize * 2);

  // Auto-scroll effect for vertical scrolling - Column 1
  useEffect(() => {
    const scrollContainer = scrollRef1.current;
    if (!scrollContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollTop = scrollPosition;
      }
      
      animationRef1.current = requestAnimationFrame(animate);
    };

    animationRef1.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef1.current) {
        cancelAnimationFrame(animationRef1.current);
      }
    };
  }, []);

  // Auto-scroll effect for vertical scrolling - Column 2
  useEffect(() => {
    const scrollContainer = scrollRef2.current;
    if (!scrollContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.3; // Slightly different speed for variety

    const animate = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollTop = scrollPosition;
      }
      
      animationRef2.current = requestAnimationFrame(animate);
    };

    animationRef2.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef2.current) {
        cancelAnimationFrame(animationRef2.current);
      }
    };
  }, []);

  // Auto-scroll effect for vertical scrolling - Column 3
  useEffect(() => {
    const scrollContainer = scrollRef3.current;
    if (!scrollContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.7; // Different speed for variety

    const animate = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollTop = scrollPosition;
      }
      
      animationRef3.current = requestAnimationFrame(animate);
    };

    animationRef3.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef3.current) {
        cancelAnimationFrame(animationRef3.current);
      }
    };
  }, []);

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
            {/* Left side - Text content */}
            <div className="space-y-6">
              <motion.h2 
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
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
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  {uniqueTechStack.filter(tech => tech.category === 'backend').length} Backend
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                  {uniqueTechStack.filter(tech => tech.category === 'frontend').length} Frontend
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">
                  {uniqueTechStack.filter(tech => tech.category === 'ai').length} AI/ML
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">
                  {uniqueTechStack.filter(tech => tech.category === 'cloud').length} Cloud
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm font-medium rounded-full">
                  {uniqueTechStack.filter(tech => tech.category === 'mobile').length} Mobile
                </span>
              </motion.div>
            </div>

            {/* Right side - Three columns of scrolling tech icons */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Column 1 */}
              <div className="relative h-96 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div
                  ref={scrollRef1}
                  className="h-full overflow-y-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  <div className="p-4 space-y-3">
                    {/* First set of items */}
                    {column1.map((tech, index) => (
                      <TechIcon key={`col1-first-${tech.name}`} tech={tech} />
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {column1.map((tech, index) => (
                      <TechIcon key={`col1-second-${tech.name}`} tech={tech} />
                    ))}
                  </div>
                </div>
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
              </div>

              {/* Column 2 */}
              <div className="relative h-96 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div
                  ref={scrollRef2}
                  className="h-full overflow-y-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  <div className="p-4 space-y-3">
                    {/* First set of items */}
                    {column2.map((tech, index) => (
                      <TechIcon key={`col2-first-${tech.name}`} tech={tech} />
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {column2.map((tech, index) => (
                      <TechIcon key={`col2-second-${tech.name}`} tech={tech} />
                    ))}
                  </div>
                </div>
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
              </div>

              {/* Column 3 */}
              <div className="relative h-96 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div
                  ref={scrollRef3}
                  className="h-full overflow-y-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  <div className="p-4 space-y-3">
                    {/* First set of items */}
                    {column3.map((tech, index) => (
                      <TechIcon key={`col3-first-${tech.name}`} tech={tech} />
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {column3.map((tech, index) => (
                      <TechIcon key={`col3-second-${tech.name}`} tech={tech} />
                    ))}
                  </div>
                </div>
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Hide webkit scrollbar */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TechStackMarquee;
