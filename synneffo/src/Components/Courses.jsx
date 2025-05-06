import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/courses/')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="courses-container">
      <h1 className="courses-title">Our Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            {course.duration && (
              <p><strong>Duration:</strong> {course.duration}</p>
            )}
            <Link to={`/courses/${course.id}`} className="enroll-button">Enroll Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
