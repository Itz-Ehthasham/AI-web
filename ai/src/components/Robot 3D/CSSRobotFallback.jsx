import { motion } from 'framer-motion';
import StatusIndicator from './StatusIndicator';

const CSSRobotFallback = () => {
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
        <RobotBody />
        <RobotHead />
        <RobotAntenna />
        <RobotArms />
        <RobotLegs />
        <GlowEffect />
      </motion.div>
      <StatusIndicator text="CSS Robot 🤖" />
    </div>
  );
};

const RobotBody = () => (
  <div className="w-48 h-64 bg-gradient-to-b from-gray-200/90 via-gray-300/90 to-gray-400/90 dark:from-gray-600/90 dark:via-gray-700/90 dark:to-gray-800/90 rounded-3xl shadow-2xl border-4 border-gray-300/80 dark:border-gray-500/80 relative overflow-hidden backdrop-blur-sm">
    {/* Glowing effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-purple-400/30 dark:from-blue-500/40 dark:via-transparent dark:to-purple-500/40 rounded-3xl"></div>
    
    {/* Chest panel */}
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-r from-blue-500/90 to-purple-600/90 dark:from-blue-600/90 dark:to-purple-700/90 rounded-2xl border-2 border-blue-300/80 dark:border-blue-400/80">
      <div className="flex justify-center items-center h-full">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse mx-2"></div>
        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
      </div>
    </div>

    {/* Circuit patterns */}
    <div className="absolute bottom-8 left-4 right-4 h-16 bg-gradient-to-r from-blue-600/40 to-purple-600/40 dark:from-blue-700/50 dark:to-purple-700/50 rounded-xl border border-blue-400/60 dark:border-blue-500/60">
      <div className="grid grid-cols-4 gap-2 p-3">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-300/80 dark:bg-blue-400/80 rounded-full"
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
);

const RobotHead = () => (
  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-gray-200/90 via-gray-300/90 to-gray-400/90 dark:from-gray-600/90 dark:via-gray-700/90 dark:to-gray-800/90 rounded-full border-4 border-gray-300/80 dark:border-gray-500/80 shadow-lg backdrop-blur-sm">
    {/* Eyes */}
    <RobotEye position="left-6" />
    <RobotEye position="right-6" delay={0.5} />
    
    {/* Mouth */}
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-gray-400/80 to-gray-600/80 dark:from-gray-500/80 dark:to-gray-700/80 rounded-full"></div>
  </div>
);

const RobotEye = ({ position, delay = 0 }) => (
  <div className={`absolute top-8 ${position} w-6 h-6 bg-gradient-to-br from-blue-400/90 to-blue-600/90 dark:from-blue-500/90 dark:to-blue-700/90 rounded-full border-2 border-blue-300/80 dark:border-blue-400/80`}>
    <motion.div
      className="w-3 h-3 bg-white/90 dark:bg-gray-200/90 rounded-full absolute top-1 left-1"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  </div>
);

const RobotAntenna = () => (
  <motion.div
    className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-gray-300/90 to-gray-500/90 dark:from-gray-600/90 dark:to-gray-700/90"
    animate={{
      rotate: [0, 5, 0, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div className="w-3 h-3 bg-blue-400/90 dark:bg-blue-500/90 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
  </motion.div>
);

const RobotArms = () => (
  <>
    <RobotArm side="left" position="-left-4" />
    <RobotArm side="right" position="-right-4" />
  </>
);

const RobotArm = ({ side, position }) => (
  <div className={`absolute top-16 ${position} w-6 h-20 bg-gradient-to-b from-gray-300/90 to-gray-500/90 dark:from-gray-600/90 dark:to-gray-700/90 rounded-full border-2 border-gray-300/80 dark:border-gray-500/80`}>
    <div className={`w-4 h-4 bg-gray-400/90 dark:bg-gray-600/90 rounded-full absolute ${side === 'left' ? '-left-1' : '-right-1'} top-0`}></div>
  </div>
);

const RobotLegs = () => (
  <>
    <RobotLeg position="left-8" />
    <RobotLeg position="right-8" />
  </>
);

const RobotLeg = ({ position }) => (
  <div className={`absolute bottom-0 ${position} w-8 h-16 bg-gradient-to-b from-gray-400/90 to-gray-600/90 dark:from-gray-700/90 dark:to-gray-800/90 rounded-full border-2 border-gray-400/80 dark:border-gray-600/80`}>
    <div className="w-10 h-4 bg-gray-500/90 dark:bg-gray-700/90 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
  </div>
);

const GlowEffect = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-fuchsia-400/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-fuchsia-500/30 rounded-3xl blur-xl"
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
);

export default CSSRobotFallback;