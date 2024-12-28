import React from 'react';

const CourseDetail = ({ course }) => {
  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseDetail;

