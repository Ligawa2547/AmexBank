import React from 'react';

const CourseEnrollment = ({ course }) => {
  return (
    <div>
      <h3>Enroll in {course.title}</h3>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseEnrollment;

