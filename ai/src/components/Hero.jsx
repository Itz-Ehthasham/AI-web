import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import Robot3D from './Robot3D';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const robotVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden min-h-screen">
      {/* Background abstract shape */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-fuchsia-200/20 dark:from-purple-800/20 dark:to-fuchsia-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              variants={textVariants}
            >
              Developers who build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600">
                AI
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              variants={textVariants}
            >
              Showcasing innovative projects that push the boundaries of artificial intelligence, 
              machine learning, and modern web development excellence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={textVariants}
            >
              <CTAButton href="/portfolio" variant="primary">
                View Portfolio
              </CTAButton>
              <CTAButton href="/expertise" variant="secondary">
                Learn More
              </CTAButton>
            </motion.div>

            {/* Additional features */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-8"
              variants={textVariants}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">Modern Tech Stack</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">Responsive Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">Performance Optimized</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Robot */}
          <motion.div 
            className="relative h-full flex items-center justify-center"
            variants={robotVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Robot3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
