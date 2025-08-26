import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../CTAButton'; 
import HeroText from './HeroText';
import HeroFeatures from './HeroFeatures';
import BackgroundShapes from './BackgroundShapes';

// Lazy load the 3D component as it's likely heavy
const Robot3D = lazy(() => import('../Robot 3D'));

// Extract animation variants to a separate file to reuse
import { containerVariants, robotVariants } from './heroAnimations';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden min-h-screen">
      <BackgroundShapes />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <HeroText />
            <HeroFeatures />
          </motion.div>

          {/* Right Side - 3D Robot with loading fallback */}
          <motion.div 
            className="relative h-full flex items-center justify-center"
            variants={robotVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Suspense fallback={<Robot3DLoader />}>
                <Robot3D />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Simple loader component for 3D model
const Robot3DLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">Loading 3D model...</p>
    </div>
  </div>
);

export default Hero;
