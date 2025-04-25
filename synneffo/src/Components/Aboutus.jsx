import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h1>About Bright Learners</h1>
        <p>Your gateway to knowledge and career success</p>
      </div>

      <div className="aboutus-content">
        <div className="aboutus-section">
          <p>
            Bright Learners is a leading online learning platform dedicated to empowering students and professionals through high-quality, practical courses. We focus on delivering real-world skills in web development, data science, UI/UX design, and more.
          </p>
        </div>

        <div className="aboutus-section">
          <h2>Our Mission</h2>
          <p>
            To make learning accessible, engaging, and effective for everyone, everywhere. We believe in building futures one lesson at a time.
          </p>
        </div>

        <div className="aboutus-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Expert instructors with real-world experience</li>
            <li>Hands-on projects and practical content</li>
            <li>Flexible learning schedule</li>
            <li>Dedicated support and community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
