import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div class="newsletter-container">
            <h2>Subscribe to our Newsletter</h2>
            <form class="newsletter-form" action="/subscribe" method="POST">
                <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        
      <div className="footer-flex">
        <div className="about">
          <h4>About Us</h4>
          <p className="about-p">
            At Happy Travel Time we’re not just about booking trips;
            we’re about crafting unforgettable experiences.
          </p>
        </div>

        <div className="links">
          <h4>Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/appointment">Book an Appointment</Link>
            </li>
          </ul>
        </div>

        <div className="socials">
          <h4>Follow us on Social Media</h4>
          <ul className="social-icons">
            <li>
              <a target="_blank" rel="noreferrer" href="#">
                <img src="/images/facebook.png" alt="facebook icon"></img>
                Facebook
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="#">
                <img src="/images/instagram.png" alt="instagram icon"></img>
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="#">
                <img src="/images/linkedin.png" alt="linkedin icon"></img>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" alt="mail icon">
                <img src="/images/mail.png"></img>Send a Mail
              </a>
            </li>
          </ul>
        </div>

        <div className="other-contact">
          <h4>Other Contacts</h4>
          <p className="other-p">Head Office: Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p className="other-p">US Office: Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <li>
            <a href="tel:+16262188870" alt="mail icon">
              <img src="/images/phone2.png"></img>+1-(626)-218-1234
            </a>
          </li>
          <li>
            <a href="tel:+16262188870" alt="mail icon">
              <img src="/images/phone2.png"></img>+234-(0)-912-3456-789
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
