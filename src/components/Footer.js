import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-logo">Wanderlust <span className="accent">Assured</span></h3>
            <p className="footer-description">
              Protecting your adventures around the world with comprehensive travel insurance solutions.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Insurance</h4>
            <ul className="footer-links">
              <li><a href="/travel-medical">Travel Medical Insurance</a></li>
              <li><a href="/trip-cancellation">Trip Cancellation</a></li>
              <li><a href="/baggage">Baggage Protection</a></li>
              <li><a href="/evacuation">Emergency Evacuation</a></li>
              <li><a href="/adventure">Adventure Activities Coverage</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="/blog">Travel Blog</a></li>
              <li><a href="/destinations">Destination Guide</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <div className="contact-info">
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:hello@wanderlustassured.com">hello@wanderlustassured.com</a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+18001234567">+1 (800) 123-4567</a>
              </p>
              <p>
                <strong>Address:</strong><br />
                123 Insurance Ave<br />
                Travel City, TC 10001
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2023 Wanderlust Assured. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 