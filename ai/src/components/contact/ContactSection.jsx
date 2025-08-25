'use client';

import BorderWrapper from '@/components/common/BorderWrapper';
import ContactForm from './ContactForm';
import TestimonialCard from './TestimonialCard';

const ContactSection = ({ 
  headline = "Got a project in mind?",
  ctaText = "Let's solve it",
  showBackground = true,
  className = ""
}) => {
  return (
    <section 
      className={`min-h-[calc(100vh-80px)] flex items-center py-8 lg:py-12 ${
        showBackground ? 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800' : ''
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <BorderWrapper>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Form */}
            <ContactForm headline={headline} ctaText={ctaText} />
            
            {/* Right Side - Testimonial Card */}
            <TestimonialCard />
          </div>
        </BorderWrapper>
      </div>
    </section>
  );
};

export default ContactSection;