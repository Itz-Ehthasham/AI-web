import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

const Robot3D = () => {
  const [lottieError, setLottieError] = useState(false);
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    console.log('Robot3D component mounted');
    // Immediately try iframe for faster loading
    const timer = setTimeout(() => {
      console.log('Switching to iframe for faster loading');
      setUseIframe(true);
    }, 1000); // Only 1 second delay

    return () => clearTimeout(timer);
  }, []);

  // If Lottie loads successfully, show it
  if (!lottieError && !useIframe) {
    console.log('Attempting to load Lottie animation');
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Lottie Animation Container */}
        <div className="w-full h-full max-w-md max-h-96 cursor-pointer">
          <Lottie
            src="https://lottie.host/c886cbc2-d699-42b1-b50f-ece3e53e95d5/JkUFjMlyWH.lottie"
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
            onError={(error) => {
              console.error('Lottie error:', error);
              setUseIframe(true);
            }}
            onLoad={() => {
              console.log('Lottie animation loaded successfully');
            }}
            rendererSettings={{
              preserveAspectRatio: 'xMidYMid slice'
            }}
          />
        </div>
        
        {/* Status indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Lottie Robot 🤖
        </motion.div>
      </div>
    );
  }

  // Iframe Fallback (if Lottie fails or timeout)
  if (useIframe) {
    console.log('Using iframe fallback');
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Iframe Container */}
        <div className="w-full h-full max-w-md max-h-96">
          <iframe 
            src="https://lottie.host/embed/c886cbc2-d699-42b1-b50f-ece3e53e95d5/JkUFjMlyWH.lottie"
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="3D Robot Animation"
            allowFullScreen
            onLoad={() => console.log('Iframe loaded successfully')}
            onError={() => {
              console.error('Iframe failed to load');
              setLottieError(true);
            }}
          />
        </div>
        
        {/* Status indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          
        </motion.div>
      </div>
    );
  }

  // CSS Fallback Robot (if both Lottie and iframe fail)
  console.log('Using CSS fallback robot');
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 15,
          y: -10
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Robot Body */}
        <div className="w-48 h-64 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 rounded-3xl shadow-2xl border-4 border-gray-200 dark:border-gray-600 relative overflow-hidden">
          
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 rounded-3xl"></div>
          
          {/* Chest panel */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl border-2 border-blue-300 dark:border-blue-500">
            <div className="flex justify-center items-center h-full">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mx-2"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Circuit patterns */}
          <div className="absolute bottom-8 left-4 right-4 h-16 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl border border-blue-400/50">
            <div className="grid grid-cols-4 gap-2 p-3">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-300 rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Head */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 dark:from-gray-500 dark:via-gray-600 dark:to-gray-700 rounded-full border-4 border-gray-100 dark:border-gray-500 shadow-lg">
          
          {/* Eyes */}
          <div className="absolute top-8 left-6 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-blue-200 dark:border-blue-400">
            <motion.div
              className="w-3 h-3 bg-white rounded-full absolute top-1 left-1"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          <div className="absolute top-8 right-6 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-blue-200 dark:border-blue-400">
            <motion.div
              className="w-3 h-3 bg-white rounded-full absolute top-1 left-1"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Mouth */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
        </div>

        {/* Antenna */}
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700"
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-3 h-3 bg-blue-400 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </motion.div>

        {/* Arms */}
        <div className="absolute top-16 -left-4 w-6 h-20 bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700 rounded-full border-2 border-gray-200 dark:border-gray-600">
          <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full absolute -left-1 top-0"></div>
        </div>
        
        <div className="absolute top-16 -right-4 w-6 h-20 bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700 rounded-full border-2 border-gray-200 dark:border-gray-600">
          <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full absolute -right-1 top-0"></div>
        </div>

        {/* Legs */}
        <div className="absolute bottom-0 left-8 w-8 h-16 bg-gradient-to-b from-gray-400 to-gray-600 dark:from-gray-700 dark:to-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600">
          <div className="w-10 h-4 bg-gray-500 dark:bg-gray-700 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        
        <div className="absolute bottom-0 right-8 w-8 h-16 bg-gradient-to-b from-gray-400 to-gray-600 dark:from-gray-700 dark:to-gray-800 rounded-full border-2 border-gray-300 dark:border-gray-600">
          <div className="w-10 h-4 bg-gray-500 dark:bg-gray-700 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
        </div>

        {/* Interactive glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-fuchsia-400/20 rounded-3xl blur-xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Status indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        CSS Robot 🤖 (All methods failed)
      </motion.div>
    </div>
  );
};

export default Robot3D;
