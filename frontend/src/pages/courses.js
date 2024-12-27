import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
      <header>
        <h1>Explore Our Courses</h1>
        <p>Find the right course for your career goals</p>
      </header>

      <section>
        <h2>Popular Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <h3>Business Administration</h3>
            <p>Gain the skills to lead in the world of business with our accredited Business Administration program.</p>
            <Link to="/course/1" className="btn">Learn More</Link>
          </div>
          <div className="course-card">
            <h3>Information Technology</h3>
            <p>Develop the expertise to work in the fast-growing IT field with WGU's comprehensive IT programs.</p>
            <Link to="/course/2" className="btn">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

