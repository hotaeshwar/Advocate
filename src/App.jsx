import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  const handleShowBooking = () => {
    setShowBooking(true);
    // Scroll to booking section after a small delay
    setTimeout(() => {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="App">
      <Navbar onConsultClick={handleShowBooking} />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="practice">
        <PracticeAreas />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      
      {/* Only render Booking section when showBooking is true */}
      {showBooking && (
        <div id="booking">
          <Booking />
        </div>
      )}
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;