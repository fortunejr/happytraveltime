import React from 'react'
import "../styles/OurServicesSection.css";
import { Link } from 'react-router-dom';

const OurServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-subtitle">OUR SERVICES</span>
        <h2 className="services-title">We love what we do and it shows!</h2>
        <p className="services-description">
          We understand there is no unique way to make a perfect journey that everyone will like because each person has differing needs and desires. That’s why we always listen to you first before suggesting the travel solution that is the best for you.
        </p>
      </div>

      <div className="services-grid">
        <div
          className="service-card"
          style={{ backgroundImage: "url('/images/tourist-visa.jpg')" }}
        >
          <div className="service-overlay">
            <h3>Tourist Visa</h3>
            <p>We assist with obtaining tourist visas tailored to your travel destination and duration.</p>
          </div>
        </div>
        <div
          className="service-card"
          style={{ backgroundImage: "url('/images/study-visa.jpg')" }}
        >
          <div className="service-overlay">
            <h3>Study Visa</h3>
            <p>Guidance and support for applying to international study programs and acquiring study visas.</p>
          </div>
        </div>
        <div
          className="service-card"
          style={{ backgroundImage: "url('/images/work-permit.png')" }}
        >
          <div className="service-overlay">
            <h3>Work Permit & Visa</h3>
            <p>Get help with job-based visa processing, documentation, and permit guidance globally.</p>
          </div>
        </div>
        <div
          className="service-card"
          style={{ backgroundImage: "url('/images/hotel-reservation.png')" }}
        >
          <div className="service-overlay">
            <h3>Hotel Reservation</h3>
            <p>Book quality hotels and accommodations at competitive prices with flexible options.</p>
          </div>
        </div>
      </div>

      <div className="services-footer">
        <Link to="/services">
        <button className="see-more-btn">See More</button>
        </Link>
      </div>
    </section>
  )
}

export default OurServicesSection   