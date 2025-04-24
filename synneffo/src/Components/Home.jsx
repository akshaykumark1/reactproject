import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Trippify</h1>
        <p>Your dream destination is just a click away.</p>
        <a href="/destinations" className="explore-button">Explore Destinations</a>
      </header>

      <section className="home-services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Customized Packages</h3>
            <p>Choose from a range of customized travel packages for a perfect trip.</p>
          </div>
          <div className="service-card">
            <h3>Trusted Reviews</h3>
            <p>Read reviews from travelers to help you make the best decision.</p>
          </div>
          <div className="service-card">
            <h3>24/7 Support</h3>
            <p>Get support anytime, anywhere to ensure a seamless travel experience.</p>
          </div>
        </div>
      </section>

      <section className="home-footer">
        <p>© 2025 Trippify. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default Home;
