import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Bright Future Institution</h1>
        <p>Your path to success starts here with quality education and expert guidance.</p>
        <a href="/courses" className="explore-button">Explore Courses</a>
      </header>

      <section className="home-services">
        <h2 className="section-title">What We Offer</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Career-Focused Courses</h3>
            <p>We offer hands-on training in Web Development, Data Science, Design, and more.</p>
          </div>
          <div className="service-card">
            <h3>Student Reviews</h3>
            <p>Hear from students who transformed their careers through Bright Future.</p>
          </div>
          <div className="service-card">
            <h3>24/7 Guidance</h3>
            <p>Access mentorship and support anytime throughout your learning journey.</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
