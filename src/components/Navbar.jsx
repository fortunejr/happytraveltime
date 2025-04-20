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
    <nav className="Nav">
      <div className="logo">
        <NavLink exact="true" to="/"><img width='150px' src="/images/logo.png" alt="logo"></img></NavLink>
      </div>

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
          <li><NavLink exact="true" to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>Our Services</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Dropdown nav for mobile when hamburger is toggled */}
      {open && (
        <div className='nav-ul'>
          <ul>
            <li><NavLink exact="true" to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
            <li><NavLink to="/services" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
