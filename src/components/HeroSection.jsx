import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="overlay"></div>
        <h1>Unlock the adventure of a lifetime!</h1>
        <h3>From exotic beaches to bustling cities, we make your travel dreams come true</h3>

        <div className="button-group">
          <Link to="/contact">
            <button className="hero-button">Book your trip now</button>
          </Link>

          <a 
            href="https://wa.me/2348116649112" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="hero-button2">
              <FaWhatsapp className="whatsapp-icon" />
              Chat on WhatsApp
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
