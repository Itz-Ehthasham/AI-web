'use client';

import { useState } from 'react';
import BorderWrapper from './BorderWrapper';

const ContactSection = ({ 
  headline = "Got a project in mind?",
  ctaText = "Let's solve it",
  showBackground = true,
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    file: null
  });

  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    
    if (!acceptedPrivacy) {
      newErrors.privacy = 'Please accept the privacy policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      alert('Thank you! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
        file: null
      });
      setAcceptedPrivacy(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        file: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "They were very attentive and helpful. I love how on top of everything everyone was. This is a great company to work with, and I'm extremely happy with my decision to work with them.",
      author: "Sai tej",
      role: "Founder, ModMatch",
      avatar: "https://ui-avatars.com/api/?name=Sai+Tej&background=random",
      flag: "🇺🇸"
    },
    {
      id: 2,
      text: "Exceptional AI integration! They transformed our business processes and delivered beyond expectations. Highly recommend their expertise.",
      author: "Yashwanth Goud",
      role: "CTO, TechFlow",
      avatar: "https://ui-avatars.com/api/?name=Yashwanth+Goud&background=random",
      flag: "🇨🇦"
    },
    {
      id: 3,
      text: "Outstanding team! They delivered our project on time and exceeded all quality expectations. Will definitely work with them again.",
      author: "Kailash Patil",
      role: "CEO, InnovateCo",
      avatar: "https://ui-avatars.com/api/?name=Kailash+Patil&background=random",
      flag: "🇬🇧"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`min-h-[calc(100vh-80px)] flex items-center py-8 lg:py-12 ${showBackground ? 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <BorderWrapper>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Form */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 uppercase">
                {headline}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fill the form and get a free consultation!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. James Bond"
                      className={`w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 text-sm`}
                    />
                    {errors.name && <p className="mt-0.5 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (007) 111-1111"
                      className={`w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 text-sm`}
                    />
                    {errors.phone && <p className="mt-0.5 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                
                {/* Email & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. j.bond@solveit.dev"
                      className={`w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 text-sm`}
                    />
                    {errors.email && <p className="mt-0.5 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Solveit Inc"
                      className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>
                
                {/* Message with Attach File Button */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    How can we help you?
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g. you are interested in Uber-Like application"
                      className="w-full px-3 py-2.5 pr-32 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white placeholder-gray-400 resize-none text-sm"
                    />
                    
                    {/* Attach File Button */}
                    <label className="absolute bottom-2 right-2">
                      <input
                        type="file"
                        name="file"
                        onChange={handleChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      />
                      <div className="flex items-center space-x-2 px-4 py-1.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {formData.file ? formData.file.name.substring(0, 10) + '...' : 'Attach file'}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* Privacy Policy */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={acceptedPrivacy}
                    onChange={(e) => {
                      setAcceptedPrivacy(e.target.checked);
                      if (errors.privacy) {
                        setErrors(prev => ({ ...prev, privacy: '' }));
                      }
                    }}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                    By sending this form I confirm that I have read and accept the{' '}
                    <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Privacy Policy
                    </a>.
                  </label>
                </div>
                {errors.privacy && <p className="text-xs text-red-500 ml-6">{errors.privacy}</p>}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : ctaText}
                </button>
              </form>
            </div>
            
            {/* Right Side - Testimonial Card */}
            <div className="lg:pl-8">
              <div className="bg-gray-800 dark:bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Quote Icon */}
                <div className="text-6xl text-yellow-400 mb-4 font-serif">"</div>
                
                {/* Testimonial Text */}
                <p className="text-gray-100 mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-8">
                  <span className="text-yellow-400 font-bold text-lg">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Author Section with Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {/* Author Avatars */}
                    <div className="flex -space-x-3">
                      {testimonials.map((testimonial, index) => (
                        <img
                          key={testimonial.id}
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className={`w-12 h-12 rounded-full border-2 border-gray-800 ${
                            index === currentTestimonial ? 'z-10 ring-2 ring-yellow-400' : ''
                          }`}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Author Details */}
                <div className="text-center mt-6">
                  <p className="font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].role} {testimonials[currentTestimonial].flag}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BorderWrapper>
      </div>
    </section>
  );
};

export default ContactSection;