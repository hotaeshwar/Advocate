import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showWhyChoose, setShowWhyChoose] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef(null);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['himanshukhanegwal@gmail.com', 'legal@deepsingh.com'],
      link: 'mailto:himanshukhanegwal@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['SCO 123, Sector 17', 'Chandigarh - 160017'],
      link: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
      link: '#'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setIsVisible(true);
          
          // Show heading first
          setTimeout(() => setShowHeading(true), 200);
          
          // Show contact info cards one by one
          contactInfo.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, 400 + (index * 150));
          });
          
          // Show form after cards
          setTimeout(() => {
            setShowForm(true);
          }, 400 + (contactInfo.length * 150) + 200);
          
          // Show why choose us last
          setTimeout(() => {
            setShowWhyChoose(true);
          }, 400 + (contactInfo.length * 150) + 600);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/himanshukhanegwal@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
            <Mail className="mx-3 sm:mx-4 w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Get in <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Schedule a consultation with Advocate Deep Singh today
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isCardVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                className={`group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/60 transition-all duration-700 hover:transform hover:scale-105 ${isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-500/10 rounded-xl mb-4 group-hover:bg-amber-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-amber-500 group-hover:text-amber-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className={`relative bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border border-amber-500/20 transition-all duration-700 ${showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send us a Message</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">Fill out the form below and we'll get back to you shortly</p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 text-center">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/50 border border-amber-500/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-900/50 border border-amber-500/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 transition-colors duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Phone *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-900/50 border border-amber-500/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 transition-colors duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-amber-500/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-amber-500/60 transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Property Law">Property Law</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Consumer Rights">Consumer Rights</option>
                      <option value="Other">Other Legal Matter</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Message *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full bg-slate-900/50 border border-amber-500/20 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60 transition-colors duration-300 resize-none"
                        placeholder="Please describe your legal matter..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button with Glow Effect */}
                  <button
                    onClick={handleSubmit}
                    className="relative w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base overflow-hidden group"
                  >
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer"></div>
                    
                    {/* Pulsing glow behind button */}
                    <div className="absolute -inset-1 bg-amber-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 animate-pulse-glow"></div>
                    
                    <Send className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={`relative bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-amber-500/20 transition-all duration-700 ${showWhyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Why Choose Us?</h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start text-sm sm:text-base text-gray-300 group">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-amber-400 transition-colors duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">25+ Years of Legal Excellence</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-gray-300 group">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-amber-400 transition-colors duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">98% Success Rate in Cases</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-gray-300 group">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-amber-400 transition-colors duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Available 24/7 for Emergencies</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-gray-300 group">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-amber-400 transition-colors duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Supreme Court Appearances</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-gray-300 group">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-amber-400 transition-colors duration-300"></div>
                  <span className="group-hover:text-white transition-colors duration-300">Trusted by 2000+ Clients</span>
                </li>
              </ul>

              {/* Additional Call to Action */}
              <div className="mt-8 sm:mt-10 p-6 bg-gradient-to-r from-amber-600/20 via-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-xl">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">Emergency Legal Assistance?</h4>
                <p className="text-sm text-gray-300 mb-4">We're available 24/7 for urgent legal matters</p>
                <a 
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;