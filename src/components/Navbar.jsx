import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`navbar ${open ? 'navbar-expanded' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <NavLink exact="true" to="/">
            <img width="150px" src="/images/logo.png" alt="logo" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><NavLink exact="true" to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>Our Services</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <Hamburger toggled={open} toggle={setOpen} size={24} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-wrapper ${open ? 'open' : ''}`}>
        <ul>
          <li><NavLink exact="true" to="/" onClick={handleLinkClick} className="mobile-link">Home</NavLink></li>
          <li><NavLink to="/about" onClick={handleLinkClick} className="mobile-link">About Us</NavLink></li>
          <li><NavLink to="/services" onClick={handleLinkClick} className="mobile-link">Our Services</NavLink></li>
          <li><NavLink to="/contact" onClick={handleLinkClick} className="mobile-link">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
