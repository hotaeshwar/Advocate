import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, Video, User, CheckCircle2, ArrowRight } from 'lucide-react';

const CalendlyBooking = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          setIsVisible(true);
          setTimeout(() => setShowHeading(true), 200);
          setTimeout(() => setShowContent(true), 400);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const appointmentTypes = [
    {
      icon: User,
      title: 'Initial Consultation',
      duration: '30 Minutes',
      price: 'Free',
      description: 'Discuss your legal matter and understand how we can help',
      features: ['Case evaluation', 'Legal advice', 'Fee structure discussion'],
      calendlyUrl: 'https://calendly.com/your-username/30min'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      duration: '60 Minutes',
      price: '₹2,000',
      description: 'Detailed consultation via video call for your legal needs',
      features: ['In-depth case analysis', 'Legal strategy discussion', 'Document review'],
      calendlyUrl: 'https://calendly.com/your-username/60min'
    },
    {
      icon: Calendar,
      title: 'In-Person Meeting',
      duration: '90 Minutes',
      price: '₹5,000',
      description: 'Face-to-face consultation at our Chandigarh office',
      features: ['Comprehensive consultation', 'Document preparation', 'Case filing guidance'],
      calendlyUrl: 'https://calendly.com/your-username/90min'
    }
  ];

  const handleBooking = (calendlyUrl) => {
    // Open Calendly in a new window/tab
    window.open(calendlyUrl, '_blank', 'width=800,height=600');
  };

  return (
    <section id="booking" ref={sectionRef} className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
            <Calendar className="mx-3 sm:mx-4 w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Book an <span className="text-amber-500">Appointment</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Schedule a consultation with Advocate Deep Singh at your convenience
          </p>
        </div>

        {/* Appointment Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-700 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {appointmentTypes.map((appointment, index) => {
            const Icon = appointment.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                <div className="relative z-10 p-6 sm:p-8">
                  {/* Icon and Price Badge */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 group-hover:text-amber-400 transition-colors duration-300" />
                    </div>
                    <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs sm:text-sm font-bold border border-amber-500/30">
                      {appointment.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {appointment.title}
                  </h3>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{appointment.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {appointment.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {appointment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0 group-hover:text-amber-400 transition-colors duration-300" />
                        <span className="group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Book Button */}
                  <button
                    onClick={() => handleBooking(appointment.calendlyUrl)}
                    className="relative w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base overflow-hidden group/btn"
                  >
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-30 group-hover/btn:animate-shimmer"></div>
                    
                    {/* Pulsing glow behind button */}
                    <div className="absolute -inset-1 bg-amber-500 rounded-lg blur-lg opacity-50 group-hover/btn:opacity-100 animate-pulse-glow"></div>
                    
                    <span className="relative z-10">Book Now</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Calendly Embed Section */}
        <div className={`transition-all duration-700 delay-400 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-amber-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
                Select Your Preferred Time
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
                Choose a convenient time slot from our available calendar below
              </p>

              {/* Calendly Widget Placeholder */}
              <div className="relative w-full bg-slate-900/50 rounded-xl border border-amber-500/20 overflow-hidden" style={{ minHeight: '500px' }}>
                {/* This is where Calendly widget will be embedded */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <Calendar className="w-16 h-16 sm:w-20 sm:h-20 text-amber-500 mb-4" />
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Calendly Integration</h4>
                  <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md">
                    Replace this section with your Calendly embed code or inline widget
                  </p>
                  <div className="bg-slate-800/80 p-4 rounded-lg border border-amber-500/20 max-w-xl">
                    <p className="text-xs sm:text-sm text-gray-300 font-mono text-left">
                      {`<!-- Calendly inline widget begin -->`}<br/>
                      {`<div class="calendly-inline-widget"`}<br/>
                      {`  data-url="https://calendly.com/your-username"`}<br/>
                      {`  style="min-width:320px;height:630px;">`}<br/>
                      {`</div>`}<br/>
                      {`<script type="text/javascript"`}<br/>
                      {`  src="https://assets.calendly.com/assets/external/widget.js"`}<br/>
                      {`  async>`}<br/>
                      {`</script>`}<br/>
                      {`<!-- Calendly inline widget end -->`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Banner */}
        <div className={`mt-12 sm:mt-16 transition-all duration-700 delay-600 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-r from-amber-600/20 via-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                For urgent legal matters, call us directly or send an email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+919876543210" 
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/50 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  Call: +91 98765 43210
                </a>
                <a 
                  href="mailto:himanshukhanegwal@gmail.com" 
                  className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 border border-amber-500/30 hover:border-amber-500/60 text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <User className="w-5 h-5" />
                  Email Us
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

export default CalendlyBooking;