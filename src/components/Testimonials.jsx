import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [clients, setClients] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [experience, setExperience] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner, Chandigarh',
      rating: 5,
      text: 'Advocate Deep Singh provided exceptional legal counsel for our corporate disputes. His deep understanding of commercial law and strategic approach helped us achieve a favorable settlement. Highly recommend his services for any business-related legal matters in Tricity.',
      case: 'Corporate Law'
    },
    {
      name: 'Priya Sharma',
      role: 'Homemaker, Mohali',
      rating: 5,
      text: 'During my difficult divorce proceedings, Advocate Deep Singh showed tremendous empathy and professionalism. He protected my rights and ensured fair custody arrangements for my children. His 25+ years of experience in family law truly made a difference in my case.',
      case: 'Family Law'
    },
    {
      name: 'Amit Patel',
      role: 'Software Engineer, Panchkula',
      rating: 5,
      text: 'I was falsely accused in a criminal case and was extremely stressed. Advocate Deep Singh\'s expertise in criminal defense and his appearance in the Supreme Court gave me confidence. He secured my acquittal with his brilliant legal strategy and courtroom skills.',
      case: 'Criminal Defense'
    },
    {
      name: 'Manjeet Singh',
      role: 'Retired Army Officer, Chandigarh',
      rating: 5,
      text: 'Our property dispute had been dragging for years until we consulted Advocate Deep Singh. His thorough knowledge of property law and his meticulous approach resolved our case within months. His success rate of 98% is truly justified. Best lawyer in Punjab!',
      case: 'Property Law'
    },
    {
      name: 'Neha Gupta',
      role: 'Teacher, Zirakpur',
      rating: 5,
      text: 'Advocate Deep Singh handled my consumer rights case with utmost dedication. His client-focused approach and transparent communication throughout the legal process made me feel supported. He won the case and secured full compensation for me. Grateful for his services!',
      case: 'Consumer Rights'
    },
    {
      name: 'Vikram Mehta',
      role: 'Entrepreneur, Chandigarh',
      rating: 5,
      text: 'As a startup founder, I needed reliable legal advice for contracts and compliance. Advocate Deep Singh has been our trusted legal partner for 3 years. His expertise in corporate law and business matters has been invaluable. Available 24/7 for emergency consultations!',
      case: 'Corporate Advisory'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          setIsVisible(true);
          setTimeout(() => setShowHeading(true), 100);
          setTimeout(() => setShowCards(true), 300);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Counter animation effect
  useEffect(() => {
    const handleStatsScroll = () => {
      if (statsRef.current && !hasAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          setHasAnimated(true);
          
          // Animate Clients counter
          const clientsTarget = 2000;
          const clientsDuration = 2000;
          const clientsIncrement = clientsTarget / (clientsDuration / 16);
          let clientsCount = 0;
          const clientsTimer = setInterval(() => {
            clientsCount += clientsIncrement;
            if (clientsCount >= clientsTarget) {
              setClients(clientsTarget);
              clearInterval(clientsTimer);
            } else {
              setClients(Math.floor(clientsCount));
            }
          }, 16);

          // Animate Success Rate counter
          const successTarget = 98;
          const successDuration = 2000;
          const successIncrement = successTarget / (successDuration / 16);
          let successCount = 0;
          const successTimer = setInterval(() => {
            successCount += successIncrement;
            if (successCount >= successTarget) {
              setSuccessRate(successTarget);
              clearInterval(successTimer);
            } else {
              setSuccessRate(Math.floor(successCount));
            }
          }, 16);

          // Animate Experience counter
          const expTarget = 25;
          const expDuration = 2000;
          const expIncrement = expTarget / (expDuration / 16);
          let expCount = 0;
          const expTimer = setInterval(() => {
            expCount += expIncrement;
            if (expCount >= expTarget) {
              setExperience(expTarget);
              clearInterval(expTimer);
            } else {
              setExperience(Math.floor(expCount));
            }
          }, 16);
        }
      }
    };

    handleStatsScroll();
    window.addEventListener('scroll', handleStatsScroll);
    return () => window.removeEventListener('scroll', handleStatsScroll);
  }, [hasAnimated]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
          showHeading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
            <Quote className="mx-3 sm:mx-4 w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Client <span className="text-amber-500">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Success stories from clients across Chandigarh, Mohali, and Panchkula
          </p>
        </div>

        {/* Main Carousel */}
        <div className={`max-w-5xl mx-auto transition-all duration-700 delay-200 ${
          showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="relative group bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 overflow-hidden">
                      {/* Glowing effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-6">
                          <div className="bg-amber-500/10 p-4 rounded-full">
                            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500 text-amber-500" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center mb-6 sm:mb-8 italic">
                          "{testimonial.text}"
                        </p>

                        {/* Case Type Badge */}
                        <div className="flex justify-center mb-4 sm:mb-6">
                          <span className="bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-amber-500/30">
                            {testimonial.case}
                          </span>
                        </div>

                        {/* Client Info */}
                        <div className="flex flex-col items-center">
                          <div className="bg-slate-700/50 p-3 rounded-full mb-3 sm:mb-4">
                            <User className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 md:-translate-x-12 bg-amber-600 hover:bg-amber-700 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 md:translate-x-12 bg-amber-600 hover:bg-amber-700 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-amber-500 w-6 sm:w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Banner with Counter Animation */}
        <div ref={statsRef} className={`mt-12 sm:mt-16 md:mt-20 transition-all duration-700 delay-400 ${
          showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-gradient-to-r from-amber-600/20 via-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden relative">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-shimmer"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center relative z-10">
              <div className="animate-pulse-slow">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 animate-count-up">{clients}+</h3>
                <p className="text-sm sm:text-base text-gray-300">Satisfied Clients</p>
              </div>
              <div className="animate-pulse-slow" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 animate-count-up">{successRate}%</h3>
                <p className="text-sm sm:text-base text-gray-300">Success Rate</p>
              </div>
              <div className="animate-pulse-slow" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 animate-count-up">{experience}+</h3>
                <p className="text-sm sm:text-base text-gray-300">Years Experience</p>
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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes count-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-count-up {
          animation: count-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;