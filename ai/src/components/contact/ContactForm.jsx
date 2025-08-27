'use client';

import FormInput from './FormInput';
import FileUploadButton from './FileUploadButton';
import { useContactForm } from '@/hooks/useContactForm';

const ContactForm = ({ headline, ctaText }) => {
  const {
    formData,
    errors,
    isSubmitting,
    acceptedPrivacy,
    handleChange,
    handleSubmit,
    handlePrivacyChange
  } = useContactForm();

  return (
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
          <FormInput
            label="Your Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Riya Rathore"
            error={errors.name}
          />
          
          <FormInput
            label="Your phone number"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 696969696"
            error={errors.phone}
          />
        </div>
        
        {/* Email & Company Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Your E-mail"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. Riya@gmail.com"
            error={errors.email}
          />
          
          <FormInput
            label="Company"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="AI DEV"
          />
        </div>
        
        {/* Message with Attach File Button */}
        <FormInput
          label="How can we help you?"
          type="textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. you are interested in Uber-Like application"
          rows={3}
        >
          <FileUploadButton 
            onChange={handleChange} 
            fileName={formData.file?.name}
          />
        </FormInput>
        
        {/* Privacy Policy */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="privacy"
            checked={acceptedPrivacy}
            onChange={(e) => handlePrivacyChange(e.target.checked)}
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
          className={`px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-all duration-200 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : ctaText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;