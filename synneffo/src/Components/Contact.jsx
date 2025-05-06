import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">We’d love to hear from you! Whether you have a question or just want to say hi, our team is ready to help.</p>

      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@brightfuture.edu</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123 Learning Street, Knowledge City, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
