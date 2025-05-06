import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/courses/${id}/`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error("Error fetching course detail:", error);
      });
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-detail-container">
      <h1>{course.name}</h1>
      <img
        src={`http://localhost:8000${course.image}`} 
        alt={course.name}
        className="course-detail-image"
      />
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
    </div>
  );
};

export default CourseDetail;
