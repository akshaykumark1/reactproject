import React, { useState } from 'react';
import './Nav.css'; // Make sure the file path matches your folder structure

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Trippify
        </a>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <a href="/" className="navbar-links">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/destinations" className="navbar-links">
                Destinations
              </a>
            </li>
            <li className="navbar-item">
              <a href="/packages" className="navbar-links">
                Packages
              </a>
            </li>
            <li className="navbar-item">
              <a href="/reviews" className="navbar-links">
                Reviews
              </a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-links">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
