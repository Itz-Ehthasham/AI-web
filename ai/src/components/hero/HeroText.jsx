import { motion } from 'framer-motion';
import CTAButton from '../CTAButton';
import { textVariants } from './heroAnimations';

const HeroText = () => {
  return (
    <>
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
    </>
  );
};

export default HeroText;