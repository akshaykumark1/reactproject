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
          Bright learners
        </a>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <a href="/" className="navbar-links">
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="/Aboutus" className="navbar-links">
                About Us
              </a>
            </li>
            <li className="navbar-item dropdown">
              <a href="/courses" className="navbar-links">
                Courses
              </a>
              <ul className="dropdown-menu">
                <li><a href="/courses/web" className="dropdown-link">Web Development</a></li>
                <li><a href="/courses/data" className="dropdown-link">Data Science</a></li>
                <li><a href="/courses/design" className="dropdown-link">UI/UX Design</a></li>
              </ul>
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
