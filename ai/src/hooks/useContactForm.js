import { useState } from 'react';

export const useContactForm = () => {
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
    
    // Simulate API call - replace with actual API call
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
      setErrors({});
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

  const handlePrivacyChange = (checked) => {
    setAcceptedPrivacy(checked);
    if (errors.privacy) {
      setErrors(prev => ({ ...prev, privacy: '' }));
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    acceptedPrivacy,
    handleChange,
    handleSubmit,
    handlePrivacyChange
  };
};