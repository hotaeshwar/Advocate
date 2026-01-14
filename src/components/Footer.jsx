import React from 'react';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-start">
            
            {/* Company Info Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <img 
                    src="/images/Gold justice emblem and logo design.png" 
                    alt="Law Firm Logo" 
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain filter drop-shadow-lg"
                    style={{ 
                      transform: 'scale(1.6)',
                      transformOrigin: 'center left'
                    }}
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">Advocate Deep Singh</h3>
                  <p className="text-xs sm:text-sm text-amber-400">Legal Excellence</p>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                25+ years of trusted legal expertise across Tricity.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/50 hover:bg-amber-600 p-2 rounded-lg transition-all duration-300 hover:transform hover:scale-110 group"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-500" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-xs sm:text-sm text-gray-400 hover:text-amber-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-2">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Contact Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>SCO 123, Sector 17, Chandigarh, Tricity</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-amber-500 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <a href="mailto:contact@deepsinghlaw.com" className="text-gray-400 hover:text-amber-500 transition-colors">
                    contact@deepsinghlaw.com
                  </a>
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  <span className="text-amber-400 font-semibold">24/7 Emergency Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              © {currentYear} Advocate Deep Singh. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs">
              <a href="#privacy" className="text-gray-500 hover:text-amber-500 transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#terms" className="text-gray-500 hover:text-amber-500 transition-colors">Terms</a>
              <span className="text-gray-700">|</span>
              <a href="#disclaimer" className="text-gray-500 hover:text-amber-500 transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;