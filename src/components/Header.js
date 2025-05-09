import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          {/* Logo placeholder - replace with actual logo */}
          <div className="logo-placeholder">
            {/* Placeholder text removed */}
          </div>
        </a>
        
        <nav className="main-nav">
          <a href="/insurance" className="nav-link"></a>
          <a href="/coverage" className="nav-link"></a>
          <a href="/resources" className="nav-link"></a>
          <a href="/contact" className="nav-link"></a>
        </nav>
        
        <a href="tel:+18001234567" className="phone-number">
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
    </header>
  );
};

export default Header; 