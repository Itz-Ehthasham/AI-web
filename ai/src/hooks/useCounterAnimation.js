import { useState, useEffect, useCallback } from 'react';

export function useCounterAnimation(ref, targets) {
  const [counters, setCounters] = useState(
    Object.keys(targets).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
  );
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newCounters = {};
      Object.keys(targets).forEach(key => {
        newCounters[key] = Math.floor(targets[key] * easeOutQuart);
      });
      
      setCounters(newCounters);

      if (currentStep === steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [targets]);

  useEffect(() => {
    if (!ref?.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, hasAnimated, animateCounters]);

  return counters;
}