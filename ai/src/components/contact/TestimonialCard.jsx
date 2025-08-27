'use client';

import { useState } from 'react';
import TestimonialNavigation from './TestimonialNavigation';
import { testimonials } from '@/data/testimonialsData';

const TestimonialCard = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="lg:pl-8">
      <div className="bg-gray-800 dark:bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
        
        {/* Quote Icon */}
        <div className="text-6xl text-yellow-400 mb-4 font-serif">"</div>
        
        {/* Testimonial Text */}
        <p className="text-gray-100 mb-6 leading-relaxed min-h-[100px]">
          {current.text}
        </p>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-8">
          <span className="text-yellow-400 font-bold text-lg">{current.rating}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className="w-5 h-5 text-yellow-400 fill-current" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <TestimonialNavigation
          testimonials={testimonials}
          currentIndex={currentTestimonial}
          onPrevious={prevTestimonial}
          onNext={nextTestimonial}
        />
        
        {/* Author Details */}
        <div className="text-center mt-6">
          <p className="font-semibold text-lg">{current.author}</p>
          <p className="text-gray-400 text-sm">
            {current.role} {current.flag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;