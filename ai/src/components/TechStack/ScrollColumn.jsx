import { useEffect, useRef } from 'react';
import TechIcon from './TechIcon';

const ScrollColumn = ({ items, speed = 0.5 }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let scrollPosition = 0;

    const animate = () => {
      if (scrollContainer) {
        scrollPosition += speed;
        
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollTop = scrollPosition;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  return (
    <div className="relative h-96 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="p-4 space-y-3">
          {/* First set */}
          {items.map(tech => (
            <TechIcon key={`first-${tech.name}`} tech={tech} />
          ))}
          {/* Duplicate for seamless loop */}
          {items.map(tech => (
            <TechIcon key={`second-${tech.name}`} tech={tech} />
          ))}
        </div>
      </div>
      <GradientOverlay />
    </div>
  );
};

const GradientOverlay = () => (
  <>
    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent pointer-events-none" />
  </>
);

export default ScrollColumn;