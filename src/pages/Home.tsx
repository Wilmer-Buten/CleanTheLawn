import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServicesTeaser from '../components/ServicesTeaser';
import ServicesCarousel from '../components/TestimonialsCarousel';
import ServiceAreas from '../components/ServiceAreas';
import WhyChooseUs from '../components/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cleanthelawn Landscaping - Professional Landscaping in PG County, Maryland</title>
        <meta name="description" content="Professional landscaping and lawn care services in Prince George's County, Maryland. Serving College Park, Bowie, Greenbelt, Hyattsville and surrounding areas. Free quotes available." />
        <meta name="keywords" content="landscaping Prince George's County MD, lawn care College Park MD, Bowie landscaping, Greenbelt lawn service, Hyattsville yard care" />
        <link rel="canonical" href="https://cleanthelawn.com/" />
      </Helmet>
      
      {/* Floating Particles Background */}
      
      <Hero />
      <ServicesTeaser />
      {/* <ServicesCarousel /> */}
      <WhyChooseUs />
      <ServiceAreas />
    </>
  );
};

export default Home;