import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const serviceAreas = [
    'Berwyn Heights', 'Bladensburg', 'Bowie', 'Brentwood', 'Capitol Heights',
    'Cheverly', 'College Park', 'District Heights', 'Fairmount Heights',
    'Glenarden', 'Greenbelt', 'Hyattsville', 'Landover Hills', 'Laurel',
    'New Carrollton', 'Riverdale Park', 'Seat Pleasant', 'University Park', 'Upper Marlboro'
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-green-600 to-emerald-700 border-t border-green-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-2">
          {/* Company Info */}
          <motion.div
            className="space-y-4 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-start space-y-4">
              <img
                src="/logo.webp"
                alt="Cleanthelawn Landscaping Logo"
                className="h-32 w-auto rounded-xl shadow-lg border-2 border-white/20"
                loading="lazy"
                decoding="async"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white font-nature mb-1">Cleanthelawn</h3>
                <p className="text-sm text-green-100 uppercase tracking-wider font-organic">Professional Landscaping</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed font-organic">
              Expert landscaping and yard care services in Prince George's County. 
              Professional, reliable, and eco-friendly solutions for your outdoor spaces.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-green-800 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-green-800 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links - Aumentar ancho para ocupar más espacio */}
          <motion.div
            className="space-y-4 lg:col-span-1 lg:col-start-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-green-100 hover:text-yellow-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info - Sin max-width y posicionado más cerca */}
          <motion.div
            className="space-y-4 lg:col-span-1 lg:col-start-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-300" />
                <a
                  href="tel:555-123-4567"
                  className="text-green-100 hover:text-yellow-300 transition-colors text-sm"
                >
                  (240) 810-6798
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-300" />
                <a
                  href="mailto:cleanthelawnlandscaping@gmail.com"
                  className="text-green-100 hover:text-yellow-300 transition-colors text-sm break-words"
                >
                  cleanthelawnlandscaping@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-300 mt-0.5" />
                <span className="text-green-100 text-sm">
                  Serving Prince George's County
                </span>
              </div>
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            className="space-y-4 lg:col-span-1 lg:col-start-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Service Areas</h4>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-green-100 hover:text-yellow-300 transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-green-500 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-green-100 text-sm">
            © 2025 Cleanthelawn Landscaping. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-green-100 hover:text-yellow-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-green-100 hover:text-yellow-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;