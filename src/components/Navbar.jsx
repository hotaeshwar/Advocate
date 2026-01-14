import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Video } from 'lucide-react';

const Navbar = ({ onConsultClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Updated function to handle booking button click
  const handleBookingClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Call the parent's onConsultClick function if provided
    if (onConsultClick) {
      onConsultClick();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo - Clickable to Home */}
          <a 
            href="#home" 
            onClick={scrollToTop}
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0 cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <img 
                src="/images/Gold justice emblem and logo design.png" 
                alt="Law Firm Logo" 
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain"
                style={{ 
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                  transform: 'scale(1.7)',
                  transformOrigin: 'center'
                }}
              />
            </div>
            <div className="hidden sm:block ml-4 md:ml-6 lg:ml-8">
              <h2 className="text-white font-bold text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">Advocate Deep Singh</h2>
              <p className="text-amber-400 text-xs md:text-sm whitespace-nowrap">Legal Excellence</p>
            </div>
          </a>

          {/* Desktop Navigation - Hidden on iPad Pro and below */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8 flex-grow justify-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-white text-sm 2xl:text-base font-medium group py-2 whitespace-nowrap cursor-pointer"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-amber-400">
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-amber-500/10 rounded-lg scale-0 transition-transform duration-300 group-hover:scale-100"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons - Desktop & iPad Pro */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
            <a
              href="tel:+919876543210"
              className="hidden lg:flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300 whitespace-nowrap text-sm xl:text-base"
            >
              <Phone className="w-4 h-4 xl:w-5 xl:h-5" />
              <span className="font-semibold">+91 98765 43210</span>
            </a>
            <button 
              onClick={handleBookingClick}
              className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 lg:px-4 lg:py-2.5 xl:px-6 xl:py-2.5 rounded-lg font-semibold text-xs lg:text-sm xl:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-600/50 flex items-center gap-1.5 lg:gap-2 whitespace-nowrap cursor-pointer"
            >
              <Video className="w-4 h-4 xl:w-5 xl:h-5" />
              Consult Online
            </button>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 flex-shrink-0"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:translate-x-2 hover:text-amber-400 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile & Tablet CTA */}
            <div className="pt-4 space-y-3 border-t border-white/10">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                <Phone className="w-5 h-5" />
                +91 98765 43210
              </a>
              <button 
                onClick={handleBookingClick}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-600/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Video className="w-5 h-5" />
                Consult Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;