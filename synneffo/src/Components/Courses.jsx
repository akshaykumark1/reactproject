import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      title: "Web Development",
      description: "Master HTML, CSS, JavaScript, and modern frameworks like React and Node.js.",
      duration: "12 weeks"
    },
    {
      title: "Data Science",
      description: "Learn Python, data analysis, machine learning, and real-world project building.",
      duration: "16 weeks"
    },
    {
      title: "UI/UX Design",
      description: "Design user-friendly interfaces with tools like Figma, Adobe XD, and more.",
      duration: "10 weeks"
    },
    {
      title: "Digital Marketing",
      description: "Boost business growth with SEO, social media, content, and analytics.",
      duration: "8 weeks"
    },
    {
      title: "Cybersecurity",
      description: "Understand ethical hacking, risk management, and network security essentials.",
      duration: "14 weeks"
    },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-title">Our Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <span className="course-duration">Duration: {course.duration}</span>
            <a href="/enroll" className="enroll-button">Enroll Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
