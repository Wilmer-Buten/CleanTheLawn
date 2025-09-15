import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesTeaser from '../components/ServicesTeaser';
import ServicesCarousel from '../components/TestimonialsCarousel';
import ServiceAreas from '../components/ServiceAreas';
import WhyChooseUs from '../components/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cleanthelawn Landscaping - Expert Lawn Care & Landscaping Services in North Alabama</title>
        <meta name="description" content="Professional landscaping and lawn care services in North Alabama. Serving Athens, Huntsville, Madison, Decatur and surrounding areas. Free quotes available." />
        <meta name="keywords" content="landscaping North Alabama, lawn care Athens AL, Huntsville landscaping, Madison lawn service, Decatur yard care" />
        <link rel="canonical" href="https://cleanthelawn.com/" />
      </Helmet>
      
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-emerald-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Larger floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-green-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <Hero />
      <ServicesTeaser />
      <ServicesCarousel />
      <WhyChooseUs />
      <ServiceAreas />
    </>
  );
};

export default Home;