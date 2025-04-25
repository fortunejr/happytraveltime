import React from 'react'
import "../styles/WhyChooseUsSection.css";
import { Link } from 'react-router-dom';

const WhyChooseUsSection = () => {
  return (
    <div className="wayfare-container">
      {/* Left image section */}
      <div className="wayfare-image">
        <img
          src="/images/talking.jpg"
          alt="Wayfare Travels Promo"
          className="wayfare-img"
        />
      </div>

      {/* Right text and features section */}
      <div className="wayfare-text">
        <h3 className="wayfare-subheading">Why Choose</h3>
        <h2 className="wayfare-heading">HappyTravelTime</h2>

        <div className="wayfare-features">
          <div className="feature-box">
            <span className="feature-icon">🏨</span>
            <span>Affordable Flights and Hotels</span>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🧠</span>
            <span>Expert Advice and Insight</span>
          </div>
          <div className="feature-box">
            <span className="feature-icon">💖</span>
            <span>Greater Peace of Mind</span>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🤝</span>
            <span>Assistance With Travel Policies</span>
          </div>
          <div className="feature-box">
            <span className="feature-icon">⏱️</span>
            <span>More Time for Other Tasks</span>
          </div>
          <div className="feature-box">
            <span className="feature-icon">🗺️</span>
            <span>Customized Travel Itineraries</span>
          </div>
        </div>

        <button className="wayfare-button">
        <Link to="/about">
          Learn More about Us
          </Link>
        </button>
      </div>
    </div>
  )
}

export default WhyChooseUsSection