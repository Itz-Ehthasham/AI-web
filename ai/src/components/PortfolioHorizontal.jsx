'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './projects/ProjectCard';

const PortfolioHorizontal = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.8; // Slightly slower for smoother scrolling

    const animate = () => {
      if (scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Seamless infinite scrolling - reset position when reaching the end
        const maxScroll = scrollContainer.scrollWidth / 4; // Since we have 4 copies
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        // Apply the scroll
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Card Container */}
        <motion.div 
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our diverse collection of AI-powered applications, web platforms, and innovative solutions.
            </p>
          </motion.div>

          {/* Portfolio Container */}
          <div className="relative border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-gray-50 dark:bg-gray-800">
            {/* Gradient Overlays for visual effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
            
            {/* Horizontal Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-hidden overflow-y-hidden pb-4"
              style={{
                userSelect: 'none',
                WebkitUserSelect: 'none',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                pointerEvents: 'none', // Disable all pointer interactions
              }}
            >
              {/* Duplicate projects multiple times for seamless infinite scroll */}
              {[...projects, ...projects, ...projects, ...projects].map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0 w-[320px] md:w-[420px]"
                  style={{ minWidth: '320px' }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index % projects.length) * 0.1 
                    }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Hide webkit scrollbar */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHorizontal;
