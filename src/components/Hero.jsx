import React, { useEffect, useRef, useState } from 'react';
import { Scale, Phone, Calendar } from 'lucide-react';

// Trust Badges Component with Animation
const TrustBadges = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [casesCount, setCasesCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [showBadge1, setShowBadge1] = useState(false);
  const [showBadge2, setShowBadge2] = useState(false);
  const [showBadge3, setShowBadge3] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(true);
          animateSequence();
        }
      }
    };

    const animateSequence = () => {
      // Show first badge
      setTimeout(() => setShowBadge1(true), 200);
      
      // Show second badge and start counting
      setTimeout(() => {
        setShowBadge2(true);
        animateCount(0, 1000, setCasesCount, 2000);
      }, 500);
      
      // Show third badge and start counting
      setTimeout(() => {
        setShowBadge3(true);
        animateCount(0, 98, setSuccessRate, 2000);
      }, 800);
    };

    const animateCount = (start, end, setter, duration) => {
      const increment = end / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 px-4">
      <div 
        className={`bg-white/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg border border-white/20 transition-all duration-700 ${
          showBadge1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xs sm:text-sm md:text-base text-white font-semibold">Bar Council Certified</p>
      </div>
      
      <div 
        className={`bg-white/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg border border-white/20 transition-all duration-700 ${
          showBadge2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xs sm:text-sm md:text-base text-white font-semibold">
          {casesCount}+ Cases Won
        </p>
      </div>
      
      <div 
        className={`bg-white/10 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg border border-white/20 transition-all duration-700 ${
          showBadge3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xs sm:text-sm md:text-base text-white font-semibold">
          {successRate}% Success Rate
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check if screen is small or iPad
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isIPad = (
        (width === 768) || (width === 820) || (width === 834) || (width === 1024) ||
        navigator.userAgent.includes('iPad') || 
        (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
      );
      setIsSmallScreen(width < 768 && !isIPad);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Optimized video handling with performance improvements
    const video = videoRef.current;
    
    if (video) {
      // Essential settings for smooth playback
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      
      // Performance optimizations for zero lag
      video.preload = 'auto';
      video.poster = '';
      video.loading = 'eager';
      video.crossOrigin = 'anonymous';
      
      // Disable all animations and transitions during video load
      video.style.transition = 'none';
      video.style.animation = 'none';
      
      // Force browser optimization
      video.style.willChange = 'auto';
      video.style.backfaceVisibility = 'hidden';
      video.style.perspective = '1000px';
      video.style.transformStyle = 'preserve-3d';
      
      // Reduce quality on slower devices
      if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection.effectiveType === '2g' || connection.effectiveType === '3g') {
          video.style.filter = 'blur(0.5px)';
        }
      }
      
      // iPad-specific video adjustments to prevent stretching
      const adjustVideoFit = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Detect iPad devices
        const isIPad = (
          (width === 768 && height === 1024) ||
          (width === 820 && height === 1180) ||
          (width === 834 && height === 1194) ||
          (width === 1024 && height === 1366) ||
          (height === 768 && width === 1024) ||
          (height === 820 && width === 1180) ||
          (height === 834 && width === 1194) ||
          (height === 1024 && width === 1366) ||
          (navigator.userAgent.includes('iPad') || 
           (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document))
        );
        
        // Calculate aspect ratios
        const screenRatio = width / height;
        const videoRatio = 16 / 9;
        
        // Base styles for all devices
        video.style.objectFit = 'cover';
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.position = 'absolute';
        video.style.top = '0';
        video.style.left = '0';
        video.style.transform = 'translateZ(0)';
        
        // iPad-specific positioning to prevent stretching
        if (isIPad) {
          video.style.objectPosition = 'center center';
          video.style.minWidth = '100%';
          video.style.minHeight = '100%';
        }
        // Other devices
        else if (screenRatio > videoRatio) {
          video.style.objectPosition = 'center center';
        } else {
          video.style.objectPosition = 'center 40%';
        }
      };
      
      // Apply initial adjustments
      adjustVideoFit();
      
      // Minimal resize handling to reduce lag
      let resizeTimeout;
      const throttledResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustVideoFit, 500);
      };
      
      // Only listen to essential events
      window.addEventListener('resize', throttledResize, { passive: true });
      window.addEventListener('orientationchange', () => {
        setTimeout(adjustVideoFit, 600);
      }, { passive: true });
      
      // Force complete video load before any playback
      const forceVideoLoad = () => {
        return new Promise((resolve) => {
          if (video.readyState === 4) {
            resolve();
            return;
          }
          
          const checkLoad = () => {
            if (video.readyState === 4) {
              resolve();
            } else {
              setTimeout(checkLoad, 50);
            }
          };
          
          video.addEventListener('canplaythrough', resolve, { once: true });
          video.addEventListener('loadeddata', checkLoad, { once: true });
          
          video.load();
        });
      };
      
      // Play only when fully loaded
      const playVideo = async () => {
        try {
          await forceVideoLoad();
          await new Promise(resolve => setTimeout(resolve, 200));
          await video.play();
        } catch (error) {
          console.log('Initial autoplay failed, setting up user interaction');
          
          const enableVideo = async () => {
            try {
              await forceVideoLoad();
              await video.play();
              document.removeEventListener('click', enableVideo);
              document.removeEventListener('touchstart', enableVideo);
              document.removeEventListener('scroll', enableVideo);
            } catch (err) {
              console.log('Video play failed:', err);
            }
          };
          
          document.addEventListener('click', enableVideo, { once: true });
          document.addEventListener('touchstart', enableVideo, { once: true });
          document.addEventListener('scroll', enableVideo, { once: true });
        }
      };
      
      setTimeout(playVideo, 1000);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', throttledResize);
        window.removeEventListener('orientationchange', adjustVideoFit);
        clearTimeout(resizeTimeout);
      };
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // iPad-specific height calculation to prevent stretching
  const getContainerHeight = () => {
    if (typeof window === 'undefined') return '100vh';
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Detect iPad devices by common resolutions
    const isIPad = (
      (width === 768 && height === 1024) ||
      (width === 820 && height === 1180) ||
      (width === 834 && height === 1194) ||
      (width === 1024 && height === 1366) ||
      (height === 768 && width === 1024) ||
      (height === 820 && width === 1180) ||
      (height === 834 && width === 1194) ||
      (height === 1024 && width === 1366) ||
      (navigator.userAgent.includes('iPad') || 
       (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document))
    );
    
    // Mobile phones (portrait)
    if (width < 768) {
      return Math.min(height * 0.6, 500);
    }
    // iPad specific handling
    else if (isIPad) {
      return Math.min(width * 0.5625, height * 0.6);
    }
    // Other tablets and small laptops
    else if (width < 1024) {
      return Math.min(height * 0.7, 600);
    }
    // Desktop
    else {
      return '100vh';
    }
  };

  return (
    <section className="relative w-full">
      {/* Video Section - Full width, no overlays */}
      <div 
        className="relative w-full overflow-hidden bg-black"
        style={{ 
          height: getContainerHeight(),
          minHeight: isSmallScreen ? '300px' : '400px'
        }}
      >
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full"
            src="/images/lawyer-2025-12-17-19-40-34-utc.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster=""
            controls={false}
            crossOrigin="anonymous"
            loading="eager"
            disablePictureInPicture
            disableRemotePlayback
            x-webkit-airplay="deny"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              willChange: 'auto',
              WebkitTransform: 'translateZ(0)',
              WebkitBackfaceVisibility: 'hidden',
              imageRendering: 'optimizeSpeed',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              transition: 'none',
              animation: 'none',
            }}
          />
        </div>
      </div>

      {/* Content Section - Below Video */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Logo/Icon */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="bg-amber-600/20 backdrop-blur-sm p-3 sm:p-4 rounded-full border-2 border-amber-600/50">
                <Scale className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-amber-500" />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              Advocate <span className="text-amber-500">DEEP SINGH</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400/90 font-light mb-4 sm:mb-6">
              Senior Advocate | Supreme Court of India
            </p>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Defending Rights. Delivering Justice. <br className="hidden sm:block" />
              <span className="text-amber-500">25+ Years of Legal Excellence</span>
            </p>

            {/* Trust Badges */}
            <TrustBadges />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4">
              <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-600/50 flex items-center justify-center gap-2 sm:gap-3">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                Book Free Consultation
              </button>
              
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-2 sm:gap-3">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                Call Now: +91 98765 43210
              </button>
            </div>

            {/* Emergency Notice */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <p className="text-xs sm:text-sm md:text-base text-amber-400/80 font-medium">
                ⚡ Available for Emergency Legal Consultations 24/7
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;