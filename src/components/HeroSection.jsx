import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css'; // create this CSS file


const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="hero-content">
        <div className="overlay"></div>
        <h1>Unlock the adventure of a lifetime!</h1>
        <h3>From exotic beaches to bustling cities, we make your travel dreams come true</h3>
        <Link to="/contact">    
            <button className="hero-button">Book now</button>
        </Link>
        </div>
    </div>
  )
}

export default HeroSection