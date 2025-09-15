import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceInterest: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const location = useLocation();
  const preSelectedService = location.state?.preSelectedService || '';
  const fromServices = location.state?.fromServices || false;
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const services = [
    // Landscaping & Yard Care
    'Professional Lawn Mowing',
    'Hedge & Bush Trimming',
    'Precision Edging & Trimming',
    'Leaf Removal & Cleanup',
    'Premium Sod Installation',
    'Garden Design & Planting',
    
    // Tree & Plant Services
    'Professional Tree Trimming',
    'Tree Removal Service',
    'Stump Grinding & Removal',
    'Plant Health Care',
    
    // Construction & Hardscaping
    'Custom Deck Building',
    'Patio & Walkway Installation',
    'Professional Power Washing',
    'Irrigation System Installation',
    
    // Seasonal & Specialty Services
    'Fall Cleanup Service',
    'Spring Yard Preparation',
    'Holiday Light Installation',
    'Storm Damage Cleanup',
    
    // General Categories
    'Multiple Services',
    'Other'
  ];

  // Set pre-selected service when component mounts
  React.useEffect(() => {
    if (preSelectedService) {
      setValue('serviceInterest', preSelectedService);
    }
  }, [preSelectedService, setValue]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-gray-800 rounded-2xl p-8 border border-gray-700 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-lime-400 mx-auto mb-6" />
        </motion.div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Thank You for Your Interest!
        </h2>
        <p className="text-gray-400 leading-relaxed">
          We've received your message and will get back to you within 24 hours 
          with a detailed quote and next steps. We appreciate the opportunity 
          to serve you!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
        <Send className="w-6 h-6 text-lime-400" />
        <span>Request Your Free Quote</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <motion.p
                className="text-red-400 text-sm mt-1 flex items-center space-x-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name.message}</span>
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
              placeholder="Enter your email"
            />
            {errors.email && (
              <motion.p
                className="text-red-400 text-sm mt-1 flex items-center space-x-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email.message}</span>
              </motion.p>
            )}
          </div>
        </div>

        {/* Phone and Address Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-white font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-white font-medium mb-2">
              Property Address/Zip
            </label>
            <input
              type="text"
              id="address"
              {...register('address')}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300"
              placeholder="Enter your address or zip code"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="serviceInterest" className="block text-white font-medium mb-2">
            Service Interested In *
            {fromServices && (
              <motion.span
                className="ml-2 text-lime-400 text-sm font-normal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                (Auto-selected from Services page)
              </motion.span>
            )}
          </label>
          <motion.select
            id="serviceInterest"
            {...register('serviceInterest', { required: 'Please select a service' })}
            className={`w-full px-4 py-3 bg-gray-700 border rounded-lg text-white focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 ${
              fromServices && preSelectedService 
                ? 'border-lime-400 ring-2 ring-lime-400/20' 
                : 'border-gray-600'
            }`}
            initial={fromServices ? { scale: 1.02, borderColor: '#a3e635' } : {}}
            animate={fromServices ? { 
              scale: [1.02, 1, 1.02, 1],
              borderColor: ['#a3e635', '#65a30d', '#a3e635', '#4b5563']
            } : {}}
            transition={{ 
              duration: 2,
              times: [0, 0.3, 0.7, 1],
              ease: "easeInOut"
            }}
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
            {preSelectedService && !services.includes(preSelectedService) && (
              <option value={preSelectedService} selected>
                {preSelectedService}
              </option>
            )}
          </motion.select>
          {errors.serviceInterest && (
            <motion.p
              className="text-red-400 text-sm mt-1 flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle className="w-4 h-4" />
              <span>{errors.serviceInterest.message}</span>
            </motion.p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Please provide project details' })}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 resize-none"
            placeholder="Tell us about your project, property size, specific needs, timeline, or any questions you have..."
          />
          {errors.message && (
            <motion.p
              className="text-red-400 text-sm mt-1 flex items-center space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message.message}</span>
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-lime-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-lime-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-400/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message & Get Quote</span>
            </>
          )}
        </motion.button>

        <p className="text-gray-400 text-sm text-center">
          * Required fields. We typically respond within 24 hours with a detailed quote.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;