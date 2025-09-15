import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Star, Shield, Award, Clock, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to scale and position
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 50]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 10]);

  const benefits = [
    {
      icon: Star,
      title: '5 Star Professional Service',
      description: 'Consistently rated 5 stars by our customers for quality and reliability'
    },
    {
      icon: Heart,
      title: 'Locally Owned & Operated',
      description: 'North Alabama family business committed to our community'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Professional results with attention to every detail'
    },
    {
      icon: Clock,
      title: 'Reliable & Punctual',
      description: 'On-time service you can count on, every time'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with comprehensive warranties'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-green-100 via-blue-50 to-emerald-100 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 via-transparent to-green-400/30" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* Left Side - Animated Lawn Mower */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{ scale, x, rotate }}
          >
            <div className="relative">
              {/* Lawn Mower Image */}
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Professional lawn mower equipment"
                  className="w-full max-w-xs sm:max-w-md rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-8 h-8 text-white fill-current" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <CheckCircle className="w-6 h-6 text-white" />
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-emerald-400/30 rounded-2xl blur-3xl scale-110 -z-10" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Why Choose <span className="text-emerald-600">Cleanthelawn?</span>
              </motion.h2>
              
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-green-700 leading-relaxed mb-6 sm:mb-8 font-organic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                We're not just another landscaping company. We're your neighbors, 
                committed to making North Alabama properties beautiful, one lawn at a time.
              </motion.p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 sm:space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-emerald-400 group-hover:to-green-500 transition-colors duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <benefit.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-green-800 mb-1 sm:mb-2 group-hover:text-emerald-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-green-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-emerald-400 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-400/25"
              >
                <span>Get Your Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-green-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Satisfied Customers', icon: Heart },
            { number: '19', label: 'Cities Served', icon: CheckCircle },
            { number: '5+', label: 'Years Experience', icon: Award },
            { number: '100%', label: 'Satisfaction Rate', icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-emerald-400 transition-all duration-300 shadow-lg border border-green-200"
                whileHover={{ rotate: 10 }}
              >
                <stat.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-emerald-600 group-hover:text-white transition-colors" />
              </motion.div>
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2 group-hover:text-green-800 transition-colors">
                {stat.number}
              </div>
              <div className="text-green-700 text-xs sm:text-sm uppercase tracking-wider group-hover:text-green-600 transition-colors text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;