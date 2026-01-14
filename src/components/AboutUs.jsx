import React, { useState, useEffect, useRef } from 'react';
import { Scale, Award, BookOpen, Users, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  const [visibleElements, setVisibleElements] = useState({
    heading: false,
    image: false,
    content: false,
    stats: false,
    values: false,
  });

  const [statCounts, setStatCounts] = useState({
    experience: 0,
    clients: 0,
    cases: 0,
    success: 0,
  });

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Check heading visibility - faster trigger
      if (sectionRef.current && !visibleElements.heading) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.9) {
          setVisibleElements(prev => ({ ...prev, heading: true }));
        }
      }

      // Check image visibility - faster trigger
      if (imageRef.current && !visibleElements.image) {
        const rect = imageRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.85) {
          setVisibleElements(prev => ({ ...prev, image: true }));
        }
      }

      // Check content visibility - faster trigger
      if (contentRef.current && !visibleElements.content) {
        const rect = contentRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.85) {
          setVisibleElements(prev => ({ ...prev, content: true }));
        }
      }

      // Check stats visibility and animate - faster trigger
      if (statsRef.current && !visibleElements.stats) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.85 && !hasAnimated.current) {
          setVisibleElements(prev => ({ ...prev, stats: true }));
          hasAnimated.current = true;
          
          // Animate counting
          animateCount(0, 25, 'experience', 2000);
          animateCount(0, 2000, 'clients', 2500);
          animateCount(0, 1000, 'cases', 2200);
          animateCount(0, 98, 'success', 2000);
        }
      }

      // Check values visibility - faster trigger
      if (valuesRef.current && !visibleElements.values) {
        const rect = valuesRef.current.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.85) {
          setVisibleElements(prev => ({ ...prev, values: true }));
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleElements]);

  // Counting animation function
  const animateCount = (start, end, key, duration) => {
    const increment = end / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setStatCounts(prev => ({ ...prev, [key]: end }));
        clearInterval(timer);
      } else {
        setStatCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  const stats = [
    { icon: Award, number: statCounts.experience, suffix: '+', label: 'Years Experience' },
    { icon: Users, number: statCounts.clients, suffix: '+', label: 'Happy Clients' },
    { icon: BookOpen, number: statCounts.cases, suffix: '+', label: 'Cases Won' },
    { icon: Scale, number: statCounts.success, suffix: '%', label: 'Success Rate' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in every case we handle'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your rights and interests are our top priority in every legal matter'
    },
    {
      icon: Scale,
      title: 'Excellence',
      description: 'Delivering superior legal representation through expertise and dedication'
    },
  ];

  return (
    <section id="about" className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div 
          ref={sectionRef}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${
            visibleElements.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
            <Scale className="mx-3 sm:mx-4 w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />
            <div className="h-px w-8 sm:w-12 bg-amber-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            About <span className="text-amber-500">Advocate DEEP SINGH</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Delivering justice with integrity, expertise, and unwavering commitment to our clients
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Image Column */}
          <div 
            ref={imageRef}
            className={`transition-all duration-700 delay-100 ${
              visibleElements.image ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-amber-500/20 group-hover:border-amber-500/40 transition-all duration-500 shadow-2xl group-hover:shadow-amber-500/20">
                <img 
                  src="/images/Gold justice emblem and logo design.png"
                  alt="Advocate Deep Singh - Senior Legal Counsel"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl group-hover:shadow-amber-600/50 transition-shadow duration-300">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold">25+</p>
                  <p className="text-xs sm:text-sm font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div 
            ref={contentRef}
            className={`flex flex-col justify-center transition-all duration-700 delay-200 ${
              visibleElements.content ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Your Trusted Legal Partner in <span className="text-amber-500">Tricity</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                With over <strong className="text-amber-400">25 years of distinguished legal practice</strong>, Advocate Deep Singh has established himself as one of the most respected legal practitioners in Punjab. Specializing in civil litigation, criminal defense, family law, and corporate legal matters, our firm has successfully represented over 2,000 clients across diverse legal challenges.
              </p>
              
              <p>
                As a <strong className="text-amber-400">Senior Advocate practicing in the Supreme Court of India</strong>, our practice is built on three fundamental pillars: unwavering integrity, client-centered representation, and a proven track record of success. We understand that every legal matter is unique, and we provide personalized strategies tailored to your specific needs.
              </p>

              <p>
                Our commitment extends beyond winning cases—we believe in educating our clients about their rights, maintaining transparent communication throughout the legal process, and ensuring that justice is not just served, but truly achieved. Whether you're facing a complex litigation matter, need expert legal counsel for your business, or require representation in family disputes, our extensive experience across multiple practice areas ensures comprehensive legal support.
              </p>

              <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 sm:p-6 rounded-r-lg mt-6 hover:bg-amber-500/20 transition-colors duration-300">
                <p className="text-amber-400 font-semibold text-base sm:text-lg md:text-xl italic">
                  "Justice delayed is justice denied. We fight tirelessly to ensure your rights are protected and your voice is heard in every court of law."
                </p>
                <p className="text-white mt-2 text-sm sm:text-base">— Advocate Deep Singh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-700 delay-300 ${
            visibleElements.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="relative group bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-amber-500/20 text-center hover:border-amber-500/60 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-500 mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                      {stat.number}{stat.suffix}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div 
          ref={valuesRef}
          className={`transition-all duration-700 delay-400 ${
            visibleElements.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            Our Core <span className="text-amber-500">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="relative group bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-amber-500/20 hover:border-amber-500/60 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="bg-amber-500/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-amber-500/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {value.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;