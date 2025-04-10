import React from 'react'
import "../styles/Navbar.css";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false)
    const handleLinkClick = () => {
        setOpen(false);
      };

  return (
    <nav className="Nav">
      <div className="logo"><Link to="/">HappyTimeTravel</Link></div>

      
      {/* Hamburger menu visible only on mobile */}
      <div className="hamburger-menu">
          <Hamburger
              size={24}
              toggled={open}
              toggle={setOpen}
          />
      </div>

      

  

      {/* Inline nav for desktop/tablet screens */}
      <div className='inline-nav'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>

      {/* Dropdown nav for mobile when hamburger is toggled */}
      {open && <div className='nav-ul'>
          <ul>
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
              <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
          </ul>
      </div>}
    </nav>
  )
}

export default Navbar;