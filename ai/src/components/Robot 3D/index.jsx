import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import CSSRobotFallback from './CSSRobotFallback';
import StatusIndicator from './StatusIndicator';

const Robot3D = () => {
  const [lottieError, setLottieError] = useState(false);
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    console.log('Robot3D component mounted');
    // Switch to iframe after 1 second for faster loading
    const timer = setTimeout(() => {
      console.log('Switching to iframe for faster loading');
      setUseIframe(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Lottie Animation (primary)
  if (!lottieError && !useIframe) {
    console.log('Attempting to load Lottie animation');
    return (
      <div className="relative w-full h-full flex items-center justify-center">
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
        <StatusIndicator text="Lottie Robot 🤖" />
      </div>
    );
  }

  // Iframe Fallback (secondary)
  if (useIframe && !lottieError) {
    console.log('Using iframe fallback');
    return (
      <div className="relative w-full h-full flex items-center justify-center">
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
        <StatusIndicator text="" />
      </div>
    );
  }

  // CSS Fallback (tertiary)
  console.log('Using CSS fallback robot');
  return <CSSRobotFallback />;
};

export default Robot3D;