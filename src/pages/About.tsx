import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
 Leaf, Shield, Clock, Heart, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ceo from '../assets/images/ceo.webp';

// Import additional images
import aboutMainImage from '../assets/images/principal2.webp';
const About: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Practices',
      description: 'We use sustainable methods and environmentally responsible products to protect your landscape and the planet.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Every project comes with our satisfaction guarantee. We stand behind our work with comprehensive warranties.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Punctual, professional service you can count on. We respect your time and deliver on our promises.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen to your needs and exceed your expectations every time.'
    }
  ];

  const timeline = [
    { year: 'June 2025', event: 'Company Founded', description: 'Elvis and Marco officially launched Cleanthelawn with a vision to provide exceptional landscaping services' },
    { year: 'Summer 2025', event: 'First Clients', description: 'Successfully completed our first landscaping projects in Prince George\'s County' },
    { year: 'Fall 2025', event: 'Service Expansion', description: 'Expanded services to include seasonal cleanup and maintenance programs' },
    { year: '2026', event: 'Growth Phase', description: 'Planning to serve multiple cities across Prince George\'s County' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Cleanthelawn Landscaping Team & Company History</title>
        <meta name="description" content="Learn about Cleanthelawn Landscaping's experienced team, company values, and commitment to excellence in Prince George's County landscaping services." />
        <meta name="keywords" content="landscaping company Prince George's County MD, professional landscaping team, College Park MD landscaping, eco-friendly lawn care" />
        <link rel="canonical" href="https://cleanthelawn.com/about" />
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
                About <span className="text-emerald-600">Cleanthelawn</span>
              </h1>
              <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed font-organic">
                We're passionate about creating beautiful outdoor spaces in Prince George's County 
                that enhance your property value and quality of life. Our experienced team brings 
                professionalism, reliability, and eco-friendly practices to every project.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Company Overview */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                Professional Landscaping in <span className="text-emerald-600">Prince George's County</span>
              </h2>
              <p className="text-green-700 leading-relaxed">
                Cleanthelawn Landscaping has been serving Prince George's County communities with 
                dedication and expertise since June 2025. We specialize in comprehensive 
                landscaping and property maintenance services that enhance the beauty 
                and value of residential and commercial properties.
              </p>
              <p className="text-green-700 leading-relaxed">
                Founded by two ambitious young entrepreneurs, our commitment to excellence, 
                combined with eco-friendly practices and customer-focused service, makes us 
                the emerging choice for property owners throughout College Park, Bowie, 
                Greenbelt, Hyattsville, and surrounding areas.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-green-600 text-sm">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">19</div>
                  <div className="text-green-600 text-sm">Cities to Serve</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="bg-gray-700 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={aboutMainImage}
                  alt="Professional landscaping work"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
              Our <span className="text-emerald-600">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <value.icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-green-800 mb-4 group-hover:text-emerald-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
              Meet Our <span className="text-emerald-600">Expert Team</span>
            </h2>
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:scale-105 group shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
                  {/* Team Photo */}
                  <motion.div
                    className="lg:col-span-2 relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={ceo}
                      alt="Elvis Carrillo (CEO) and Marcos Medina (Co-Founder) - Cleanthelawn Leadership Team"
                      className="w-full h-64 lg:h-80 rounded-xl object-cover border-4 border-green-500 shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                  </motion.div>

                  {/* Team Info */}
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                        Our Founding Team
                      </h3>
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <div>
                          <div className="bg-green-50 rounded-lg p-4 h-full">
                            <h4 className="text-lg font-semibold text-green-600 mb-1">Elvis Medina</h4>
                            <p className="text-gray-600 text-sm font-medium mb-3">Co-Founder & CEO</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Elvis Medina is an ambitious entrepreneur and junior in college from 
                              Prince George's County, Maryland. A Dean's List student and resident 
                              advisor, he brings strong leadership, discipline, and attention to 
                              detail in everything he does. With a deep passion for entrepreneurship, 
                              service, and personal growth, Elvis balances academic excellence with 
                              athletic drive. Guided by his faith in God and love for family, he is 
                              committed to building a life and career that uplifts others.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-emerald-50 rounded-lg p-4 h-full">
                            <h4 className="text-lg font-semibold text-green-600 mb-1">Marco Carrillo</h4>
                            <p className="text-gray-600 text-sm font-medium mb-3">Co-Founder & Investor</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Marco Carrillo is an investor and entrepreneur from Montgomery County, 
                              Maryland, with a B.S. in Finance. He is driven, respectful, and known 
                              for his charismatic leadership and strong sense of integrity. Grounded 
                              in his faith in God, Marco values family, health, and serving the 
                              community. Outside of work, he enjoys playing basketball, hiking, and 
                              expressing his creativity through hands-on activities. His passion for 
                              growth and giving back inspires everything he does.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-800 font-medium text-sm mb-3">Our Leadership Focus:</p>
                      <div className="flex flex-wrap gap-2">
                        {['Academic Excellence', 'Community Service', 'Faith & Family', 'Entrepreneurial Growth'].map((focus, i) => (
                          <span
                            key={i}
                            className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Timeline */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
              Our <span className="text-emerald-600">Journey</span>
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-lime-400 h-full hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:space-x-8`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-1 bg-gradient-to-br from-green-200/60 via-emerald-200/50 to-blue-200/40 rounded-2xl p-6 border border-green-300/50 relative shadow-lg">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-white text-xs text-center leading-tight px-2 flex-shrink-0">
                          <span className="break-words hyphens-auto">{item.year}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-green-800 font-nature break-words">
                            {item.event}
                          </h3>
                        </div>
                      </div>
                      <p className="text-green-700 leading-relaxed font-organic break-words hyphens-auto">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-emerald-500 rounded-full hidden md:block relative z-20 flex-shrink-0" />
                    
                    {index % 2 === 0 ? (
                      <div className="flex-1 hidden md:block" />
                    ) : (
                      <div className="flex-1 hidden md:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Ready to Work with <span className="text-emerald-600">Our Team?</span>
            </h2>
            <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
              Experience the difference that professional, reliable landscaping 
              services can make for your property.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-400/25"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;