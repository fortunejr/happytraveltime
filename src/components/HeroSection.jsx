import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css'; // create this CSS file


const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="hero-content">
        <h1>Explore and Travel</h1>
        <h3>We're your Gateway to Seamless Travel Experiences!</h3>
        <Link to="/contact">
            <button className="hero-button">Contact us now</button>
        </Link>
        </div>
    </div>
  )
}

export default HeroSection