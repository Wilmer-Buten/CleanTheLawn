import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, CheckCircle } from 'lucide-react';

// Import hero images
import heroMainImage from '../assets/images/ceo.webp';
import heroSecondImage from '../assets/images/2nd.webp';
import heroThirdImage from '../assets/images/3rd.webp';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-green-50 overflow-hidden pt-20 sm:pt-24 lg:pt-28 xl:pt-32">

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)] py-12 lg:py-20">
          
          {/* Mobile Images Section - Shows only on mobile */}
          <div className="lg:hidden order-1 flex justify-center items-center mb-8">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img
                  src={heroMainImage}
                  alt="Professional lawn mowing service"
                  className="w-48 h-36 rounded-2xl shadow-2xl border-2 border-white object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Floating Image 1 */}
              <motion.div
                className="absolute -top-2 -right-2 z-0"
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img
                  src={heroSecondImage}
                  alt="Tree trimming service"
                  className="w-20 h-15 rounded-xl shadow-lg border-2 border-white object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Floating Image 2 */}
              <motion.div
                className="absolute -bottom-2 -left-2 z-0"
                initial={{ opacity: 0, x: -20, y: 20 }}
              
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img
                  src={heroThirdImage}
                  alt="Landscaping design service"
                  className="w-20 h-15 rounded-xl shadow-lg border-2 border-white object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Decorative Elements - Mobile */}
              <motion.div
                className="absolute top-2 left-2 w-3 h-3 bg-yellow-400 rounded-full z-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-2 right-2 w-2 h-2 bg-emerald-400 rounded-full z-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <motion.div
            className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight">
                Professional{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700">
                  Landscaping
                </span>{' '}
                in PG county, MD
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-organic">
                Transform your outdoor space with expert lawn care, landscaping, 
                and property maintenance services. Serving Athens, Huntsville, 
                Madison, Decatur, and surrounding areas.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {[
                'Consistent Maintenance',
                'Free Estimates',
                '5-Star Service',
                '19+ Cities Served'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-2 sm:space-x-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                >
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-green-700 font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-emerald-400 hover:to-green-500 transition-all duration-150 hover:scale-105 shadow-2xl hover:shadow-emerald-400/25 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" />
              </Link>
              
              <a
                href="tel:555-123-4567"
                className="group flex items-center space-x-3 text-green-600 hover:text-emerald-600 transition-colors duration-150 font-organic font-semibold w-full sm:w-auto justify-center"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 border-2 border-green-600 group-hover:border-emerald-600 rounded-full flex items-center justify-center transition-all duration-150 group-hover:scale-110">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                </div>
                <span className="text-sm sm:text-base">Call (240) 810-6798</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 pt-4 sm:pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-green-700 font-medium text-sm sm:text-base">
                500+ Happy Customers
              </span>
            </motion.div>
          </motion.div>

          {/* Desktop Images Section - Shows only on desktop */}
          <motion.div
            className="hidden lg:flex order-1 lg:order-2 relative justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15 }}
              >
                <img
                  src={heroMainImage}
                  alt="Professional lawn mowing service"
                  className="w-80 lg:w-96 xl:w-[450px] h-60 lg:h-72 xl:h-80 rounded-3xl shadow-2xl border-4 border-white object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Floating Images */}
              <motion.div
                className="absolute -top-8 -right-8 z-0"
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={heroSecondImage}
                  alt="Tree trimming service"
                  className="w-32 lg:w-40 xl:w-48 h-24 lg:h-30 xl:h-36 rounded-2xl shadow-xl border-4 border-white object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 z-0"
                animate={{
                  y: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={heroThirdImage}
                  alt="Landscaping design service"
                  className="w-32 lg:w-40 xl:w-48 h-24 lg:h-30 xl:h-36 rounded-2xl shadow-xl border-4 border-white object-cover"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 left-4 w-6 h-6 bg-yellow-400 rounded-full z-0"
                animate={{
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-4 right-4 w-4 h-4 bg-emerald-400 rounded-full z-0"
                animate={{
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;