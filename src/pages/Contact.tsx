import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  CheckCircle, Star, MessageSquare 
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(240) 810-6798',
      link: 'tel:240-810-6798',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'cleanthelawnlandscaping@gmail.com',
      link: 'mailto:cleanthelawnlandscaping@gmail.com',
      description: 'Send us a detailed message'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      value: 'North Alabama',
      link: '#',
      description: '19 cities and growing'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Sat: 7AM-6PM',
      link: '#',
      description: 'Emergency services available'
    }
  ];

  const serviceAreas = [
    'Athens', 'Ardmore', 'Belle Mina', 'Brownsboro', 'Madison',
    'Hartselle', 'Decatur', 'Huntsville', 'Elkmont', 'Grant',
    'Guntersville', 'Gurley', 'Harvest', 'Hazel Green', 'Laceys Spring',
    'Meridianville', 'Mooresville', 'New Hope', 'New Market'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get Free Quote | Cleanthelawn Landscaping Prince George's County</title>
        <meta name="description" content="Contact Cleanthelawn Landscaping for free quotes on lawn care and landscaping services. Serving College Park, Bowie, Greenbelt, Hyattsville and Prince George's County." />
        <meta name="keywords" content="landscaping quote Prince George's County MD, lawn care estimate, contact landscaper College Park MD, Bowie landscaping quote" />
        <link rel="canonical" href="https://cleanthelawn.com/contact" />
      </Helmet>

      <div className="pt-24 pb-20">
        {/* Extra spacing for hero content */}
        <div className="pt-24">
        {/* Header Section with Background */}
        <div className="bg-green-100 border-b-4 border-emerald-300/50 shadow-lg mb-16">
          <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
                Get Your <span className="text-emerald-600">Free Quote</span>
              </h1>
              <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed font-organic">
                Ready to transform your outdoor space? Contact us today for a free, 
                no-obligation quote. We'll work with you to create the perfect 
                landscaping solution for your Prince George's County property.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Contact Details */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-lime-400" />
                  <span>Get In Touch</span>
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center group-hover:bg-lime-300 transition-colors">
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-lime-400 hover:text-lime-300 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                        <p className="text-gray-400 text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Service Coverage Section */}
              <motion.div
                className="bg-green-100 rounded-3xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                    Our <span className="text-emerald-600">Service Coverage</span>
                  </h2>
                  <p className="text-green-700 text-sm leading-relaxed">
                    We proudly serve 19 cities across Prince George's County. Click on any marker 
                    to see if we service your area and get location-specific information.
                  </p>
                </div>
                
                {/* Map Container */}
                <div className="mb-6">
                  <GoogleMap 
                    height="h-96" 
                    showServiceAreas={true} 
                    interactive={true} 
                  />
                </div>
                
                {/* Map Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-green-200 text-center shadow-lg">
                    <MapPin className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-green-800 font-semibold text-sm mb-1">19 Cities</h4>
                    <p className="text-green-700 text-xs">Active service locations across Prince George's County</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-green-200 text-center shadow-lg">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-green-800 font-semibold text-sm mb-1">50km Radius</h4>
                    <p className="text-green-700 text-xs">Comprehensive coverage area</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-green-200 text-center shadow-lg">
                    <Star className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                    <h4 className="text-green-800 font-semibold text-sm mb-1">Same Day</h4>
                    <p className="text-green-700 text-xs">Quick quote response time</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;