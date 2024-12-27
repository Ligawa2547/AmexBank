import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <header>
        <h1>Welcome to WGU eLearning Platform</h1>
        <p>Your education, your pace. Start your journey at WGU today.</p>
        <Link to="/courses" className="btn">Explore Courses</Link>
      </header>

      <section>
        <h2>Why WGU?</h2>
        <p>At WGU, we offer flexible, affordable, and accredited degree programs designed to help you succeed. Learn at your own pace with 24/7 access to your coursework and a personal mentor to guide you every step of the way.</p>
        <Link to="/signup" className="btn">Get Started</Link>
      </section>
    </div>
  );
};

export default Index;

